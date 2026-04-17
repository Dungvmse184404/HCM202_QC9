import {
  BookOpen,
  Lightbulb,
  CheckCircle,
  Shield,
  Target,
  Users,
  Scale,
  Heart
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
    title: 'Tư tưởng HCM về Văn hóa',
    description: 'Khái niệm, vai trò và định hướng xây dựng nền văn hóa mới',
    status: 'current'
  },
  {
    id: 'module-2',
    title: 'Tư tưởng HCM về Đạo đức',
    description: 'Chuẩn mực đạo đức cách mạng và nguyên tắc xây dựng',
    status: 'current'
  },
  {
    id: 'module-3',
    title: 'Tư tưởng HCM về Con người',
    description: 'Quan niệm về con người và chiến lược "trồng người"',
    status: 'current'
  },
  {
    id: 'module-4',
    title: 'Mối liên hệ & Ý nghĩa thực tiễn',
    description: 'Tổng hợp và vận dụng trong thời đại ngày nay',
    status: 'current'
  },
  {
    id: 'module-end',
    title: 'Hiểu mình để vươn ra thế giới',
    description: 'Kết luận - ứng dụng tư tưởng HCM vào hành trình phát triển bản thân',
    status: 'current'
  },
  {
    id: 'module-ai',
    title: 'AI Tools & Nguồn tham khảo',
    description: 'Công cụ AI được sử dụng và tài liệu tham khảo',
    status: 'current'
  }
];

export const moduleContents = {
  'module-1': {
    category: 'Chương 6.1',
    title: 'Tư tưởng Hồ Chí Minh về Văn hóa',
    readingTime: 6,
    lastUpdated: '16/04/2026',
    heroImage: '/images/anh1.png',
    heroAlt: 'Văn hóa dân tộc Việt Nam',
    takeaways: [
      {
        icon: BookOpen,
        title: 'Khái niệm & Vị trí',
        summary:
          'Văn hóa là sự tổng hợp mọi phương thức sinh hoạt và sáng tạo của loài người, thuộc kiến trúc thượng tầng, quan hệ biện chứng với kinh tế và chính trị.'
      },
      {
        icon: Lightbulb,
        title: 'Vai trò kép',
        summary:
          'Văn hóa vừa là mục tiêu (hướng tới Chân – Thiện – Mỹ), vừa là động lực và mặt trận của sự nghiệp cách mạng.'
      },
      {
        icon: CheckCircle,
        title: 'Ba tính chất',
        summary:
          'Nền văn hóa mới phải mang tính dân tộc, khoa học và đại chúng.'
      }
    ],
    content: {
      definition:
        'Văn hóa theo nghĩa rộng là sự tổng hợp mọi phương thức sinh hoạt và sáng tạo của loài người nhằm thích ứng với nhu cầu sinh tồn. Văn hóa thuộc kiến trúc thượng tầng, có mối quan hệ biện chứng (tác động qua lại) mật thiết với chính trị, kinh tế và xã hội.',
      roles: {
        title: 'Tính chất và vai trò của văn hóa',
        items: [
          'Văn hóa vừa là mục tiêu: hướng tới quyền sống, quyền tự do, mưu cầu hạnh phúc và các giá trị Chân -Thiện - Mỹ.',
          'Văn hóa vừa là động lực: thúc đẩy sự nghiệp cách mạng phát triển.',
          'Văn hóa là một mặt trận: những người làm công tác văn hóa, nghệ thuật là chiến sĩ, dùng ngòi bút làm vũ khí sắc bén để phụng sự Tổ quốc và phục vụ nhân dân.',
          'Mọi hoạt động văn hóa phải "từ trong quần chúng ra, về sâu trong quần chúng" - do nhân dân thẩm định và phục vụ nhân dân.'
        ]
      },
      orientation: {
        title: 'Định hướng xây dựng nền văn hóa mới',
        content:
          'Phải lấy văn hóa dân tộc làm gốc, giữ gìn bản sắc và cốt cách dân tộc. Đồng thời chủ động chắt lọc, tiếp thu tinh hoa văn hóa nhân loại (Đông, Tây, kim, cổ) để làm giàu cho văn hóa Việt Nam.'
      },
      threeQualities: {
        title: 'Ba tính chất của nền văn hóa mới',
        items: [
          {
            label: 'Tính dân tộc',
            desc: 'Giữ gìn và phát huy bản sắc văn hóa, ngôn ngữ và truyền thống lịch sử dân tộc Việt Nam.'
          },
          {
            label: 'Tính khoa học',
            desc: 'Tiến bộ, hiện đại, phù hợp với quy luật phát triển của xã hội; chống mê tín dị đoan và các tư tưởng lạc hậu.'
          },
          {
            label: 'Tính đại chúng',
            desc: 'Phục vụ nhân dân rộng rãi, được nhân dân đón nhận và thẩm định - là văn hóa của quần chúng, vì quần chúng.'
          }
        ]
      }
    }
  },

  'module-2': {
    category: 'Chương 6.2',
    title: 'Tư tưởng Hồ Chí Minh về Đạo đức',
    readingTime: 7,
    lastUpdated: '16/04/2026',
    heroImage: '/images/anh2.png',
    heroAlt: 'Đạo đức cách mạng theo Tư tưởng Hồ Chí Minh',
    takeaways: [
      {
        icon: Shield,
        title: 'Đạo đức là gốc',
        summary:
          'Đức và tài phải thống nhất; đạo đức là nền tảng, là sức mạnh của người cách mạng. Không có đức thì tài mấy cũng vô dụng.'
      },
      {
        icon: Target,
        title: 'Bốn chuẩn mực cốt lõi',
        summary:
          'Trung với nước hiếu với dân; Cần kiệm liêm chính chí công vô tư; Thương yêu con người; Tinh thần quốc tế trong sáng.'
      },
      {
        icon: CheckCircle,
        title: 'Ba nguyên tắc xây dựng',
        summary:
          'Nói đi đôi với làm; Xây đi đôi với chống; Tu dưỡng đạo đức suốt đời.'
      }
    ],
    content: {
      role: {
        title: 'Vai trò của đạo đức cách mạng',
        content:
          'Đạo đức là gốc, là nền tảng tinh thần và là sức mạnh của người cách mạng. Giữa "đức" và "tài" (hồng và chuyên) phải thống nhất, trong đó đạo đức là gốc - nếu không có đạo đức thì tài giỏi mấy cũng vô dụng, thậm chí có hại cho Đảng và nhân dân.'
      },
      fourStandards: {
        title: 'Bốn chuẩn mực đạo đức cốt lõi',
        items: [
          {
            label: 'Trung với nước, hiếu với dân',
            desc: 'Phẩm chất bao trùm và quan trọng nhất. Không chỉ trung với vua như thời xưa, mà là trung thành với sự nghiệp dựng nước, giữ nước; thương dân, tin dân, lấy dân làm gốc.'
          },
          {
            label: 'Cần, kiệm, liêm, chính, chí công vô tư',
            desc: 'Nội dung cốt lõi gắn với sinh hoạt hằng ngày: siêng năng, tiết kiệm, trong sạch, thẳng thắn và luôn đặt lợi ích của Đảng, của dân tộc lên trên hết. Kiên quyết chống chủ nghĩa cá nhân.'
          },
          {
            label: 'Thương yêu con người',
            desc: 'Tình cảm rộng lớn dành cho những người nghèo khổ, bị áp bức. Sống với nhau có tình có nghĩa trên lập trường giai cấp công nhân.'
          },
          {
            label: 'Tinh thần quốc tế trong sáng',
            desc: 'Kết hợp nhuần nhuyễn giữa chủ nghĩa yêu nước chân chính và chủ nghĩa quốc tế vô sản; đoàn kết với nhân dân thế giới vì hòa bình và tiến bộ.'
          }
        ]
      },
      threePrinciples: {
        title: 'Ba nguyên tắc xây dựng đạo đức',
        items: [
          {
            label: 'Nói đi đôi với làm, nêu gương về đạo đức',
            desc: 'Chống lại thói đạo đức giả. Cán bộ, đảng viên phải làm gương cho quần chúng noi theo - người lãnh đạo càng cao thì càng phải gương mẫu.'
          },
          {
            label: 'Xây đi đôi với chống',
            desc: 'Xây dựng đạo đức mới phải đi liền với đấu tranh chống lại cái xấu, cái ác - đặc biệt phải "quét sạch chủ nghĩa cá nhân".'
          },
          {
            label: 'Tu dưỡng đạo đức suốt đời',
            desc: 'Đạo đức không phải trên trời sa xuống mà do rèn luyện bền bỉ hằng ngày - "cũng như ngọc càng mài càng sáng, vàng càng luyện càng trong".'
          }
        ]
      }
    }
  },

  'module-3': {
    category: 'Chương 6.3',
    title: 'Tư tưởng Hồ Chí Minh về Con người',
    readingTime: 6,
    lastUpdated: '16/04/2026',
    heroImage: '/images/anh3.png',
    heroAlt: 'Chiến lược trồng người theo Tư tưởng Hồ Chí Minh',
    takeaways: [
      {
        icon: Users,
        title: 'Quan niệm lịch sử - cụ thể',
        summary:
          'Con người được nhìn nhận gắn với các mối quan hệ xã hội, thống nhất giữa thể lực, tâm lực và trí lực - không trừu tượng, siêu hình.'
      },
      {
        icon: Target,
        title: 'Mục tiêu & Động lực',
        summary:
          'Con người vừa là mục tiêu cuối cùng (giải phóng toàn diện), vừa là động lực quyết định thành công của cách mạng.'
      },
      {
        icon: Lightbulb,
        title: 'Chiến lược "Trồng người"',
        summary:
          '"Vì lợi ích trăm năm thì phải trồng người" - xây dựng con người phát triển toàn diện, vừa hồng vừa chuyên.'
      }
    ],
    content: {
      conception: {
        title: 'Quan niệm về con người',
        content:
          'Hồ Chí Minh không nhìn nhận con người một cách trừu tượng, mà nhìn nhận con người lịch sử - cụ thể, gắn với các mối quan hệ xã hội (gia đình, giai cấp, dân tộc...) và mang tính thống nhất giữa thể lực, tâm lực và trí lực.'
      },
      goalAndForce: {
        title: 'Con người là mục tiêu và động lực của cách mạng',
        goalContent:
          'Con người là mục tiêu: Mọi giai đoạn cách mạng đều nhằm mục đích cuối cùng là giải phóng dân tộc, giải phóng xã hội, giải phóng giai cấp và tiến tới giải phóng con người một cách toàn diện.',
        forceContent:
          'Con người là động lực: Con người là vốn quý nhất, là nhân tố quyết định thành công của sự nghiệp cách mạng. "Dễ trăm lần không dân cũng chịu, khó vạn lần dân liệu cũng xong."'
      },
      strategy: {
        title: 'Chiến lược "Trồng người"',
        quote:
          'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.',
        content:
          'Để xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa. Nội dung xây dựng là hướng tới con người phát triển toàn diện (vừa hồng vừa chuyên), có đạo đức, ý thức làm chủ, có năng lực và lối sống cao đẹp.',
        methods: [
          'Thông qua giáo dục - từ nhà trường đến toàn xã hội',
          'Sự tự tu dưỡng, rèn luyện bền bỉ của bản thân mỗi người',
          'Nêu gương người tốt, việc tốt trong đời sống xã hội',
          'Vai trò tổ chức và định hướng của Đảng và các đoàn thể'
        ]
      }
    }
  },

  'module-4': {
    category: 'Tổng hợp',
    title: 'Mối liên hệ & Ý nghĩa thực tiễn',
    readingTime: 5,
    lastUpdated: '16/04/2026',
    heroImage: '/images/anh4.png',
    heroAlt: 'Tổng hợp tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người',
    takeaways: [
      {
        icon: BookOpen,
        title: 'Mối liên hệ biện chứng',
        summary:
          'Văn hóa, đạo đức và con người có mối quan hệ tương hỗ, thống nhất và quy định lẫn nhau trong tư tưởng Hồ Chí Minh.'
      },
      {
        icon: Scale,
        title: 'Ý nghĩa lý luận',
        summary:
          'Vận dụng sáng tạo chủ nghĩa Mác - Lênin vào điều kiện Việt Nam, bổ sung và làm phong phú lý luận cách mạng.'
      },
      {
        icon: Shield,
        title: 'Vận dụng thực tiễn',
        summary:
          'Kim chỉ nam cho sự nghiệp đổi mới, xây dựng văn hóa và phát triển con người Việt Nam toàn diện ngày nay.'
      }
    ],
    content: {
      relationship: {
        title: 'Mối liên hệ biện chứng giữa Văn hóa, Đạo đức và Con người',
        points: [
          'Văn hóa là môi trường nuôi dưỡng đạo đức và hình thành nhân cách con người.',
          'Đạo đức là hạt nhân của văn hóa tinh thần, là nền tảng của con người cách mạng.',
          'Con người vừa là chủ thể sáng tạo văn hóa, vừa là sản phẩm của nền văn hóa đó.',
          'Ba yếu tố tác động qua lại, bổ sung và thúc đẩy nhau trong quá trình phát triển cách mạng.'
        ]
      },
      significance: {
        title: 'Ý nghĩa lý luận và thực tiễn',
        theoretical:
          'Tư tưởng HCM về văn hóa, đạo đức và con người là sự vận dụng sáng tạo chủ nghĩa Mác – Lênin vào điều kiện cụ thể của Việt Nam, góp phần bổ sung và làm phong phú lý luận cách mạng.',
        practical:
          'Là kim chỉ nam cho Đảng và Nhà nước trong hoạch định chính sách phát triển văn hóa, giáo dục và xây dựng con người trong thời kỳ đổi mới và hội nhập quốc tế.'
      },
      application: {
        title: 'Vận dụng trong thời đại ngày nay',
        items: [
          'Tiếp tục xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc theo tinh thần Nghị quyết Trung ương 5 (khóa VIII) và các nghị quyết tiếp theo của Đảng.',
          'Đẩy mạnh giáo dục đạo đức cách mạng trong cán bộ, đảng viên; kiên quyết chống tham nhũng, tiêu cực và suy thoái về tư tưởng, đạo đức, lối sống.',
          'Thực hiện chiến lược phát triển con người toàn diện, coi giáo dục và đào tạo là quốc sách hàng đầu.',
          'Kết hợp giữ gìn bản sắc văn hóa dân tộc với tiếp thu có chọn lọc tinh hoa văn hóa nhân loại trong bối cảnh hội nhập quốc tế.'
        ]
      },
      conclusion:
        'Tư tưởng Hồ Chí Minh về văn hóa, đạo đức và con người không chỉ là di sản lý luận quý báu mà còn là ngọn đuốc soi đường cho dân tộc Việt Nam trong sự nghiệp xây dựng và bảo vệ Tổ quốc.'
    }
  },

  'module-end': {
    category: 'Kết luận',
    title: 'Hiểu mình để vươn ra thế giới',
    readingTime: 4,
    lastUpdated: '16/04/2026',
    heroImage: '/images/anh5.png',
    heroAlt: 'Hiểu mình để vươn ra thế giới',
    takeaways: [
      {
        icon: BookOpen,
        title: '"Tấm hộ chiếu" bản sắc',
        summary:
          'Văn hóa là phương thức sinh tồn - hiểu cội nguồn, ngôn ngữ và các giá trị tinh thần là nền tảng để đi xa mà không lạc lối.'
      },
      {
        icon: Shield,
        title: '"Bộ khung" định hướng',
        summary:
          'Đạo đức là gốc - biết rõ hệ giá trị của bản thân (chính trực, tự trọng, trách nhiệm) giúp định hướng trong mọi hoàn cảnh.'
      },
      {
        icon: Users,
        title: '"Chủ thể" tự trồng mình',
        summary:
          '"Trồng người" bắt đầu từ chính mình - biết mình mạnh ở đâu (Chuyên) và cần rèn luyện thêm ở đâu (Hồng).'
      }
    ],
    content: {
      intro:
        'Từ ba trụ cột tư tưởng Hồ Chí Minh - văn hóa, đạo đức và con người - có thể rút ra một thông điệp cốt lõi cho mỗi cá nhân trong thời đại toàn cầu hóa: Muốn vươn ra thế giới, trước hết phải hiểu chính mình.',
      sections: [
        {
          subject: 'Văn hóa',
          metaphor: '"Tấm hộ chiếu" bản sắc',
          description:
            'Trong tư tưởng Hồ Chí Minh, văn hóa không chỉ là kiến thức hay nghệ thuật - đó là phương thức sinh tồn, cách một dân tộc ứng xử với thế giới và với chính mình.',
          quote: null,
          insight:
            'Hiểu mình qua văn hóa là hiểu về cội nguồn, ngôn ngữ và các giá trị tinh thần của dân tộc. Đó là tấm hộ chiếu giúp bạn hòa nhập với thế giới mà không hòa tan - giữ được bản sắc giữa muôn vàn luồng văn hóa bên ngoài.'
        },
        {
          subject: 'Đạo đức',
          metaphor: '"Bộ khung" định hướng',
          description:
            'Hồ Chí Minh khẳng định đạo đức là gốc của mọi hành động. Không có đạo đức, tài năng trở thành con dao hai lưỡi.',
          quote:
            'Có tài mà không có đức là người vô dụng. Có đức mà không có tài thì làm việc gì cũng khó.',
          insight:
            'Hiểu mình qua đạo đức là biết rõ hệ giá trị của bản thân: sự chính trực, lòng tự trọng và tinh thần trách nhiệm. Đó là bộ khung nội tâm giúp bạn đưa ra quyết định đúng đắn ngay cả khi không ai nhìn.'
        },
        {
          subject: 'Con người',
          metaphor: '"Chủ thể" tự trồng mình',
          description:
            'Chiến lược "trồng người" của Bác hướng tới sự phát triển toàn diện - vừa hồng (đạo đức, tư tưởng) vừa chuyên (năng lực, kỹ năng). Và quá trình đó bắt đầu từ chính mỗi cá nhân.',
          quote:
            'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.',
          insight:
            '"Trồng người" không chỉ là trách nhiệm của xã hội - đó là việc của chính bạn. Hiểu mình là bước đầu tiên: biết mình mạnh ở đâu (năng lực - "Chuyên") và cần rèn luyện thêm ở đâu (đạo đức, thái độ - "Hồng").'
        }
      ],
      closing:
        'Văn hóa cho bạn bản sắc. Đạo đức cho bạn phương hướng. Sự tự hiểu mình cho bạn sức mạnh nội tâm. Đó là hành trang để mỗi người Việt Nam tự tin bước ra thế giới - hòa nhập nhưng không hòa tan.'
    }
  },

  'module-ai': {
    category: 'Công cụ & Tham khảo',
    title: 'AI Tools & Nguồn tham khảo',
    readingTime: 2,
    lastUpdated: '16/04/2026',
    heroImage: null,
    heroAlt: null,
    takeaways: [
      {
        icon: BookOpen,
        title: 'Công cụ AI',
        summary: 'Các công cụ AI hỗ trợ xây dựng nội dung khóa học HCM202.'
      },
      {
        icon: CheckCircle,
        title: 'Nguồn tham khảo',
        summary: 'Tài liệu chính thức của môn Tư tưởng Hồ Chí Minh.'
      },
      {
        icon: Shield,
        title: 'Cam kết',
        summary: 'Sử dụng AI hoàn toàn vì mục đích giáo dục và học tập.'
      }
    ],
    content: {
      introduction:
        'Khóa học này được xây dựng với sự hỗ trợ của các công cụ AI hiện đại, nhằm nâng cao chất lượng nội dung và trải nghiệm học tập môn HCM202 - Tư tưởng Hồ Chí Minh.',
      tools: [
        {
          name: 'NotebookLM',
          description:
            'Tổng hợp, phân tích và tóm tắt tài liệu học tập về Tư tưởng Hồ Chí Minh từ nhiều nguồn tham khảo.',
          promptLink: "https://notebooklm.google.com/notebook/6b1e622b-41bb-416b-84c8-1dc812f973fd"
        },
        {
          name: 'Google Gemini',
          description:
            'Hỗ trợ viết, chỉnh sửa và phát triển nội dung các chương về văn hóa, đạo đức và con người.',
          promptLink: "https://gemini.google.com/notebook/notebooks%2F6b1e622b-41bb-416b-84c8-1dc812f973fd"
        },
        {
          name: 'GitHub Copilot (local)',
          description:
            'Hỗ trợ lập trình giao diện React và JavaScript cho trang web.',
          promptLink: null
        },
        {
          name: 'Notion',
          description:
            'Thực hiện Soạn thảo, ghi chú thông tin và cải thiện và kiểm tra độ chính xác nội dung học thuật.',
          promptLink: "https://www.notion.so/QC9-note-34484c087ff580a88d80d2b1cb674fc0?source=copy_link"
        }
      ],
      references: [
        {
          title:
            'Giáo trình Tư tưởng Hồ Chí Minh - Bộ Giáo dục và Đào tạo',
          link: "https://drive.google.com/file/d/1IcRiR-SGJ0s6omK8pE6TfDtzvVehSRyn/view"
        },
        {
          title: 'Quan điểm về vị trí, vai trò của văn hóa',
          link: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/mot-so-quan-diem-cua-chu-tich-ho-chi-minh-ve-van-hoa-va-nang-tam-van-hoa-viet-nam-7895"
        },
        {
          title: 'Tư tưởng Hô Chí Minh về đạo đức',
          link: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/mot-so-quan-diem-cua-chu-tich-ho-chi-minh-ve-van-hoa-va-nang-tam-van-hoa-viet-nam-7895"
        }
      ],
      teamCommitment:
        'Nhóm 6 cam kết rằng các công cụ AI được sử dụng hoàn toàn cho mục đích hỗ trự, tham khảo và tổng hợp dữ liệu nhàmw nâng cao chất lượng nội dung, và không được dùng để vi phạm bản quyền hoặc quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào.'
    }
  }
};
