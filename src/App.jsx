import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Welcome from './components/Welcome';
import ModuleContent from './components/ModuleContent';
import { modules as initialModules, moduleContents } from './data/courseData';
import './styles/layout.css';
import './styles/sidebar.css';
import './styles/content.css';
import './styles/welcome.css';

const App = () => {
  const [currentView, setCurrentView] = useState('welcome');
  const [activeModuleId, setActiveModuleId] = useState('module-1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [visitedModules, setVisitedModules] = useState(['welcome']);

  // Compute modules with dynamic status based on visited modules
  const modules = initialModules.map(module => ({
    ...module,
    status: visitedModules.includes(module.id) ? 'completed' : 
            module.id === activeModuleId ? 'current' : 'current'
  }));

  // Close sidebar on window resize (for responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle starting the course
  const handleStart = () => {
    setCurrentView('course');
    setActiveModuleId('module-1');
    setVisitedModules(prev => 
      prev.includes('module-1') ? prev : [...prev, 'module-1']
    );
  };

  // Handle module navigation
  const handleModuleClick = (moduleId) => {
    if (moduleId === 'welcome') {
      setCurrentView('welcome');
    } else {
      setActiveModuleId(moduleId);
      setCurrentView('course');
      // Mark module as visited/completed
      setVisitedModules(prev => 
        prev.includes(moduleId) ? prev : [...prev, moduleId]
      );
    }
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  };

  // Get navigation data
  const currentModuleIndex = modules.findIndex(m => m.id === activeModuleId);
  const prevModule = currentModuleIndex > 1 ? modules[currentModuleIndex - 1] : null;
  const nextModule = currentModuleIndex < modules.length - 1 ? modules[currentModuleIndex + 1] : null;
  const activeModule = modules.find(m => m.id === activeModuleId);
  const activeModuleData = moduleContents[activeModuleId];

  // Render welcome page
  if (currentView === 'welcome') {
    return <Welcome onStart={handleStart} />;
  }

  // Render course content
  return (
    <div className="app-layout">
      <Sidebar
        modules={modules}
        activeModuleId={activeModuleId}
        onModuleClick={handleModuleClick}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {activeModuleData && (
        <ModuleContent
          module={activeModule}
          moduleData={activeModuleData}
          prevModule={prevModule}
          nextModule={nextModule}
          onNavigate={handleModuleClick}
        />
      )}
    </div>
  );
};

export default App;
