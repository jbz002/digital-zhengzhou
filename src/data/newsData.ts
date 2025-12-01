import { NewsItem } from '../types/news'
import { HomeTabType } from '../types/home'
import { getStableRandomImageUrl } from '../utils/randomImage'

// 首页各个标签的资讯数据
export const newsData: Record<HomeTabType, NewsItem[]> = {
  [HomeTabType.FOLLOW]: [
    {
      id: 'f1',
      title: '郑州图书馆新馆盛大开放，打造城市文化新地标',
      summary: '郑州图书馆新馆正式开放，建筑面积达5万平方米，引入智能化设备和海量数字资源。新馆设有专门的儿童阅读区、数字体验区、古籍珍藏馆等特色区域，为市民提供全新的阅读体验。',
      category: HomeTabType.FOLLOW,
      tags: ['文化', '图书馆', '数字化', '新地标'],
      author: '郑州文化局',
      publishTime: '2024-01-15 09:30',
      readCount: 1520,
      likeCount: 89,
      imageUrl: '/images/library.jpg',
      featuredImage: '/images/library-featured.jpg',
      priority: 'high',
      cardLayout: 'featured',
      isExclusive: true,
      visualStyle: {
        theme: 'colorful',
        borderRadius: 'large',
        shadow: 'heavy',
        showTags: true,
        showStats: true,
        showSource: true
      }
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
      priority: 'high',
      eventDate: '2025年底',
      location: '郑州高新区',
      cardLayout: 'default'
    },
    {
      id: 'f3',
      title: '黄河文化音乐节震撼来袭',
      summary: '感受黄河文化的磅礴气势，体验传统与现代的完美融合。这场音乐节将汇聚国内外知名艺术家，带来一场视听盛宴。',
      category: HomeTabType.FOLLOW,
      tags: ['音乐节', '黄河文化', '艺术'],
      author: '郑州文旅局',
      publishTime: '2024-01-13 10:00',
      readCount: 3200,
      likeCount: 445,
      imageUrl: '/images/music-festival.jpg',
      featuredImage: '/images/music-festival-featured.jpg',
      videoUrl: 'https://example.com/music-festival',
      eventDate: '2024-03-15',
      location: '黄河风景游览区',
      price: '¥180起',
      discount: '早鸟票8折',
      cardLayout: 'magazine',
      visualStyle: {
        theme: 'dark',
        shadow: 'medium'
      }
    },
    {
      id: 'f4',
      title: '智慧城市建设全面启动，打造数字郑州',
      summary: '郑州市启动新一轮智慧城市建设，将在交通、医疗、教育等领域全面推广智能化应用，提升城市治理水平。',
      category: HomeTabType.FOLLOW,
      tags: ['智慧城市', '科技创新', '城市管理'],
      author: '郑州市政府',
      publishTime: '2024-01-12 16:00',
      readCount: 1890,
      likeCount: 234,
      quote: '让城市更智慧，让生活更美好',
      images: ['/images/smart-city-1.jpg', '/images/smart-city-2.jpg', '/images/smart-city-3.jpg'],
      cardLayout: 'list',
      difficulty: 'medium',
      duration: '3年'
    },
    {
      id: 'f5',
      title: '《新时代·新郑州》主题展览开幕',
      summary: '郑州美术馆推出《新时代·新郑州》主题展览，展出作品120余件，通过绘画、摄影、装置艺术等形式展现郑州发展历程和美好愿景。',
      category: HomeTabType.FOLLOW,
      tags: ['艺术', '展览', '美术馆'],
      author: '郑州美术馆',
      publishTime: '2024-01-11 14:30',
      readCount: 876,
      likeCount: 123,
      imageUrl: '/images/art-exhibition.jpg',
      eventDate: '2024-01-11~2024-03-11',
      price: '免费',
      cardLayout: 'compact',
      isNew: true,
      rating: 4.5
    },
    {
      id: 'f6',
      title: '社区养老服务站正式启动，关爱老人生活',
      summary: '金水区首个社区养老服务站正式启用，为老年人提供日间照料、健康监测、文化娱乐等服务，让老年人享受幸福晚年。',
      category: HomeTabType.FOLLOW,
      tags: ['社区服务', '养老', '民生'],
      author: '金水区政府',
      publishTime: '2024-01-10 09:00',
      readCount: 2100,
      likeCount: 298,
      imageUrl: '/images/elderly-service.jpg',
      cardLayout: 'grid',
      location: '金水区文化路街道',
      price: '免费',
      rating: 4.8,
      isHot: true
    },
    {
      id: 'f7',
      title: '郑州国际马拉松赛报名开始',
      summary: '2024郑州国际马拉松赛正式开启报名，设置全程马拉松、半程马拉松、迷你马拉松等项目，预计参赛人数达3万人。',
      category: HomeTabType.FOLLOW,
      tags: ['体育', '马拉松', '国际赛事'],
      author: '郑州市体育局',
      publishTime: '2024-01-09 10:00',
      readCount: 4560,
      likeCount: 678,
      imageUrl: '/images/marathon.jpg',
      featuredImage: '/images/marathon-featured.jpg',
      eventDate: '2024-04-15',
      location: '郑州奥体中心',
      price: '¥120~200',
      discount: '团体报名8折',
      cardLayout: 'featured',
      isHot: true,
      isNew: true,
      visualStyle: {
        theme: 'colorful',
        shadow: 'heavy'
      }
    },
    {
      id: 'f8',
      title: '新能源汽车充电桩全覆盖计划启动',
      summary: '郑州市启动新能源汽车充电桩全覆盖计划，今年将新增充电桩5000个，实现城区主要区域充电设施1公里服务半径。',
      category: HomeTabType.FOLLOW,
      tags: ['新能源', '充电桩', '绿色出行'],
      author: '郑州市发改委',
      publishTime: '2024-01-08 14:30',
      readCount: 1678,
      likeCount: 145,
      quote: '绿色出行，低碳生活，共建美丽郑州',
      imageUrl: '/images/charging-station.jpg',
      images: ['/images/charging-1.jpg', '/images/charging-2.jpg'],
      cardLayout: 'list',
      difficulty: 'easy',
      duration: '1年'
    },
    {
      id: 'f9',
      title: '郑州文创市集周末开市',
      summary: '本周末，郑州文化创意市集在二七广场正式开市，汇聚手工艺品、非遗文化、创意设计等百余个摊位。',
      category: HomeTabType.FOLLOW,
      tags: ['文创', '市集', '周末活动'],
      author: '郑州文创园区',
      publishTime: '2024-01-07 09:00',
      readCount: 987,
      likeCount: 167,
      imageUrl: '/images/craft-market.jpg',
      eventDate: '每周六、日',
      location: '二七广场',
      price: '免费入场',
      cardLayout: 'compact',
      rating: 4.2,
      isNew: true
    },
    {
      id: 'f10',
      title: '郑州大学城美食节开幕',
      summary: '郑州大学城美食节盛大开幕，汇聚全国各地特色美食，还设置美食制作体验、厨艺比赛等互动活动。',
      category: HomeTabType.FOLLOW,
      tags: ['美食', '大学城', '节庆活动'],
      author: '郑州大学城管委会',
      publishTime: '2024-01-06 16:00',
      readCount: 2890,
      likeCount: 423,
      imageUrl: '/images/food-festival.jpg',
      videoUrl: 'https://example.com/food-festival',
      eventDate: '2024-01-20~2024-01-25',
      location: '郑州大学城',
      price: '入场券¥20',
      discount: '学生票半价',
      cardLayout: 'magazine',
      isHot: true,
      rating: 4.6
    },
    {
      id: 'f11',
      title: '郑州国际摄影大赛获奖作品展',
      summary: '郑州国际摄影大赛获奖作品在河南省美术馆展出，100幅获奖作品展现世界各地自然风光和人文风情。',
      category: HomeTabType.FOLLOW,
      tags: ['摄影', '展览', '国际赛事'],
      author: '河南省美术馆',
      publishTime: '2024-01-05 10:30',
      readCount: 1234,
      likeCount: 189,
      imageUrl: '/images/photography.jpg',
      images: ['/images/photo-1.jpg', '/images/photo-2.jpg', '/images/photo-3.jpg', '/images/photo-4.jpg'],
      eventDate: '2024-01-10~2024-02-10',
      price: '¥30',
      discount: '学生、老人半价',
      cardLayout: 'grid',
      rating: 4.7,
      isExclusive: true
    },
    {
      id: 'f12',
      title: '郑州野生动物园新生熊猫宝宝亮相',
      summary: '郑州野生动物园大熊猫"圆圆"顺利产下一只幼崽，这是今年河南省首例大熊猫繁殖成功案例。',
      category: HomeTabType.FOLLOW,
      tags: ['动物', '大熊猫', '动物园'],
      author: '郑州野生动物园',
      publishTime: '2024-01-04 15:00',
      readCount: 5678,
      likeCount: 890,
      imageUrl: '/images/panda.jpg',
      featuredImage: '/images/panda-baby.jpg',
      videoUrl: 'https://example.com/panda-video',
      cardLayout: 'featured',
      isHot: true,
      isExclusive: true,
      visualStyle: {
        theme: 'colorful',
        borderRadius: 'large',
        shadow: 'heavy'
      }
    }
  ],

  [HomeTabType.RECOMMEND]: [
    {
      id: 'r1',
      title: '春节期间政务服务"不打烊" 全市服务窗口正常开放',
      summary: '为方便市民春节期间办理业务，郑州市政务服务中心推出春节期间服务安排，各服务窗口将轮流值班，确保政务服务不间断。市民可通过线上平台预约，享受高效便捷的政务服务。',
      category: HomeTabType.RECOMMEND,
      tags: ['政务服务', '春节', '便民'],
      author: '郑州市政务服务中心',
      publishTime: '2024-01-15 10:00',
      readCount: 3250,
      likeCount: 234,
      imageUrl: '/images/government.jpg',
      priority: 'high',
      cardLayout: 'featured',
      isHot: true,
      eventDate: '2024-02-10~2024-02-17',
      visualStyle: {
        theme: 'default',
        borderRadius: 'large'
      }
    },
    {
      id: 'r2',
      title: '2024郑州旅游年卡震撼发售，一卡畅游全市景区',
      summary: '2024年郑州旅游年卡正式发售，仅需200元即可畅游全市30多个A级景区。包含少林寺、嵩山、黄河游览区等知名景点，全年无限次入园，还享受餐饮住宿等多项优惠。',
      category: HomeTabType.RECOMMEND,
      tags: ['旅游', '优惠', '年卡'],
      author: '郑州市文旅局',
      publishTime: '2024-01-14 16:30',
      readCount: 4560,
      likeCount: 342,
      imageUrl: '/images/tourism.jpg',
      featuredImage: '/images/tourism-card.jpg',
      priority: 'high',
      price: '¥200/年',
      discount: '早鸟价¥180',
      cardLayout: 'magazine',
      isExclusive: true,
      rating: 4.9,
      visualStyle: {
        theme: 'colorful',
        shadow: 'heavy'
      }
    },
    {
      id: 'r3',
      title: '智慧交通APP全新升级，出行更便捷',
      summary: '郑州智慧交通APP推出全新版本，增加实时公交查询、智能路线规划、停车场信息查询等功能，为市民提供更便捷的出行体验。',
      category: HomeTabType.RECOMMEND,
      tags: ['智慧交通', 'APP升级', '便民服务'],
      author: '郑州市交通局',
      publishTime: '2024-01-13 11:00',
      readCount: 2340,
      likeCount: 189,
      audioUrl: 'https://example.com/traffic-audio',
      cardLayout: 'list',
      difficulty: 'easy',
      rating: 4.6
    },
    {
      id: 'r4',
      title: '郑州城市大脑平台正式上线',
      summary: '郑州城市大脑平台正式上线，整合政务、交通、医疗、教育等领域数据，实现城市治理智能化、精细化。',
      category: HomeTabType.RECOMMEND,
      tags: ['智慧城市', '大数据', '城市管理'],
      author: '郑州市政府',
      publishTime: '2024-01-12 09:00',
      readCount: 3456,
      likeCount: 432,
      imageUrl: '/images/city-brain.jpg',
      featuredImage: '/images/city-brain-featured.jpg',
      videoUrl: 'https://example.com/city-brain-demo',
      cardLayout: 'featured',
      isExclusive: true,
      visualStyle: {
        theme: 'dark',
        shadow: 'medium'
      }
    },
    {
      id: 'r5',
      title: '郑州医保线上支付功能全面开通',
      summary: '郑州市医保线上支付功能全面开通，市民可通过手机APP完成医保缴费、报销申请等业务，实现医保服务"掌上办"。',
      category: HomeTabType.RECOMMEND,
      tags: ['医保', '线上服务', '便民'],
      author: '郑州市医保局',
      publishTime: '2024-01-11 14:00',
      readCount: 2890,
      likeCount: 267,
      imageUrl: '/images/medical-insurance.jpg',
      cardLayout: 'compact',
      isNew: true,
      rating: 4.3
    },
    {
      id: 'r6',
      title: '郑州公共自行车系统升级改造完成',
      summary: '郑州公共自行车系统升级改造完成，新增电子围栏技术，实现无桩借还车，市民使用更加便捷。',
      category: HomeTabType.RECOMMEND,
      tags: ['公共自行车', '绿色出行', '交通升级'],
      author: '郑州市交通局',
      publishTime: '2024-01-10 10:30',
      readCount: 1567,
      likeCount: 134,
      quote: '绿色出行，健康生活',
      images: ['/images/bike-1.jpg', '/images/bike-2.jpg', '/images/bike-3.jpg'],
      cardLayout: 'grid',
      rating: 4.5
    },
    {
      id: 'r7',
      title: '郑州住房公积金提取业务线上化率达到95%',
      summary: '郑州住房公积金提取业务线上化率达到95%，市民可通过手机APP、网站等渠道办理提取业务，真正实现"让数据多跑路，让群众少跑腿"。',
      category: HomeTabType.RECOMMEND,
      tags: ['住房公积金', '线上服务', '便民政策'],
      author: '郑州住房公积金管理中心',
      publishTime: '2024-01-09 16:00',
      readCount: 1876,
      likeCount: 156,
      imageUrl: '/images/housing-fund.jpg',
      cardLayout: 'list',
      difficulty: 'easy'
    },
    {
      id: 'r8',
      title: '郑州推出"周末放心购"消费保障活动',
      summary: '郑州市推出"周末放心购"消费保障活动，涵盖餐饮、零售、服务等领域，消费者可享受7天无理由退货、假一赔十等保障。',
      category: HomeTabType.RECOMMEND,
      tags: ['消费保障', '周末活动', '便民服务'],
      author: '郑州市市场监管局',
      publishTime: '2024-01-08 11:00',
      readCount: 2345,
      likeCount: 298,
      imageUrl: '/images/consumer-protection.jpg',
      eventDate: '每周六、日',
      price: '免费参与',
      cardLayout: 'magazine',
      isHot: true,
      rating: 4.4
    }
  ],

  [HomeTabType.COMMUNITY]: [
    {
      id: 'c1',
      title: '金水区社区邻里节圆满举办，和谐邻里情更浓',
      summary: '金水区举办社区邻里节活动，居民们欢聚一堂，通过文艺表演、互动游戏、美食品尝等方式增进邻里情谊，营造和谐社区氛围。',
      category: HomeTabType.COMMUNITY,
      tags: ['社区活动', '邻里关系', '金水区'],
      author: '金水区社区服务中心',
      publishTime: '2024-01-15 15:20',
      readCount: 890,
      likeCount: 67,
      imageUrl: '/images/community.jpg',
      eventDate: '2024-01-15',
      location: '金水区文化广场',
      price: '免费',
      cardLayout: 'grid',
      rating: 4.6
    },
    {
      id: 'c2',
      title: '二七区志愿服务队伍招募，共建美好社区',
      summary: '二七区面向全区招募志愿者，成立社区志愿服务队伍，为老人、儿童、残障人士等群体提供关爱服务。',
      category: HomeTabType.COMMUNITY,
      tags: ['志愿服务', '社区建设', '公益活动'],
      author: '二七区文明办',
      publishTime: '2024-01-14 09:00',
      readCount: 1234,
      likeCount: 189,
      imageUrl: '/images/volunteer.jpg',
      eventDate: '长期招募',
      location: '二七区各社区',
      price: '志愿服务',
      cardLayout: 'compact',
      isNew: true,
      rating: 4.8
    },
    {
      id: 'c3',
      title: '管城区举办垃圾分类知识竞赛',
      summary: '管城区举办垃圾分类知识竞赛，通过趣味竞赛形式提高居民环保意识，推进垃圾分类工作深入开展。',
      category: HomeTabType.COMMUNITY,
      tags: ['垃圾分类', '环保', '知识竞赛'],
      author: '管城区环保局',
      publishTime: '2024-01-13 14:00',
      readCount: 567,
      likeCount: 78,
      quote: '垃圾分类从我做起，美好环境共同守护',
      imageUrl: '/images/garbage-sorting.jpg',
      images: ['/images/garbage-1.jpg', '/images/garbage-2.jpg'],
      cardLayout: 'list',
      difficulty: 'easy'
    },
    {
      id: 'c4',
      title: '中原区社区图书馆升级改造完成',
      summary: '中原区社区图书馆升级改造完成，新增电子阅览区、儿童绘本馆、自习室等功能区域，为居民提供更优质的阅读服务。',
      category: HomeTabType.COMMUNITY,
      tags: ['社区图书馆', '升级改造', '文化设施'],
      author: '中原区文化局',
      publishTime: '2024-01-12 10:30',
      readCount: 1456,
      likeCount: 234,
      imageUrl: '/images/community-library.jpg',
      featuredImage: '/images/library-new.jpg',
      eventDate: '2024-01-12正式开放',
      location: '中原区建设路社区',
      price: '免费开放',
      cardLayout: 'featured',
      isNew: true,
      visualStyle: {
        theme: 'colorful',
        shadow: 'medium'
      }
    }
  ],

  [HomeTabType.MEDIA]: [
    {
      id: 'm1',
      title: '郑州电视台今日郑州栏目全新改版，打造融媒新标杆',
      summary: '郑州电视台王牌栏目今日郑州全新改版，引入新技术设备，增强互动功能，节目质量和观看体验全面提升。',
      category: HomeTabType.MEDIA,
      tags: ['电视台', '节目改版', '融媒体'],
      author: '郑州电视台',
      publishTime: '2024-01-15 18:00',
      readCount: 2340,
      likeCount: 187,
      imageUrl: '/images/tv-show.jpg',
      videoUrl: 'https://example.com/today-zhengzhou',
      cardLayout: 'magazine',
      rating: 4.5
    },
    {
      id: 'm2',
      title: '郑州报业集团推出数字报纸订阅服务',
      summary: '郑州报业集团推出数字报纸订阅服务，读者可通过手机APP随时随地阅读郑州日报、晚报等报刊，享受个性化推荐和互动功能。',
      category: HomeTabType.MEDIA,
      tags: ['数字报纸', '移动阅读', '报业转型'],
      author: '郑州报业集团',
      publishTime: '2024-01-14 09:30',
      readCount: 1789,
      likeCount: 156,
      imageUrl: '/images/digital-newspaper.jpg',
      price: '¥15/月',
      discount: '年费8折',
      cardLayout: 'compact',
      isNew: true,
      rating: 4.3
    },
    {
      id: 'm3',
      title: '郑州广播电台推出"声音郑州"音频节目',
      summary: '郑州广播电台推出"声音郑州"音频节目，通过音频形式讲述郑州故事，传播郑州声音，让听众感受城市魅力。',
      category: HomeTabType.MEDIA,
      tags: ['广播电台', '音频节目', '城市故事'],
      author: '郑州广播电台',
      publishTime: '2024-01-13 12:00',
      readCount: 945,
      likeCount: 123,
      audioUrl: 'https://example.com/sound-zhengzhou',
      cardLayout: 'list',
      difficulty: 'easy'
    },
    {
      id: 'm4',
      title: '郑州新媒体中心举办短视频创作大赛',
      summary: '郑州新媒体中心举办短视频创作大赛，主题为"我的郑州故事"，鼓励市民用镜头记录城市生活，展现郑州魅力。',
      category: HomeTabType.MEDIA,
      tags: ['短视频', '创作大赛', '新媒体'],
      author: '郑州新媒体中心',
      publishTime: '2024-01-12 15:00',
      readCount: 3456,
      likeCount: 567,
      imageUrl: '/images/video-contest.jpg',
      videoUrl: 'https://example.com/video-contest',
      eventDate: '2024-01-20~2024-03-20',
      location: '郑州新媒体中心',
      price: '免费参赛',
      cardLayout: 'featured',
      isHot: true,
      visualStyle: {
        theme: 'dark',
        borderRadius: 'large'
      }
    }
  ],

  [HomeTabType.GOVERNMENT]: [
    {
      id: 'g1',
      title: '郑州市政府工作报告发布，2024年民生实事清单确定',
      summary: '郑州市2024年政府工作报告正式发布，确定涵盖教育、医疗、交通、环境等10大领域40项民生实事，总投资达500亿元。',
      category: HomeTabType.GOVERNMENT,
      tags: ['政府工作', '民生实事', '政策发布'],
      author: '郑州市政府办公厅',
      publishTime: '2024-01-15 14:00',
      readCount: 5230,
      likeCount: 412,
      imageUrl: '/images/government-report.jpg',
      featuredImage: '/images/work-report-featured.jpg',
      priority: 'high',
      cardLayout: 'featured',
      isExclusive: true,
      visualStyle: {
        theme: 'default',
        borderRadius: 'medium',
        shadow: 'heavy'
      }
    },
    {
      id: 'g2',
      title: '郑州市推出人才引进新政，最高补贴500万元',
      summary: '郑州市推出新一轮人才引进政策，对高层次人才、创新创业人才等给予住房补贴、科研经费等支持，最高可获500万元补贴。',
      category: HomeTabType.GOVERNMENT,
      tags: ['人才政策', '创新创业', '补贴政策'],
      author: '郑州市人社局',
      publishTime: '2024-01-14 10:00',
      readCount: 6789,
      likeCount: 890,
      imageUrl: '/images/talent-policy.jpg',
      quote: '人才是第一资源，创新是第一动力',
      price: '最高补贴500万元',
      cardLayout: 'magazine',
      isHot: true,
      isNew: true,
      rating: 4.9
    },
    {
      id: 'g3',
      title: '郑州启动营商环境优化专项行动',
      summary: '郑州启动营商环境优化专项行动，推出简化审批流程、降低企业成本、提升服务效率等20项具体措施。',
      category: HomeTabType.GOVERNMENT,
      tags: ['营商环境', '政策优化', '企业服务'],
      author: '郑州市发改委',
      publishTime: '2024-01-13 16:00',
      readCount: 2345,
      likeCount: 267,
      imageUrl: '/images/business-environment.jpg',
      duration: '6个月',
      cardLayout: 'list',
      difficulty: 'medium'
    }
  ],

  [HomeTabType.SCIENCE]: [
    {
      id: 's1',
      title: '郑州科技馆新展区开放：探索人工智能的奥秘',
      summary: '郑州科技馆全新人工智能展区正式向公众开放，通过互动展品让市民了解AI技术的基本原理和应用，激发科学兴趣。',
      category: HomeTabType.SCIENCE,
      tags: ['科技馆', '人工智能', '科普教育'],
      author: '郑州科技馆',
      publishTime: '2024-01-15 13:00',
      readCount: 1560,
      likeCount: 123,
      imageUrl: '/images/science-museum.jpg',
      featuredImage: '/images/ai-exhibition.jpg',
      videoUrl: 'https://example.com/ai-exhibition',
      eventDate: '2024-01-15起长期开放',
      location: '郑州科技馆',
      price: '成人票¥30，学生票¥15',
      discount: '团体票8折',
      cardLayout: 'featured',
      isNew: true,
      rating: 4.7
    },
    {
      id: 's2',
      title: '郑州大学科研团队获国家级科技奖',
      summary: '郑州大学材料科学与工程学院科研团队在新能源材料研究领域取得重大突破，荣获国家技术发明二等奖。',
      category: HomeTabType.SCIENCE,
      tags: ['科研突破', '科技成果', '郑州大学'],
      author: '郑州大学科研处',
      publishTime: '2024-01-14 11:00',
      readCount: 2890,
      likeCount: 456,
      imageUrl: '/images/research-breakthrough.jpg',
      cardLayout: 'magazine',
      isExclusive: true,
      visualStyle: {
        theme: 'colorful',
        shadow: 'heavy'
      }
    },
    {
      id: 's3',
      title: '郑州举办青少年科技创新大赛',
      summary: '郑州市举办第25届青少年科技创新大赛，吸引全市2000余名中小学生参与，展示发明创造和科学研究成果。',
      category: HomeTabType.SCIENCE,
      tags: ['科技创新', '青少年', '科学竞赛'],
      author: '郑州市科协',
      publishTime: '2024-01-13 09:00',
      readCount: 1234,
      likeCount: 189,
      imageUrl: '/images/youth-science-contest.jpg',
      images: ['/images/contest-1.jpg', '/images/contest-2.jpg', '/images/contest-3.jpg'],
      eventDate: '2024-01-20~2024-01-22',
      location: '郑州国际会展中心',
      price: '免费参观',
      cardLayout: 'grid',
      rating: 4.5
    }
  ],

  [HomeTabType.HEALTH]: [
    {
      id: 'h1',
      title: '郑州各大医院春节门诊安排公布，医疗服务不断档',
      summary: '为保障市民春节期间就医需求，郑州各大医院公布春节期间门诊安排，急诊24小时开放，部分专家门诊照常进行。',
      category: HomeTabType.HEALTH,
      tags: ['医疗服务', '春节', '门诊安排'],
      author: '郑州市卫健委',
      publishTime: '2024-01-15 11:00',
      readCount: 4230,
      likeCount: 345,
      imageUrl: '/images/hospital.jpg',
      eventDate: '2024-02-10~2024-02-17',
      cardLayout: 'featured',
      isHot: true,
      visualStyle: {
        theme: 'default',
        shadow: 'medium'
      }
    },
    {
      id: 'h2',
      title: '郑州推出家庭医生签约服务，覆盖率达85%',
      summary: '郑州市全面推行家庭医生签约服务，目前全市家庭医生签约覆盖率达85%，居民可享受个性化健康管理服务。',
      category: HomeTabType.HEALTH,
      tags: ['家庭医生', '健康管理', '医疗改革'],
      author: '郑州市卫健委',
      publishTime: '2024-01-14 15:00',
      readCount: 2345,
      likeCount: 267,
      imageUrl: '/images/family-doctor.jpg',
      quote: '健康守护，从家庭医生开始',
      price: '基础服务免费，增值服务收费',
      cardLayout: 'list',
      difficulty: 'easy'
    },
    {
      id: 'h3',
      title: '郑州建立分级诊疗体系，缓解看病难问题',
      summary: '郑州建立完善分级诊疗体系，通过基层首诊、双向转诊、急慢分治等机制，有效缓解看病难、看病贵问题。',
      category: HomeTabType.HEALTH,
      tags: ['分级诊疗', '医疗改革', '便民医疗'],
      author: '郑州市卫健委',
      publishTime: '2024-01-13 10:00',
      readCount: 3456,
      likeCount: 389,
      imageUrl: '/images/medical-system.jpg',
      cardLayout: 'grid',
      rating: 4.4
    }
  ],

  [HomeTabType.FAMILY]: [
    {
      id: 'fam1',
      title: '郑州家庭教育指导中心成立，提供专业家庭服务',
      summary: '郑州市家庭教育指导中心正式成立，将为家长提供专业的家庭教育指导、亲子活动、婚姻咨询等服务，促进家庭和谐。',
      category: HomeTabType.FAMILY,
      tags: ['家庭教育', '亲子关系', '家庭服务'],
      author: '郑州市妇联',
      publishTime: '2024-01-15 16:30',
      readCount: 1340,
      likeCount: 98,
      imageUrl: '/images/family-education.jpg',
      eventDate: '2024-01-15正式成立',
      location: '郑州市妇女儿童活动中心',
      price: '基础服务免费',
      cardLayout: 'compact',
      isNew: true,
      rating: 4.6
    },
    {
      id: 'fam2',
      title: '郑州举办亲子运动会，增进家庭感情',
      summary: '郑州市举办家庭亲子运动会，设置趣味运动项目、亲子互动游戏等环节，让家长和孩子在运动中增进感情。',
      category: HomeTabType.FAMILY,
      tags: ['亲子活动', '家庭运动', '休闲娱乐'],
      author: '郑州市体育局',
      publishTime: '2024-01-14 09:00',
      readCount: 2890,
      likeCount: 456,
      imageUrl: '/images/family-sports.jpg',
      videoUrl: 'https://example.com/family-sports',
      eventDate: '2024-01-20~2024-01-21',
      location: '郑州奥体中心',
      price: '家庭票¥50',
      discount: '早鸟票8折',
      cardLayout: 'magazine',
      isHot: true,
      rating: 4.8
    },
    {
      id: 'fam3',
      title: '郑州开展"关爱留守儿童"公益活动',
      summary: '郑州市开展"关爱留守儿童"公益活动，为留守儿童提供学业辅导、心理疏导、文体活动等服务，让他们健康快乐成长。',
      category: HomeTabType.FAMILY,
      tags: ['留守儿童', '公益活动', '儿童关爱'],
      author: '郑州市民政局',
      publishTime: '2024-01-13 14:00',
      readCount: 1678,
      likeCount: 234,
      imageUrl: '/images/left-behind-children.jpg',
      quote: '关爱留守儿童，守护美好童年',
      eventDate: '长期开展',
      location: '各社区服务中心',
      price: '免费服务',
      cardLayout: 'list',
      isExclusive: true
    }
  ]
}

// 处理资讯项图片URL的函数
const processNewsItemImageUrls = (newsItem: NewsItem): NewsItem => {
  const processed = { ...newsItem }

  // 为主要图片生成随机URL
  if (processed.imageUrl) {
    processed.imageUrl = getStableRandomImageUrl('NewsItem', newsItem.id, 300, 200)
  }

  // 为特色大图生成随机URL
  if (processed.featuredImage) {
    processed.featuredImage = getStableRandomImageUrl('NewsItem', `${newsItem.id}-featured`, 800, 400)
  }

  // 为图片数组生成随机URL
  if (processed.images && processed.images.length > 0) {
    processed.images = processed.images.map((_, index) =>
      getStableRandomImageUrl('NewsItem', `${newsItem.id}-gallery-${index}`, 300, 200)
    )
  }

  return processed
}

// 获取指定标签的资讯数据
export const getNewsByTab = (tab: HomeTabType): NewsItem[] => {
  const rawNews = newsData[tab] || []
  return rawNews.map(processNewsItemImageUrls)
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
  const rawItems = allNews.slice(startIndex, endIndex)
  const items = rawItems.map(processNewsItemImageUrls)

  return {
    items,
    total: allNews.length,
    page,
    pageSize,
    hasMore: endIndex < allNews.length
  }
}