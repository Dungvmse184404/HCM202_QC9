import {
  BookOpen,
  Lightbulb,
  CheckCircle,
  Shield,
  Target,
  Users,
  Scale,
  Heart,
  AlertTriangle
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
    title: 'Hệ thống khái niệm',
    description: 'Tôn giáo, tín ngưỡng và mê tín dị đoan theo quan điểm Mác - Lênin',
    status: 'current'
  },
  {
    id: 'module-2',
    title: 'Nguồn gốc của Tôn giáo',
    description: 'Ba nguồn gốc: kinh tế - xã hội, tâm lý và nhận thức',
    status: 'current'
  },
  {
    id: 'module-3',
    title: 'Tôn giáo tại Việt Nam',
    description: 'Đặc điểm và chính sách của Đảng, Nhà nước về tôn giáo',
    status: 'current'
  },
  {
    id: 'module-end',
    title: 'Mê tín dị đoan ở người trẻ',
    description: 'Phân tích vấn đề thực tế và giải pháp đề xuất',
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
    category: 'Chương 6 - Mục 1',
    title: 'Hệ thống khái niệm theo quan điểm Chủ nghĩa Mác - Lênin',
    readingTime: 5,
    lastUpdated: '22/04/2026',
    heroImage: '/images/anh1.png',
    heroAlt: 'Tôn giáo và tín ngưỡng trong xã hội',
    takeaways: [
      {
        icon: BookOpen,
        title: 'Tôn giáo',
        summary:
          'Là hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. Cần 5 yếu tố: Đấng tối cao, giáo lý/giáo luật, nghi lễ, cơ sở thờ tự và cộng đồng tín đồ.'
      },
      {
        icon: Heart,
        title: 'Tín ngưỡng',
        summary:
          'Hệ thống niềm tin, ngưỡng mộ trước các thế lực linh thiêng - gắn kết cộng đồng, bảo tồn văn hóa bản địa, được pháp luật bảo hộ.'
      },
      {
        icon: AlertTriangle,
        title: 'Mê tín dị đoan',
        summary:
          'Niềm tin mù quáng, phản khoa học dẫn đến hành vi cực đoan. Gây tổn hại cá nhân và xã hội - bị pháp luật nghiêm cấm.'
      }
    ],
    content: {
      definitions: {
        title: 'Các khái niệm cơ bản',
        items: [
          {
            label: 'Tôn giáo',
            desc: 'Là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan vào đầu óc con người. Trong đó, các lực lượng tự nhiên và xã hội trở thành siêu nhiên, thần bí. Một tôn giáo hoàn chỉnh cần 5 yếu tố: Đấng tối cao, giáo lý/giáo luật, nghi lễ, cơ sở thờ tự và cộng đồng tín đồ.'
          },
          {
            label: 'Tín ngưỡng',
            desc: 'Hệ thống niềm tin, sự ngưỡng mộ và cách thức thể hiện niềm tin trước các thế lực thần thánh, linh thiêng để cầu mong sự che chở.'
          },
          {
            label: 'Mê tín',
            desc: 'Niềm tin mê muội, viển vông, không dựa trên cơ sở khoa học (tin vào các mối quan hệ nhân quả không có thật).'
          },
          {
            label: 'Dị đoan',
            desc: 'Sự suy đoán, hành động tùy tiện, sai lệch các chuẩn mực bình thường trong cuộc sống.'
          },
          {
            label: 'Mê tín dị đoan',
            desc: 'Niềm tin mù quáng dẫn đến hành vi cực đoan, sai lệch văn hóa, đạo đức và pháp luật, gây tổn hại cho cá nhân và xã hội.'
          }
        ]
      },
      comparisonTable: {
        title: 'Phân biệt Tôn giáo, Tín ngưỡng và Mê tín dị đoan',
        headers: ['Tiêu chí', 'Tôn giáo', 'Tín ngưỡng', 'Mê tín dị đoan'],
        rows: [
          {
            criteria: 'Bản chất niềm tin',
            tonGiao: 'Có hệ thống giáo thuyết, thế giới quan bài bản.',
            tinNguong: 'Sự ngưỡng mộ, cầu mong che chở (thường mang tính bản địa).',
            meTinDiDoan: 'Mù quáng, viển vông, phản khoa học.'
          },
          {
            criteria: 'Tính tổ chức',
            tonGiao: 'Rất cao (Giáo hội, nhân sự điều hành).',
            tinNguong: 'Thấp, mang tính tự phát, gắn với phong tục.',
            meTinDiDoan: 'Không có hệ thống, tùy tiện, rời rạc.'
          },
          {
            criteria: 'Giá trị xã hội',
            tonGiao: 'Bảo tồn văn hóa, đạo đức, giáo dục cộng đồng.',
            tinNguong: 'Gắn kết cộng đồng, "Uống nước nhớ nguồn".',
            meTinDiDoan: 'Tiêu cực, gây tốn kém, u mê, trục lợi.'
          },
          {
            criteria: 'Pháp luật',
            tonGiao: 'Được tôn trọng và bảo hộ.',
            tinNguong: 'Được tôn trọng và bảo hộ.',
            meTinDiDoan: 'Nghiêm cấm và xử lý.'
          }
        ]
      }
    }
  },

  'module-2': {
    category: 'Chương 6 - Mục 2',
    title: 'Nguồn gốc của Tôn giáo theo quan điểm Mác - Lênin',
    readingTime: 4,
    lastUpdated: '22/04/2026',
    heroImage: '/images/anh2.png',
    heroAlt: 'Nguồn gốc của tôn giáo',
    takeaways: [
      {
        icon: Scale,
        title: 'Nguồn gốc Kinh tế - Xã hội',
        summary:
          'Sự bất lực trước thiên nhiên của người nguyên thủy và trước các lực lượng áp bức, bóc lột trong xã hội có giai cấp.'
      },
      {
        icon: Heart,
        title: 'Nguồn gốc Tâm lý',
        summary:
          'Sợ hãi, lo âu trước rủi ro và mong muốn bình an. Cũng xuất phát từ lòng biết ơn các anh hùng, người có công với dân tộc.'
      },
      {
        icon: Lightbulb,
        title: 'Nguồn gốc Nhận thức',
        summary:
          'Khoa học chưa phát triển, trình độ dân trí thấp dẫn đến việc giải thích thế giới bằng sức mạnh thần bí.'
      }
    ],
    content: {
      economic: {
        title: '1. Nguồn gốc Kinh tế - Xã hội',
        items: [
          'Sự bất lực trước thiên nhiên hùng vĩ của người nguyên thủy.',
          'Sự bất lực trước các lực lượng xã hội áp bức, bóc lột trong xã hội có giai cấp.'
        ]
      },
      psychological: {
        title: '2. Nguồn gốc Tâm lý',
        items: [
          'Sự sợ hãi, lo âu trước rủi ro, bệnh tật hoặc các sự cố bất ngờ.',
          'Tâm lý mong muốn bình an khi làm việc lớn (ma chay, cưới hỏi, kinh doanh).',
          'Tình cảm tích cực: Lòng biết ơn các anh hùng dân tộc, người có công (thờ Thành hoàng, Anh hùng dân tộc).'
        ]
      },
      cognitive: {
        title: '3. Nguồn gốc Nhận thức',
        items: [
          'Khoa học chưa phát triển dẫn đến việc giải thích thế giới bằng sức mạnh thần bí.',
          'Trình độ dân trí thấp là "mảnh đất" cho tôn giáo và mê tín tồn tại.'
        ]
      }
    }
  },

  'module-3': {
    category: 'Chương 6 - Mục 3',
    title: 'Tôn giáo tại Việt Nam và Chính sách của Đảng, Nhà nước',
    readingTime: 5,
    lastUpdated: '22/04/2026',
    heroImage: '/images/anh3.png',
    heroAlt: 'Đa tôn giáo tại Việt Nam',
    takeaways: [
      {
        icon: Users,
        title: 'Đa tôn giáo',
        summary:
          '13 tôn giáo có pháp nhân, chung sống hòa bình. Đa số tín đồ là nhân dân lao động yêu nước, có tính quốc tế và quan hệ rộng rãi.'
      },
      {
        icon: Shield,
        title: 'Tôn trọng & Bảo hộ',
        summary:
          'Tôn giáo là nhu cầu tinh thần chính đáng. Đảm bảo quyền tự do theo hoặc không theo đạo. Bình đẳng giữa các tôn giáo.'
      },
      {
        icon: Target,
        title: 'Phát huy giá trị',
        summary:
          'Phát huy giá trị văn hóa, đạo đức tốt đẹp của tôn giáo. Nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật, chống phá Nhà nước.'
      }
    ],
    content: {
      characteristics: {
        title: 'Đặc điểm tôn giáo tại Việt Nam',
        items: [
          'Quốc gia đa tôn giáo (16 tôn giáo có pháp nhân).',
          'Chung sống hòa bình, không có xung đột tôn giáo.',
          'Đa số tín đồ là nhân dân lao động yêu nước.',
          'Có tính quốc tế và quan hệ rộng rãi.'
        ]
      },
      policy: {
        title: 'Chính sách tôn giáo hiện nay',
        items: [
          'Khẳng định tôn giáo là nhu cầu tinh thần chính đáng.',
          'Tôn trọng và bảo đảm quyền tự do (theo hoặc không theo đạo).',
          'Thực hiện bình đẳng, đoàn kết giữa các tôn giáo và khối đại đoàn kết dân tộc.',
          'Phát huy giá trị văn hóa, đạo đức tốt đẹp của tôn giáo.',
          'Nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật, chống phá Nhà nước.'
        ]
      },
      freedomLimits: {
        title: 'Giới hạn của quyền tự do tín ngưỡng',
        intro: 'Đảng và Nhà nước ta luôn tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo của nhân dân. Tuy nhiên, quyền này có 3 ranh giới tối thượng:',
        items: [
          {
            label: 'Giới hạn Pháp luật',
            desc: 'Nghiêm cấm lợi dụng tín ngưỡng để hành nghề mê tín dị đoan, lừa đảo, trục lợi (ví dụ: bán bùa chú, làm lễ giải hạn thu tiền bất chính).'
          },
          {
            label: 'Giới hạn Chính trị',
            desc: 'Không được lợi dụng tôn giáo để chia rẽ khối đại đoàn kết dân tộc, kích động chống phá Nhà nước hoặc xâm phạm an ninh quốc gia.'
          },
          {
            label: 'Giới hạn Văn hóa & Đạo đức',
            desc: 'Không vi phạm thuần phong mỹ tục, không gây hại cho sức khỏe, tài chính cá nhân. Không được ép buộc người khác phải theo hoặc bỏ đạo.'
          }
        ]
      }
    }
  },

  'module-end': {
    category: 'Vấn đề thực tế',
    title: 'Mê tín dị đoan ở người trẻ',
    readingTime: 5,
    lastUpdated: '22/04/2026',
    heroImage: '/images/anh4.png',
    heroAlt: 'Mê tín dị đoan và người trẻ',
    takeaways: [
      {
        icon: AlertTriangle,
        title: 'Áp lực tâm lý',
        summary:
          'Khi nỗi sợ thất bại lớn hơn bản lĩnh, người trẻ tìm đến "chỗ dựa siêu nhiên" để giải tỏa tạm thời thay vì đối mặt với thực tế.'
      },
      {
        icon: BookOpen,
        title: 'Thiếu thế giới quan khoa học',
        summary:
          'Học chuyên môn tốt nhưng chưa xây dựng tư duy biện chứng, dễ bị lôi kéo bởi "phép màu" thay vì nỗ lực thực tế.'
      },
      {
        icon: CheckCircle,
        title: 'Giải pháp',
        summary:
          'Gia đình hỗ trợ tâm lý, cảnh báo lừa đảo. Xã hội giáo dục phân biệt tín ngưỡng lành mạnh và mê tín. Xử lý nghiêm người trục lợi tâm linh.'
      }
    ],
    content: {
      whyYouth: {
        title: 'Tại sao người trẻ học thức vẫn dễ rơi vào mê tín?',
        items: [
          {
            label: 'Áp lực tâm lý cực đoan',
            desc: 'Khi lo sợ thất bại vượt quá khả năng chịu đựng, con người có nhu cầu tìm kiếm một "chỗ dựa tinh thần" siêu nhiên để an tâm tạm thời.'
          },
          {
            label: 'Thiếu thế giới quan duy vật khoa học',
            desc: 'Học thức chuyên môn không đồng nghĩa với việc đã có một thế giới quan duy vật khoa học vững chắc. Khi gặp khủng hoảng, họ dễ hướng đến "phép màu" thay vì nỗ lực thực tế.'
          }
        ]
      },
      freedomQuestion: {
        title: 'Quyền tự do tín ngưỡng có bảo vệ hành vi mê tín?',
        answer:
          'Pháp luật bảo vệ việc thực hành "tín ngưỡng truyền thống" (như thờ cúng tổ tiên). Tuy nhiên, hành vi của người em đã vượt qua giới hạn của tín ngưỡng truyền thống và trở thành hành vi mê tín dị đoan vì niềm tin mù quáng vào lời phán của "thầy" online mà chi hàng triệu đồng mua bùa chú để có thể thuận lợi vượt qua kì thi. Và người “thầy” đã lợi dụng điều đó để trục lợi cá nhân cho mình gây tổn thất tài chính cho người em và gia đình. Điều này đã vượt qua giới hạn về pháp luật và văn hóa của quyền tự do tín ngưỡng.'
      },
      solutions: {
        title: 'Giải pháp đề xuất',
        family: {
          subtitle: 'Gia đình',
          items: [
            'Tuyệt đối không dùng mệnh lệnh áp đặt hay cấm đoán gay gắt vì có sẽ gây phản tác dụng, làm tăng sự căng thẳng và áp lực tâm lý đối với người đang chịu áp lực.',
            'Hỗ trợ tâm lý, giúp con em giải tỏa áp lực học tập.',
            'Cảnh báo về các hình thức lừa đảo tâm linh online.',
            'Liên hệ với các cơ quan chức năng có thẩm quyền để báo cáo về các trường hợp lợi dụng tín ngưỡng để trục lợi cá nhân.'
          ]
        },
        society: {
          subtitle: 'Xã hội',
          items: [
            'Tăng cường giáo dục về sự khác biệt giữa tín ngưỡng và mê tín.',
            'Các tổ chức tôn giáo cần hướng dẫn thực hành đúng đắn.',
            'Cơ quan chức năng xử lý nghiêm các cá nhân lợi dụng tâm linh để trục lợi.'
          ]
        }
      }
    }
  },

  'module-ai': {
    category: 'Công cụ & Tham khảo',
    title: 'AI Tools & Nguồn tham khảo',
    readingTime: 2,
    lastUpdated: '22/04/2026',
    heroImage: null,
    heroAlt: null,
    takeaways: [
      {
        icon: BookOpen,
        title: 'Công cụ AI',
        summary: 'Các công cụ AI hỗ trợ xây dựng nội dung bài thuyết trình MLN131.'
      },
      {
        icon: CheckCircle,
        title: 'Nguồn tham khảo',
        summary: 'Tài liệu chính thức của môn Chủ nghĩa Mác - Lênin.'
      },
      {
        icon: Shield,
        title: 'Cam kết',
        summary: 'Sử dụng AI hoàn toàn vì mục đích giáo dục và học tập.'
      }
    ],
    content: {
      introduction:
        'Bài thuyết trình này được xây dựng với sự hỗ trợ của các công cụ AI hiện đại, nhằm nâng cao chất lượng nội dung và trải nghiệm học tập môn MLN131 - Chủ nghĩa Mác - Lênin.',
      tools: [
        {
          name: 'NotebookLM',
          description:
            'Tổng hợp, phân tích và tóm tắt tài liệu học tập về Chủ nghĩa Mác - Lênin từ nhiều nguồn tham khảo.',
          promptLink: "https://notebooklm.google.com/notebook/35e466d7-01a3-4e8c-9e42-95c466aafe3a"
        },
        {
          name: 'Google Gemini',
          description:
            'Hỗ trợ viết, chỉnh sửa và phát triển nội dung các chương về tôn giáo, tín ngưỡng và mê tín dị đoan.',
          promptLink: "https://gemini.google.com/share/c106021b59ec"
        },
        {
          name: 'Claude Anthropic (local)',
          description:
            'Hỗ trợ lập trình giao diện React và JavaScript cho trang web trình bày bài thuyết trình.',
          promptLink: null
        },
        {
          name: 'Notion',
          description:
            'Soạn thảo, ghi chú thông tin và cải thiện, kiểm tra độ chính xác nội dung học thuật.',
          promptLink: "https://www.notion.so/Note-ch-ng-6-T-n-gi-o-trong-th-i-k-qu-l-n-ch-ngh-a-x-h-i-34984c087ff580adaee1ee7a73382862?source=copy_link"
        },
        {
          name: 'Google Docs',
          description:
            'Soạn thảo và chỉnh sửa nội dung bài thuyết trình theo nhóm, hỗ trợ cộng tác và theo dõi lịch sử chỉnh sửa.',
          promptLink: "https://docs.google.com/document/d/1mmlwvwN02EhiNOpokQg3vPmRoWzKtTA7BFbUIJ_ICUk/edit?usp=sharing"
        }
      ],
      references: [
        {
          title: 'Giáo trình Chủ nghĩa Mác - Lênin',
          link: "https://drive.google.com/file/d/1cBWwww2Guqsm0e_7nrQGKZxcwGJnswPG/view"
        },
        {
          title: 'Luật Tín ngưỡng, Tôn giáo năm 2016',
          link: "https://thuvienphapluat.vn/van-ban/Van-hoa-Xa-hoi/Luat-tin-nguong-ton-giao-2016-322934.aspx"
        }
      ],
      teamCommitment:
        'Nhóm 5 cam kết rằng các công cụ AI được sử dụng hoàn toàn cho mục đích hỗ trợ, tham khảo và tổng hợp dữ liệu nhằm nâng cao chất lượng nội dung, và không được dùng để vi phạm bản quyền hoặc quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào.'
    }
  }
};
