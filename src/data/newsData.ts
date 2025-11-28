import { NewsItem } from '@types/news'
import { HomeTabType } from '@types/home'

// 首页各个标签的资讯数据
export const newsData: Record<HomeTabType, NewsItem[]> = {
  [HomeTabType.FOLLOW]: [
    {
      id: 'f1',
      title: '郑州图书馆新馆开放，数字化阅读体验升级',
      summary: '郑州图书馆新馆正式开放，引入智能化设备和数字资源，为市民提供更优质的阅读服务。',
      category: HomeTabType.FOLLOW,
      tags: ['文化', '图书馆', '数字化'],
      author: '郑州文化局',
      publishTime: '2024-01-15 09:30',
      readCount: 1520,
      likeCount: 89,
      imageUrl: '/images/library.jpg',
      priority: 'high'
    },
    {
      id: 'f2',
      title: '地铁3号线南延工程开工，预计明年通车',
      summary: '郑州地铁3号线南延工程正式开工建设，将进一步完善城市轨道交通网络，方便市民出行。',
      category: HomeTabType.FOLLOW,
      tags: ['交通', '地铁', '城市建设'],
      author: '郑州地铁集团',
      publishTime: '2024-01-14 14:20',
      readCount: 2103,
      likeCount: 156,
      imageUrl: '/images/subway.jpg',
      priority: 'high'
    }
  ],

  [HomeTabType.RECOMMEND]: [
    {
      id: 'r1',
      title: '春节不停歇郑州市政务服务大厅春节服务安排',
      summary: '为方便市民春节期间办理业务，郑州市政务服务中心推出春节期间服务安排，确保政务服务不间断。',
      category: HomeTabType.RECOMMEND,
      tags: ['政务服务', '春节', '便民'],
      author: '郑州市政务服务中心',
      publishTime: '2024-01-15 10:00',
      readCount: 3250,
      likeCount: 234,
      imageUrl: '/images/government.jpg',
      priority: 'high'
    },
    {
      id: 'r2',
      title: '郑州旅游年卡即将发售，一卡畅游全市景区',
      summary: '2024年郑州旅游年卡即将发售，市民可凭卡免费游览全市30多个A级景区，享受全年旅游优惠。',
      category: HomeTabType.RECOMMEND,
      tags: ['旅游', '优惠', '年卡'],
      author: '郑州市文旅局',
      publishTime: '2024-01-14 16:30',
      readCount: 4560,
      likeCount: 342,
      imageUrl: '/images/tourism.jpg',
      priority: 'medium'
    }
  ],

  [HomeTabType.COMMUNITY]: [
    {
      id: 'c1',
      title: '金水区社区邻里节圆满举办',
      summary: '金水区举办社区邻里节活动，居民们欢聚一堂，通过文艺表演、互动游戏等方式增进邻里情谊。',
      category: HomeTabType.COMMUNITY,
      tags: ['社区活动', '邻里关系', '金水区'],
      author: '金水区社区服务中心',
      publishTime: '2024-01-15 15:20',
      readCount: 890,
      likeCount: 67,
      imageUrl: '/images/community.jpg',
      priority: 'medium'
    }
  ],

  [HomeTabType.MEDIA]: [
    {
      id: 'm1',
      title: '郑州电视台今日郑州栏目全新改版',
      summary: '郑州电视台王牌栏目今日郑州全新改版，引入新技术设备，节目质量和观看体验全面提升。',
      category: HomeTabType.MEDIA,
      tags: ['电视台', '节目改版', '融媒体'],
      author: '郑州电视台',
      publishTime: '2024-01-15 18:00',
      readCount: 2340,
      likeCount: 187,
      imageUrl: '/images/tv-show.jpg',
      priority: 'medium'
    }
  ],

  [HomeTabType.GOVERNMENT]: [
    {
      id: 'g1',
      title: '郑州市政府工作报告：2024年民生实事清单发布',
      summary: '郑州市2024年民生实事清单正式发布，涵盖教育、医疗、交通、环境等10大领域40项具体任务。',
      category: HomeTabType.GOVERNMENT,
      tags: ['政府工作', '民生实事', '政策发布'],
      author: '郑州市政府办公厅',
      publishTime: '2024-01-15 14:00',
      readCount: 5230,
      likeCount: 412,
      imageUrl: '/images/government-report.jpg',
      priority: 'high'
    }
  ],

  [HomeTabType.SCIENCE]: [
    {
      id: 's1',
      title: '郑州科技馆新展区开放：探索人工智能的奥秘',
      summary: '郑州科技馆全新人工智能展区正式向公众开放，通过互动展品让市民了解AI技术的基本原理和应用。',
      category: HomeTabType.SCIENCE,
      tags: ['科技馆', '人工智能', '科普教育'],
      author: '郑州科技馆',
      publishTime: '2024-01-15 13:00',
      readCount: 1560,
      likeCount: 123,
      imageUrl: '/images/science-museum.jpg',
      priority: 'medium'
    }
  ],

  [HomeTabType.HEALTH]: [
    {
      id: 'h1',
      title: '郑州各大医院春节门诊安排公布',
      summary: '为保障市民春节期间就医需求，郑州各大医院公布春节期间门诊安排，急诊24小时开放。',
      category: HomeTabType.HEALTH,
      tags: ['医疗服务', '春节', '门诊安排'],
      author: '郑州市卫健委',
      publishTime: '2024-01-15 11:00',
      readCount: 4230,
      likeCount: 345,
      imageUrl: '/images/hospital.jpg',
      priority: 'high'
    }
  ],

  [HomeTabType.FAMILY]: [
    {
      id: 'fam1',
      title: '郑州家庭教育指导中心成立，提供专业服务',
      summary: '郑州市家庭教育指导中心正式成立，将为家长提供专业的家庭教育指导服务和亲子活动。',
      category: HomeTabType.FAMILY,
      tags: ['家庭教育', '亲子关系', '家庭服务'],
      author: '郑州市妇联',
      publishTime: '2024-01-15 16:30',
      readCount: 1340,
      likeCount: 98,
      imageUrl: '/images/family-education.jpg',
      priority: 'medium'
    }
  ]
}

// 获取指定标签的资讯数据
export const getNewsByTab = (tab: HomeTabType): NewsItem[] => {
  return newsData[tab] || []
}

// 模拟分页获取资讯数据
export const getNewsByTabWithPagination = (
  tab: HomeTabType,
  page: number = 1,
  pageSize: number = 10
) => {
  const allNews = newsData[tab] || []
  const startIndex = (page - 1) * pageSize
  const endIndex = startIndex + pageSize
  const items = allNews.slice(startIndex, endIndex)

  return {
    items,
    total: allNews.length,
    page,
    pageSize,
    hasMore: endIndex < allNews.length
  }
}