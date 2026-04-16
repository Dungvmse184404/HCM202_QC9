import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeBlock = ({ language, code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__language">{language}</span>
        <button className="code-block__copy" onClick={handleCopy}>
          {copied ? (
            <>
              <Check size={14} />
              <span>Đã sao chép</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Sao chép</span>
            </>
          )}
        </button>
      </div>
      <div className="code-block__content">
        <pre className="code-block__pre">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
