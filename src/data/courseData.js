import { 
  Globe, 
  TrendingUp, 
  Scale, 
  Shield, 
  Lightbulb,
  Target,
  Building2,
  Coins,
  Users,
  BookOpen,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

export const modules = [
  {
    id: 'welcome',
    title: 'Giới thiệu khóa học',
    description: 'Tổng quan về nội dung và mục tiêu học tập',
    status: 'completed'
  },
  {
    id: 'module-1',
    title: 'Lời mở đầu',
    description: 'Bối cảnh toàn cầu hóa và vấn đề đặt ra cho Việt Nam',
    status: 'current'
  },
  {
    id: 'module-2',
    title: 'Khái niệm & Nội dung Hội nhập',
    description: 'Định nghĩa, tính tất yếu và các bước chuẩn bị',
    status: 'current'
  },
  {
    id: 'module-3',
    title: 'Tác động của Hội nhập',
    description: 'Phân tích tác động tích cực và tiêu cực',
    status: 'current'
  },
  {
    id: 'module-4',
    title: '"Biên giới mềm" & Giải pháp',
    description: 'Tự chủ hay phụ thuộc? Chiến lược cho Việt Nam',
    status: 'current'
  },
  {
    id: 'module-end',
    title: 'Kết thúc khóa học',
    description: 'Tổng kết và đánh giá kiến thức',
    status: 'current'
  },
  {
    id: 'module-ai',
    title: 'AI Tools & Attribution',
    description: 'Công cụ AI được sử dụng và nguồn tham khảo',
    status: 'current'
  }
];

export const moduleContents = {
  'module-1': {
    category: 'Lời mở đầu',
    title: 'Bối cảnh toàn cầu hóa',
    readingTime: 4,
    lastUpdated: '16/12/2024',
    heroImage: '/images/anh1.png',
    heroAlt: 'Global economy and international trade',
    takeaways: [
      {
        icon: Globe,
        title: 'Toàn cầu hóa',
        summary: 'Các nền kinh tế gắn kết chặt chẽ qua thương mại, đầu tư và công nghệ.'
      },
      {
        icon: TrendingUp,
        title: 'Biên giới mềm',
        summary: 'Sức mạnh kinh tế phụ thuộc vào năng lực cạnh tranh và khả năng thích ứng.'
      },
      {
        icon: Scale,
        title: 'Thách thức Việt Nam',
        summary: 'Hội nhập để phát triển nhưng tránh phụ thuộc vào bên ngoài.'
      }
    ],
    content: {
      overview: `Trong bối cảnh toàn cầu hóa hiện nay, các nền kinh tế quốc gia ngày càng gắn kết chặt chẽ với nhau thông qua thương mại, đầu tư, công nghệ và lao động. Ranh giới kinh tế truyền thống dựa trên lãnh thổ đang dần bị xóa nhòa, thay vào đó là khái niệm "biên giới mềm", nơi sức mạnh kinh tế được quyết định bởi năng lực cạnh tranh, trình độ công nghệ và khả năng thích ứng.`,
      mainPoints: [
        'Toàn cầu hóa làm gắn kết các nền kinh tế quốc gia',
        'Khái niệm "biên giới mềm" thay thế ranh giới lãnh thổ truyền thống',
        'Sức mạnh kinh tế phụ thuộc vào năng lực cạnh tranh'
      ],
      deepDive: `Đối với Việt Nam – một quốc gia đang phát triển – hội nhập kinh tế quốc tế là con đường tất yếu để phát triển. Tuy nhiên, hội nhập sâu rộng cũng đặt ra nguy cơ phụ thuộc vào vốn, công nghệ và thị trường bên ngoài, từ đó ảnh hưởng đến độc lập, tự chủ kinh tế.`,
      keyQuestion: 'Việt Nam cần hội nhập như thế nào để vừa phát triển, vừa giữ vững chủ quyền kinh tế quốc gia?'
    }
  },
  'module-2': {
    category: 'Chương 6.2.1',
    title: 'Hội nhập Kinh tế Quốc tế của Việt Nam',
    readingTime: 8,
    lastUpdated: '16/12/2024',
    heroImage: '/images/anh2.png',
    heroAlt: 'Industrial manufacturing and production',
    takeaways: [
      {
        icon: BookOpen,
        title: 'Khái niệm',
        summary: 'Gắn kết nền kinh tế với thế giới, chia sẻ lợi ích và tuân theo "luật chơi" chung.'
      },
      {
        icon: Target,
        title: 'Tính tất yếu',
        summary: 'Tận dụng cơ hội, xu thế thời đại, phát triển lực lượng sản xuất.'
      },
      {
        icon: Building2,
        title: 'Chuẩn bị',
        summary: 'Cải cách thể chế, đa dạng hóa hình thức và mức độ hội nhập.'
      }
    ],
    content: {
      definition: `Hội nhập kinh tế quốc tế của một quốc gia là quá trình quốc gia đó thực hiện gắn kết nền kinh tế của mình với nền kinh tế thế giới dựa trên sự chia sẻ lợi ích đồng thời tuân thủ các chuẩn mực quốc tế chung.`,
      whyIntegrate: {
        title: 'Tại sao cần hội nhập? (Tính tất yếu khách quan)',
        items: [
          'Thứ nhất, do xu thế khách quan trong bối cảnh toàn cầu hóa kinh tế.',
          'Thứ hai, hội nhập kinh tế quốc tế là phương thức phát triển phổ biến của các nước, nhất là các nước đang và kém phát triển trong điều kiện hiện nay.',     ]
      },
      preparation: {
        title: 'Nội dung hội nhập (Cần chuẩn bị những gì?)',
        items: [
          'Chuẩn bị điều kiện nội tại: Cải cách thể chế, pháp luật, đào tạo con người, nâng cấp hạ tầng. Ví dụ: Sửa Luật Đầu tư để người nước ngoài dễ kinh doanh; học tiếng Anh, tin học để làm việc quốc tế.',
          'Đa dạng hóa hình thức và mức độ: Từ thấp đến cao - Thỏa thuận ưu đãi → Khu vực mậu dịch tự do (FTA) → Liên minh thuế quan... Ví dụ: Việt Nam ký EVFTA với châu Âu để giảm thuế về 0% cho nhiều mặt hàng.'
        ]
      }
    }
  },
  'module-3': {
    category: 'Chương 6.2.2',
    title: 'Tác động của Hội nhập Kinh tế',
    readingTime: 7,
    lastUpdated: '16/12/2024',
    heroImage: '/images/anh3.png',
    heroAlt: 'Industrial factory and economic growth',
    takeaways: [
      {
        icon: CheckCircle,
        title: 'Tích cực',
        summary: 'Mở rộng thị trường, thu hút đầu tư, nâng cao vị thế quốc gia.'
      },
      {
        icon: AlertTriangle,
        title: 'Tiêu cực',
        summary: 'Cạnh tranh gay gắt, phụ thuộc kinh tế, bất bình đẳng xã hội.'
      },
      {
        icon: Scale,
        title: 'Con dao hai lưỡi',
        summary: 'Hội nhập vừa có lợi (cơ hội) vừa có hại (thách thức).'
      }
    ],
    content: {
      intro: 'Hội nhập là "con dao hai lưỡi", vừa có lợi (cơ hội) vừa có hại (thách thức).',
      positive: {
        title: 'Tác động tích cực',
        items: [
          'Mở rộng thị trường & Thu hút nguồn lực: Giúp hàng hóa bán ra thế giới, thu hút vốn và công nghệ mới.',
          'Tạo động lực tái cơ cấu kinh tế: Chuyển dịch sang các ngành hiện đại, hiệu quả hơn. Ví dụ: Chuyển từ thuần nông sang công nghiệp, dịch vụ, xuất khẩu phần mềm.',
          'Lợi ích cho người tiêu dùng: Được dùng hàng đa dạng, chất lượng, giá cạnh tranh. Ví dụ: Người Việt mua được iPhone, hàng Nhật, mỹ phẩm Hàn ngay tại VN.',
          'Nâng cao vị thế và an ninh: Tăng uy tín chính trị, giữ vững hòa bình. Ví dụ: Có "anh lớn" chống lưng thì không ai dám động đến.'
        ]
      },
      negative: {
        title: 'Tác động tiêu cực',
        items: [
          'Làm gia tăng sự cạnh tranh: Doanh nghiệp yếu có thể phá sản.',
          'Gia tăng sự phụ thuộc: Kinh tế dễ bị tổn thương khi thế giới biến động.',
          'Bất bình đẳng xã hội: Khoảng cách giàu nghèo tăng lên (người có kỹ năng hưởng lợi nhiều hơn).',
          'Nguy cơ môi trường & "Bãi rác công nghệ": Tiếp nhận công nghệ lạc hậu, gây ô nhiễm.',
          'Xói mòn văn hóa & An ninh: Tăng nguy cơ khủng bố quốc tế, buôn lậu, tội phạm xuyên quốc gia, dịch bệnh, nhập cư bất hợp pháp.'
        ]
      }
    }
  },
  'module-4': {
    category: 'Chủ đề chính',
    title: '"Biên giới mềm" – Tự chủ hay Phụ thuộc?',
    readingTime: 10,
    lastUpdated: '16/12/2024',
    heroImage: '/images/anh4.png',
    heroAlt: 'Modern city and economic development',
    takeaways: [
      {
        icon: Target,
        title: 'Vấn đề cốt lõi',
        summary: 'Mở cửa để phát triển nhưng dễ bị lệ thuộc - mâu thuẫn cần giải quyết.'
      },
      {
        icon: Scale,
        title: 'Quan hệ biện chứng',
        summary: 'Hội nhập và Tự chủ không đối lập mà là điều kiện của nhau.'
      },
      {
        icon: Shield,
        title: 'Giải pháp',
        summary: 'Chủ động hội nhập, xây dựng nội lực, đa dạng hóa quan hệ.'
      }
    ],
    content: {
      coreIssue: '"Biên giới mềm" (hội nhập) xóa bỏ rào cản kinh tế, dòng vốn và hàng hóa di chuyển tự do. Việt Nam đứng trước mâu thuẫn: Mở cửa để phát triển nhưng dễ bị lệ thuộc.',
      whyAccept: {
        title: 'Tại sao phải chấp nhận "Biên giới mềm"?',
        content: 'Việt Nam đang thiếu vốn, công nghệ, quản lý. Hội nhập là con đường duy nhất để huy động nguồn lực bên ngoài bù đắp cho thiếu hụt bên trong. Không hội nhập = Tự cô lập và tụt hậu.'
      },
      twoSides: {
        opportunity: {
          title: 'Cơ hội (Để Tự chủ)',
          content: 'Tăng thực lực kinh tế nhờ vốn FDI, tiếp cận công nghệ mới, mở rộng thị trường xuất khẩu.'
        },
        risk: {
          title: 'Nguy cơ (Gây Phụ thuộc)',
          content: 'Doanh nghiệp nội thua ngay trên sân nhà; trở thành "bãi rác công nghệ"; nền kinh tế dễ tổn thương khi thế giới biến động.'
        }
      },
      dialectical: {
        title: 'Mối quan hệ biện chứng',
        points: [
          'Hội nhập và Tự chủ không đối lập mà là điều kiện của nhau.',
          'Hội nhập là phương tiện: Dùng nguồn lực thế giới để xây dựng nội lực quốc gia.',
          'Tự chủ là nền tảng: Nội lực mạnh mới giúp hội nhập bình đẳng, không bị hòa tan hay chi phối.'
        ]
      },
      solutions: {
        title: 'Điều kiện để không bị phụ thuộc (Giải pháp)',
        items: [
          'Nội lực là quyết định: Ưu tiên phát triển doanh nghiệp Việt, không để nền kinh tế phụ thuộc hoàn toàn vào khu vực FDI.',
          'Đa dạng hóa: "Không bỏ trứng vào một giỏ". Đa dạng thị trường và đối tác để tránh lệ thuộc vào một quốc gia duy nhất.',
          'Nắm công nghệ & Nhân lực: Chuyển từ gia công giá rẻ sang làm chủ công nghệ để thoát khỏi vị trí dưới đáy chuỗi giá trị.',
          'Nhà nước kiến tạo: Giữ vững vai trò quản lý, tạo hành lang pháp lý để bảo vệ lợi ích quốc gia trong sân chơi quốc tế.'
        ]
      },
      conclusion: 'Việt Nam chọn chủ động hội nhập để xây dựng nền kinh tế độc lập, tự chủ. Chúng ta hòa nhập (tuân thủ luật chơi) nhưng không hòa tan (giữ vững bản sắc và chủ quyền).'
    }
  },
  'module-end': {
    category: 'Kết thúc',
    title: 'Tổng kết khóa học',
    readingTime: 3,
    lastUpdated: '16/12/2024',
    heroImage: '/images/anh5.png',
    heroAlt: 'Graduation and achievement',
    takeaways: [
      {
        icon: CheckCircle,
        title: 'Hoàn thành',
        summary: 'Bạn đã hoàn thành toàn bộ nội dung khóa học.'
      },
      {
        icon: Lightbulb,
        title: 'Kiến thức',
        summary: 'Hiểu rõ về hội nhập kinh tế và chiến lược của Việt Nam.'
      },
      {
        icon: Target,
        title: 'Tiếp theo',
        summary: 'Thử sức với Quiz Game để kiểm tra kiến thức!'
      }
    ],
    content: {
      congratulations: 'Chúc mừng bạn đã hoàn thành khóa học về Hội nhập Kinh tế Quốc tế của Việt Nam!',
      summary: [
        'Hiểu được bối cảnh toàn cầu hóa và khái niệm "biên giới mềm"',
        'Nắm vững khái niệm hội nhập kinh tế quốc tế và tính tất yếu của nó',
        'Phân tích được tác động tích cực và tiêu cực của hội nhập',
        'Hiểu mối quan hệ biện chứng giữa hội nhập và tự chủ kinh tế',
        'Biết các giải pháp để Việt Nam hội nhập hiệu quả mà không bị phụ thuộc'
      ],
      nextStep: 'Hãy thử sức với Quiz Game để kiểm tra và củng cố kiến thức của bạn!'
    }
  },
  'module-ai': {
    category: 'Công cụ & Tham khảo',
    title: 'AI Tools & Attribution',
    readingTime: 2,
    lastUpdated: '18/12/2024',
    heroImage: null,
    heroAlt: 'AI Tools and Attribution',
    takeaways: [
      {
        icon: BookOpen,
        title: 'Công cụ AI',
        summary: 'Danh sách các công cụ AI được sử dụng để tạo nội dung này.'
      },
      {
        icon: CheckCircle,
        title: 'Nguồn tham khảo',
        summary: 'Tất cả nội dung được tham khảo từ tài liệu chính thức.'
      },
      {
        icon: Shield,
        title: 'Cam kết',
        summary: 'Nội dung được tạo với mục đích giáo dục và học tập.'
      }
    ],
    content: {
      introduction: 'Khóa học này được xây dựng với sự hỗ trợ của các công cụ Artificial Intelligence hiện đại, nhằm nâng cao chất lượng nội dung và trải nghiệm học tập.',
      toolsUsed: [
        'NotebookLM - Để tổng hợp, phân tích và tóm tắt tài liệu',
        'Google Gemini - Để hỗ trợ viết và chỉnh sửa nội dung',
        'GitHub Copilot - Để hỗ trợ lập trình React và JavaScript',
        'Claude - Để soạn thảo và cải thiện nội dung chi tiết',
        'CanvaAI - Để hỗ trợ thiết kế giao diện người dùng'
      ],
      sources: {
        primary: 'Tài liệu chính của khóa học MLN122 (Kinh tế Chính trị)',
        secondary: 'Các nguồn tham khảo chính thức về hội nhập kinh tế quốc tế'
      },
      teamCommitment: 'Nhóm Thomas Picasso cam kết rằng các công cụ AI được sử dụng hoàn toàn cho mục đích giáo dục, nâng cao chất lượng nội dung học tập, và không được dùng để vi phạm bản quyền hoặc quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào.',
      usage: 'Nội dung này được tạo ra nhằm mục đích cung cấp tài liệu học tập chất lượng cao cho học sinh và sinh viên. Tất cả thông tin được kiểm duyệt và cập nhật theo những phát triển mới nhất.'
    }
  }
};
