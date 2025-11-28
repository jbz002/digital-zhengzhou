import React, { useState } from 'react'
import { ServiceCategory, Service } from '@types/resident'
import styles from '@styles/components/ResidentPage.module.css'

const ResidentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(ServiceCategory.CONVENIENT_SERVICE)
  const [followedServices, setFollowedServices] = useState<Set<string>>(new Set())

  // 服务分类配置
  const categories = [
    { id: ServiceCategory.CONVENIENT_SERVICE, name: '便民服务', icon: '🛠️', description: '生活便民服务' },
    { id: ServiceCategory.DINING, name: '餐饮美食', icon: '🍽️', description: '美食餐厅推荐' },
    { id: ServiceCategory.HEALTH, name: '健康养生', icon: '💊', description: '医疗健康服务' },
    { id: ServiceCategory.HOUSEKEEPING, name: '家政服务', icon: '🧹', description: '家政保洁服务' },
    { id: ServiceCategory.EDUCATION, name: '教育培训', icon: '🎓', description: '教育培训机构' },
    { id: ServiceCategory.TRANSPORTATION, name: '交通出行', icon: '🚗', description: '交通出行服务' },
    { id: ServiceCategory.SHOPPING, name: '购物消费', icon: '🛍️', description: '购物商场信息' },
    { id: ServiceCategory.ENTERTAINMENT, name: '休闲娱乐', icon: '🎮', description: '娱乐休闲场所' },
    { id: ServiceCategory.FINANCE, name: '金融服务', icon: '💰', description: '银行保险理财' },
    { id: ServiceCategory.LEGAL, name: '法律服务', icon: '⚖️', description: '法律咨询援助' },
    { id: ServiceCategory.TOURISM, name: '旅游观光', icon: '🏞️', description: '景点门票预订' },
    { id: ServiceCategory.PET_SERVICE, name: '宠物服务', icon: '🐕', description: '宠物医疗美容' },
    { id: ServiceCategory.BEAUTY, name: '美容美发', icon: '💇', description: '美容美发服务' },
    { id: ServiceCategory.FITNESS, name: '运动健身', icon: '🏃', description: '健身房运动场馆' },
    { id: ServiceCategory.REPAIR, name: '维修服务', icon: '🔧', description: '家居家电维修' },
    { id: ServiceCategory.MOVING, name: '搬家服务', icon: '🚚', description: '搬家货运服务' },
    { id: ServiceCategory.WASTE_DISPOSAL, name: '废品回收', icon: '♻️', description: '废品回收处理' },
    { id: ServiceCategory.PROPERTY_MANAGEMENT, name: '物业管理', icon: '🏢', description: '物业服务投诉' },
    { id: ServiceCategory.ELDER_CARE, name: '养老服务', icon: '👴', description: '老年康养服务' },
    { id: ServiceCategory.CHILDCARE, name: '托幼服务', icon: '👶', description: '幼儿园托管服务' }
  ]

  // 示例服务数据
  const services: Record<ServiceCategory, Service[]> = {
    [ServiceCategory.CONVENIENT_SERVICE]: [
      { id: '1', name: '供暖缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '暖气费在线缴纳服务' },
      { id: '2', name: '自来水缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '自来水费在线缴纳' },
      { id: '3', name: '燃气缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '燃气费在线缴纳服务' },
      { id: '4', name: '电费缴纳', category: ServiceCategory.CONVENIENT_SERVICE, description: '电费在线缴纳服务' },
      { id: '5', name: '物业缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '物业费在线缴纳' },
      { id: '6', name: '有线电视缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '有线电视费缴纳' },
      { id: '101', name: '宽带缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '宽带网络费用缴纳' },
      { id: '102', name: '话费充值', category: ServiceCategory.CONVENIENT_SERVICE, description: '手机话费在线充值' },
      { id: '103', name: '停车缴费', category: ServiceCategory.CONVENIENT_SERVICE, description: '停车场费用缴纳' },
      { id: '104', name: '社保查询', category: ServiceCategory.CONVENIENT_SERVICE, description: '社保信息查询服务' },
      { id: '105', name: '公积金查询', category: ServiceCategory.CONVENIENT_SERVICE, description: '公积金账户查询' },
      { id: '106', name: '违章查询', category: ServiceCategory.CONVENIENT_SERVICE, description: '交通违章查询处理' }
    ],
    [ServiceCategory.DINING]: [
      { id: '7', name: '巴奴毛肚火锅', category: ServiceCategory.DINING, description: '专注毛肚火锅，连锁知名品牌' },
      { id: '8', name: 'CoCo都可茶饮', category: ServiceCategory.DINING, description: '台湾奶茶品牌，各种特色饮品' },
      { id: '107', name: '姐弟俩土豆粉', category: ServiceCategory.DINING, description: '郑州本土特色土豆粉连锁' },
      { id: '108', name: '海底捞火锅', category: ServiceCategory.DINING, description: '知名连锁火锅品牌，服务优质' },
      { id: '109', name: '喜茶HEYTEA', category: ServiceCategory.DINING, description: '新式茶饮品牌，芝士茗茶开创者' },
      { id: '110', name: '肯德基KFC', category: ServiceCategory.DINING, description: '国际知名快餐连锁品牌' },
      { id: '111', name: '麦当劳', category: ServiceCategory.DINING, description: '全球连锁快餐品牌' },
      { id: '112', name: '星巴克咖啡', category: ServiceCategory.DINING, description: '全球知名咖啡连锁品牌' },
      { id: '113', name: '瑞幸咖啡', category: ServiceCategory.DINING, description: '中国本土咖啡连锁品牌' },
      { id: '114', name: '蜜雪冰城', category: ServiceCategory.DINING, description: '郑州本土起家的茶饮连锁' },
      { id: '115', name: '必胜客', category: ServiceCategory.DINING, description: '知名披萨连锁品牌' },
      { id: '116', name: '呷哺呷哺', category: ServiceCategory.DINING, description: '台式小火锅连锁品牌' },
      { id: '117', name: '西贝莜面村', category: ServiceCategory.DINING, description: '西北菜系连锁餐厅' },
      { id: '118', name: '绿茶餐厅', category: ServiceCategory.DINING, description: '江南风味连锁餐厅' },
      { id: '119', name: '胖哥俩肉蟹煲', category: ServiceCategory.DINING, description: '网红肉蟹煲连锁品牌' },
      { id: '120', name: '老娘舅', category: ServiceCategory.DINING, description: '中式快餐连锁品牌' },
      { id: '121', name: '真功夫', category: ServiceCategory.DINING, description: '中式营养快餐连锁' },
      { id: '122', name: '百胜中国', category: ServiceCategory.DINING, description: '餐饮集团，旗下多个品牌' },
      { id: '123', name: '塔斯汀汉堡', category: ServiceCategory.DINING, description: '中国本土汉堡连锁品牌' },
      { id: '124', name: '书亦烧仙草', category: ServiceCategory.DINING, description: '特色烧仙草茶饮品牌' },
      { id: '125', name: '沪上阿姨', category: ServiceCategory.DINING, description: '五谷杂粮茶饮品牌' },
      { id: '126', name: '茶颜悦色', category: ServiceCategory.DINING, description: '长沙本土茶饮品牌' },
      { id: '127', name: '霸王茶姬', category: ServiceCategory.DINING, description: '原叶鲜奶茶饮品牌' },
      { id: '128', name: '奈雪的茶', category: ServiceCategory.DINING, description: '新式茶饮品牌' },
      { id: '129', name: '一点点', category: ServiceCategory.DINING, description: '台湾奶茶品牌' },
      { id: '130', name: '德克士', category: ServiceCategory.DINING, description: '本土炸鸡快餐连锁' }
    ],
    [ServiceCategory.HEALTH]: [
      { id: '9', name: '张仲景国医馆', category: ServiceCategory.HEALTH, description: '张仲景大药房旗下中医馆品牌' },
      { id: '10', name: '固生堂中医', category: ServiceCategory.HEALTH, description: '知名连锁中医调理机构' },
      { id: '131', name: '和氏修脚堂', category: ServiceCategory.HEALTH, description: '郑州本土修脚足浴连锁品牌' },
      { id: '132', name: '同仁堂', category: ServiceCategory.HEALTH, description: '百年老字号中医药品牌' },
      { id: '133', name: '九州通大药房', category: ServiceCategory.HEALTH, description: '全国连锁大药房品牌' },
      { id: '134', name: '老百姓大药房', category: ServiceCategory.HEALTH, description: '全国知名连锁药房' },
      { id: '135', name: '大参林药房', category: ServiceCategory.HEALTH, description: '华南地区连锁药房品牌' },
      { id: '136', name: '国大药房', category: ServiceCategory.HEALTH, description: '郑州本土连锁药房' },
      { id: '137', name: '张仲景大药房', category: ServiceCategory.HEALTH, description: '河南本土知名药房品牌' },
      { id: '138', name: '河南中医药大学附属医院', category: ServiceCategory.HEALTH, description: '知名中医医院品牌' },
      { id: '139', name: '河南省中医院', category: ServiceCategory.HEALTH, description: '省级中医医院' },
      { id: '140', name: '郑州中医骨伤病医院', category: ServiceCategory.HEALTH, description: '中医骨科特色医院' },
      { id: '141', name: '仲景宛西制药', category: ServiceCategory.HEALTH, description: '河南本土中药制药企业' },
      { id: '142', name: '羚锐制药', category: ServiceCategory.HEALTH, description: '知名中药制药企业' },
      { id: '143', name: '太龙药业', category: ServiceCategory.HEALTH, description: '河南本土制药企业' },
      { id: '144', name: '辅仁药业', category: ServiceCategory.HEALTH, description: '河南知名制药企业' },
      { id: '145', name: '健康人大药房', category: ServiceCategory.HEALTH, description: '连锁药房品牌' },
      { id: '146', name: '华氏大药房', category: ServiceCategory.HEALTH, description: '华东地区连锁药房' },
      { id: '147', name: '海王星辰', category: ServiceCategory.HEALTH, description: '全国连锁健康药房' },
      { id: '148', name: '益丰大药房', category: ServiceCategory.HEALTH, description: '华中地区连锁药房' },
      { id: '149', name: '桐君阁大药房', category: ServiceCategory.HEALTH, description: '百年老字号药房品牌' },
      { id: '150', name: '德开大药房', category: ServiceCategory.HEALTH, description: '知名连锁药房品牌' },
      { id: '151', name: '漱玉平民大药房', category: ServiceCategory.HEALTH, description: '山东起家的连锁药房' }
    ],
    [ServiceCategory.HOUSEKEEPING]: [
      { id: '11', name: '58到家', category: ServiceCategory.HOUSEKEEPING, description: '知名上门服务平台' },
      { id: '12', name: '天鹅到家', category: ServiceCategory.HOUSEKEEPING, description: '专业家政服务平台' },
      { id: '152', name: '京东家政', category: ServiceCategory.HOUSEKEEPING, description: '京东旗下家政服务平台' },
      { id: '153', name: '阿姨帮', category: ServiceCategory.HOUSEKEEPING, description: '专业家政服务平台' },
      { id: '154', name: '云家政', category: ServiceCategory.HOUSEKEEPING, description: '互联网家政平台' },
      { id: '155', name: '好孕妈妈', category: ServiceCategory.HOUSEKEEPING, description: '专业月嫂服务平台' },
      { id: '156', name: '管家帮', category: ServiceCategory.HOUSEKEEPING, description: '高端家政服务品牌' },
      { id: '157', name: '轻松到家', category: ServiceCategory.HOUSEKEEPING, description: '便捷家政服务平台' },
      { id: '158', name: '美家帮', category: ServiceCategory.HOUSEKEEPING, description: '专业家政保洁品牌' },
      { id: '159', name: '悦家政', category: ServiceCategory.HOUSEKEEPING, description: '互联网家政平台' }
    ],
    [ServiceCategory.EDUCATION]: [
      { id: '13', name: '新东方教育', category: ServiceCategory.EDUCATION, description: '知名教育培训品牌' },
      { id: '160', name: '学而思教育', category: ServiceCategory.EDUCATION, description: '好未来旗下K12教育品牌' },
      { id: '161', name: '猿辅导', category: ServiceCategory.EDUCATION, description: '在线教育知名品牌' },
      { id: '162', name: '作业帮', category: ServiceCategory.EDUCATION, description: 'K12在线教育平台' },
      { id: '163', name: '高途课堂', category: ServiceCategory.EDUCATION, description: '跟谁学旗下教育品牌' },
      { id: '164', name: '跟谁学', category: ServiceCategory.EDUCATION, description: '知名在线教育平台' },
      { id: '165', name: '腾讯课堂', category: ServiceCategory.EDUCATION, description: '腾讯旗下在线教育平台' },
      { id: '166', name: '网易公开课', category: ServiceCategory.EDUCATION, description: '网易旗下在线教育平台' },
      { id: '167', name: '传智播客', category: ServiceCategory.EDUCATION, description: 'IT编程培训机构' },
      { id: '168', name: '达内科技', category: ServiceCategory.EDUCATION, description: '知名IT培训机构' },
      { id: '169', name: '北大青鸟', category: ServiceCategory.EDUCATION, description: '老牌IT培训机构' },
      { id: '170', name: '中公教育', category: ServiceCategory.EDUCATION, description: '公务员考试培训龙头' },
      { id: '171', name: '华图教育', category: ServiceCategory.EDUCATION, description: '公务员考试培训知名品牌' },
      { id: '172', name: '文都教育', category: ServiceCategory.EDUCATION, description: '考研培训知名品牌' },
      { id: '173', name: '海天考研', category: ServiceCategory.EDUCATION, description: '考研培训机构' },
      { id: '174', name: '新航道', category: ServiceCategory.EDUCATION, description: '英语培训机构' },
      { id: '175', name: '环球教育', category: ServiceCategory.EDUCATION, description: '雅思托福培训机构' },
      { id: '176', name: '英孚教育', category: ServiceCategory.EDUCATION, description: '国际英语培训机构' },
      { id: '177', name: '华尔街英语', category: ServiceCategory.EDUCATION, description: '成人英语培训机构' },
      { id: '178', name: '中公华图驾校', category: ServiceCategory.EDUCATION, description: '知名驾校连锁品牌' },
      { id: '179', name: '东方时尚驾校', category: ServiceCategory.EDUCATION, description: '全国连锁驾校品牌' }
    ],
    [ServiceCategory.TRANSPORTATION]: [
      { id: '14', name: '公交查询', category: ServiceCategory.TRANSPORTATION, description: '公交线路查询服务' },
      { id: '139', name: '地铁查询', category: ServiceCategory.TRANSPORTATION, description: '地铁线路换乘查询' },
      { id: '140', name: '出租车叫车', category: ServiceCategory.TRANSPORTATION, description: '出租车网约车服务' },
      { id: '141', name: '共享单车', category: ServiceCategory.TRANSPORTATION, description: '共享单车扫码骑行' },
      { id: '142', name: '长途汽车', category: ServiceCategory.TRANSPORTATION, description: '长途汽车票务预订' },
      { id: '143', name: '火车票务', category: ServiceCategory.TRANSPORTATION, description: '火车票查询购买' },
      { id: '144', name: '机票预订', category: ServiceCategory.TRANSPORTATION, description: '飞机票预订退改' },
      { id: '145', name: '停车场查询', category: ServiceCategory.TRANSPORTATION, description: '附近停车场查询' },
      { id: '146', name: '代驾服务', category: ServiceCategory.TRANSPORTATION, description: '专业代驾司机服务' },
      { id: '147', name: '租车服务', category: ServiceCategory.TRANSPORTATION, description: '汽车租赁服务' }
    ],
    [ServiceCategory.SHOPPING]: [
      { id: '15', name: '丹尼斯百货', category: ServiceCategory.SHOPPING, description: '郑州本土知名百货品牌' },
      { id: '180', name: '正弘城', category: ServiceCategory.SHOPPING, description: '郑州知名购物中心' },
      { id: '181', name: '万达广场', category: ServiceCategory.SHOPPING, description: '万达集团旗下购物中心' },
      { id: '182', name: '华润万象城', category: ServiceCategory.SHOPPING, description: '华润置地旗下高端购物中心' },
      { id: '183', name: '熙地港购物中心', category: ServiceCategory.SHOPPING, description: '郑州郑东新区购物中心' },
      { id: '184', name: '永辉超市', category: ServiceCategory.SHOPPING, description: '全国连锁超市品牌' },
      { id: '185', name: '沃尔玛', category: ServiceCategory.SHOPPING, description: '国际零售连锁品牌' },
      { id: '186', name: '家乐福', category: ServiceCategory.SHOPPING, description: '法国连锁超市品牌' },
      { id: '187', name: '大润发', category: ServiceCategory.SHOPPING, description: '知名连锁超市品牌' },
      { id: '188', name: '盒马鲜生', category: ServiceCategory.SHOPPING, description: '阿里巴巴旗下新零售超市' },
      { id: '189', name: '京东7FRESH', category: ServiceCategory.SHOPPING, description: '京东旗下生鲜超市' },
      { id: '190', name: '苏宁易购', category: ServiceCategory.SHOPPING, description: '苏宁旗下零售品牌' },
      { id: '191', name: '国美电器', category: ServiceCategory.SHOPPING, description: '知名家电连锁零售商' },
      { id: '192', name: '五星电器', category: ServiceCategory.SHOPPING, description: '家电连锁零售品牌' },
      { id: '193', name: '居然之家', category: ServiceCategory.SHOPPING, description: '家居建材连锁品牌' },
      { id: '194', name: '红星美凯龙', category: ServiceCategory.SHOPPING, description: '家居连锁卖场' },
      { id: '195', name: '万象汇', category: ServiceCategory.SHOPPING, description: '华润置地旗下购物中心' },
      { id: '196', name: '印象城', category: ServiceCategory.SHOPPING, description: '知名购物中心品牌' },
      { id: '197', name: '奥特莱斯', category: ServiceCategory.SHOPPING, description: '品牌折扣购物中心' }
    ],
    [ServiceCategory.ENTERTAINMENT]: [
      { id: '16', name: '万达影城', category: ServiceCategory.ENTERTAINMENT, description: '万达集团旗下影院品牌' },
      { id: '198', name: '横店影视城', category: ServiceCategory.ENTERTAINMENT, description: '知名影视拍摄基地' },
      { id: '199', name: '奥斯卡影城', category: ServiceCategory.ENTERTAINMENT, description: '郑州本土影院品牌' },
      { id: '200', name: '星美国际影城', category: ServiceCategory.ENTERTAINMENT, description: '国际连锁影院品牌' },
      { id: '201', name: '万达KTV', category: ServiceCategory.ENTERTAINMENT, description: '万达集团旗下KTV品牌' },
      { id: '202', name: '欢乐迪KTV', category: ServiceCategory.ENTERTAINMENT, description: '知名连锁KTV品牌' },
      { id: '203', name: '好乐迪KTV', category: ServiceCategory.ENTERTAINMENT, description: '连锁KTV娱乐品牌' },
      { id: '204', name: '快乐大本营', category: ServiceCategory.ENTERTAINMENT, description: '知名综艺节目' },
      { id: '205', name: '德云社', category: ServiceCategory.ENTERTAINMENT, description: '郭德纲旗下相声社' },
      { id: '206', name: '开心麻花', category: ServiceCategory.ENTERTAINMENT, description: '知名喜剧演出品牌' },
      { id: '207', name: '宋城演艺', category: ServiceCategory.ENTERTAINMENT, description: '知名旅游演艺品牌' },
      { id: '208', name: '长隆欢乐世界', category: ServiceCategory.ENTERTAINMENT, description: '长隆集团旗下主题公园' },
      { id: '209', name: '华侨城', category: ServiceCategory.ENTERTAINMENT, description: '大型文化旅游集团' },
      { id: '210', name: '方特欢乐世界', category: ServiceCategory.ENTERTAINMENT, description: '华强方特旗下主题公园' },
      { id: '211', name: '世纪欢乐园', category: ServiceCategory.ENTERTAINMENT, description: '郑州本土主题公园' },
      { id: '212', name: '网鱼网咖', category: ServiceCategory.ENTERTAINMENT, description: '知名连锁网吧品牌' },
      { id: '213', name: '风云再起', category: ServiceCategory.ENTERTAINMENT, description: '知名电竞连锁品牌' },
      { id: '214', name: '碰碰凉', category: ServiceCategory.ENTERTAINMENT, description: '连锁桌游品牌' },
      { id: '215', name: 'X先生密室', category: ServiceCategory.ENTERTAINMENT, description: '知名密室逃脱品牌' },
      { id: '216', name: 'MR.X密室', category: ServiceCategory.ENTERTAINMENT, description: '连锁密室逃脱品牌' },
      { id: '217', name: '逃离现实', category: ServiceCategory.ENTERTAINMENT, description: '沉浸式密室逃脱品牌' }
    ],
    [ServiceCategory.FINANCE]: [
      { id: '165', name: '银行网点', category: ServiceCategory.FINANCE, description: '银行网点查询预约' },
      { id: '166', name: '理财产品', category: ServiceCategory.FINANCE, description: '银行理财产品推荐' },
      { id: '167', name: '保险服务', category: ServiceCategory.FINANCE, description: '保险产品咨询购买' },
      { id: '168', name: '信用卡申请', category: ServiceCategory.FINANCE, description: '信用卡在线申请' },
      { id: '169', name: '贷款咨询', category: ServiceCategory.FINANCE, description: '个人企业贷款咨询' },
      { id: '170', name: '外汇兑换', category: ServiceCategory.FINANCE, description: '外汇汇率兑换服务' },
      { id: '171', name: '投资咨询', category: ServiceCategory.FINANCE, description: '投资理财咨询服务' },
      { id: '172', name: '证券开户', category: ServiceCategory.FINANCE, description: '证券账户开户服务' }
    ],
    [ServiceCategory.LEGAL]: [
      { id: '173', name: '律师咨询', category: ServiceCategory.LEGAL, description: '专业律师法律咨询' },
      { id: '174', name: '合同审查', category: ServiceCategory.LEGAL, description: '法律合同审查服务' },
      { id: '175', name: '婚姻家庭', category: ServiceCategory.LEGAL, description: '婚姻家庭法律问题' },
      { id: '176', name: '劳动纠纷', category: ServiceCategory.LEGAL, description: '劳动纠纷法律咨询' },
      { id: '177', name: '房产纠纷', category: ServiceCategory.LEGAL, description: '房产买卖法律咨询' },
      { id: '178', name: '刑事辩护', category: ServiceCategory.LEGAL, description: '刑事案件辩护服务' },
      { id: '179', name: '债务纠纷', category: ServiceCategory.LEGAL, description: '债务催收法律咨询' }
    ],
    [ServiceCategory.TOURISM]: [
      { id: '180', name: '景点门票', category: ServiceCategory.TOURISM, description: '旅游景点门票预订' },
      { id: '181', name: '酒店预订', category: ServiceCategory.TOURISM, description: '酒店民宿预订服务' },
      { id: '182', name: '跟团旅游', category: ServiceCategory.TOURISM, description: '旅游团报名服务' },
      { id: '183', name: '旅游攻略', category: ServiceCategory.TOURISM, description: '旅游景点攻略指南' },
      { id: '184', name: '租车旅游', category: ServiceCategory.TOURISM, description: '旅游租车服务' },
      { id: '185', name: '导游服务', category: ServiceCategory.TOURISM, description: '专业导游预订' },
      { id: '186', name: '特产购买', category: ServiceCategory.TOURISM, description: '地方特产购买' },
      { id: '187', name: '旅游保险', category: ServiceCategory.TOURISM, description: '旅游意外保险' }
    ],
    [ServiceCategory.PET_SERVICE]: [
      { id: '188', name: '宠物医疗', category: ServiceCategory.PET_SERVICE, description: '宠物医院预约就诊' },
      { id: '189', name: '宠物美容', category: ServiceCategory.PET_SERVICE, description: '宠物洗澡美容服务' },
      { id: '190', name: '宠物寄养', category: ServiceCategory.PET_SERVICE, description: '宠物寄养服务' },
      { id: '191', name: '宠物用品', category: ServiceCategory.PET_SERVICE, description: '宠物食品用品购买' },
      { id: '192', name: '宠物训练', category: ServiceCategory.PET_SERVICE, description: '宠物行为训练' },
      { id: '193', name: '宠物殡葬', category: ServiceCategory.PET_SERVICE, description: '宠物殡葬服务' },
      { id: '194', name: '宠物摄影', category: ServiceCategory.PET_SERVICE, description: '宠物写真拍摄' }
    ],
    [ServiceCategory.BEAUTY]: [
      { id: '195', name: '美容院', category: ServiceCategory.BEAUTY, description: '美容院SPA预订' },
      { id: '196', name: '美发店', category: ServiceCategory.BEAUTY, description: '美发造型预订' },
      { id: '197', name: '美甲店', category: ServiceCategory.BEAUTY, description: '美甲美睫服务' },
      { id: '198', name: '减肥瘦身', category: ServiceCategory.BEAUTY, description: '减肥瘦身服务' },
      { id: '199', name: '纹身美容', category: ServiceCategory.BEAUTY, description: '纹身美容服务' },
      { id: '200', name: '足浴按摩', category: ServiceCategory.BEAUTY, description: '足浴按摩养生' },
      { id: '201', name: '整形美容', category: ServiceCategory.BEAUTY, description: '医疗整形美容' }
    ],
    [ServiceCategory.FITNESS]: [
      { id: '202', name: '健身房', category: ServiceCategory.FITNESS, description: '健身房会员办理' },
      { id: '203', name: '瑜伽馆', category: ServiceCategory.FITNESS, description: '瑜伽课程预订' },
      { id: '204', name: '游泳馆', category: ServiceCategory.FITNESS, description: '游泳馆门票预订' },
      { id: '205', name: '羽毛球馆', category: ServiceCategory.FITNESS, description: '羽毛球场地预订' },
      { id: '206', name: '篮球场', category: ServiceCategory.FITNESS, description: '篮球场地预订' },
      { id: '207', name: '网球场', category: ServiceCategory.FITNESS, description: '网球场预订' },
      { id: '208', name: '舞蹈培训', category: ServiceCategory.FITNESS, description: '舞蹈培训班报名' },
      { id: '209', name: '私教服务', category: ServiceCategory.FITNESS, description: '私人教练服务' }
    ],
    [ServiceCategory.REPAIR]: [
      { id: '210', name: '手机维修', category: ServiceCategory.REPAIR, description: '手机维修服务' },
      { id: '211', name: '电脑维修', category: ServiceCategory.REPAIR, description: '电脑维修服务' },
      { id: '212', name: '空调维修', category: ServiceCategory.REPAIR, description: '空调维修保养' },
      { id: '213', name: '冰箱维修', category: ServiceCategory.REPAIR, description: '冰箱维修服务' },
      { id: '214', name: '洗衣机维修', category: ServiceCategory.REPAIR, description: '洗衣机维修服务' },
      { id: '215', name: '电视维修', category: ServiceCategory.REPAIR, description: '电视机维修' },
      { id: '216', name: '热水器维修', category: ServiceCategory.REPAIR, description: '热水器维修' },
      { id: '217', name: '管道维修', category: ServiceCategory.REPAIR, description: '水电管道维修' }
    ],
    [ServiceCategory.MOVING]: [
      { id: '218', name: '长途搬家', category: ServiceCategory.MOVING, description: '长途搬家服务' },
      { id: '219', name: '短途搬家', category: ServiceCategory.MOVING, description: '同城搬家服务' },
      { id: '220', name: '货物运输', category: ServiceCategory.MOVING, description: '货物运输配送' },
      { id: '221', name: '物流快递', category: ServiceCategory.MOVING, description: '物流快递服务' },
      { id: '222', name: '设备搬运', category: ServiceCategory.MOVING, description: '重型设备搬运' }
    ],
    [ServiceCategory.WASTE_DISPOSAL]: [
      { id: '223', name: '废品回收', category: ServiceCategory.WASTE_DISPOSAL, description: '废品上门回收' },
      { id: '224', name: '家电回收', category: ServiceCategory.WASTE_DISPOSAL, description: '旧家电回收处理' },
      { id: '225', name: '家具回收', category: ServiceCategory.WASTE_DISPOSAL, description: '旧家具回收' },
      { id: '226', name: '金属回收', category: ServiceCategory.WASTE_DISPOSAL, description: '废金属回收' },
      { id: '227', name: '纸张回收', category: ServiceCategory.WASTE_DISPOSAL, description: '废纸书本回收' }
    ],
    [ServiceCategory.PROPERTY_MANAGEMENT]: [
      { id: '228', name: '物业投诉', category: ServiceCategory.PROPERTY_MANAGEMENT, description: '物业服务投诉渠道' },
      { id: '229', name: '维修申报', category: ServiceCategory.PROPERTY_MANAGEMENT, description: '房屋维修申报' },
      { id: '230', name: '物业费查询', category: ServiceCategory.PROPERTY_MANAGEMENT, description: '物业费用查询缴纳' },
      { id: '231', name: '小区公告', category: ServiceCategory.PROPERTY_MANAGEMENT, description: '小区物业公告' },
      { id: '232', name: '业主服务', category: ServiceCategory.PROPERTY_MANAGEMENT, description: '业主委员会服务' }
    ],
    [ServiceCategory.ELDER_CARE]: [
      { id: '233', name: '养老院', category: ServiceCategory.ELDER_CARE, description: '养老院咨询预订' },
      { id: '234', name: '居家养老', category: ServiceCategory.ELDER_CARE, description: '居家养老服务' },
      { id: '235', name: '老年大学', category: ServiceCategory.ELDER_CARE, description: '老年大学报名' },
      { id: '236', name: '老年体检', category: ServiceCategory.ELDER_CARE, description: '老年人体检服务' },
      { id: '237', name: '康复护理', category: ServiceCategory.ELDER_CARE, description: '老年康复护理' },
      { id: '238', name: '老年旅游', category: ServiceCategory.ELDER_CARE, description: '老年人旅游团' }
    ],
    [ServiceCategory.CHILDCARE]: [
      { id: '239', name: '幼儿园', category: ServiceCategory.CHILDCARE, description: '幼儿园咨询报名' },
      { id: '240', name: '托儿所', category: ServiceCategory.CHILDCARE, description: '托儿所托管服务' },
      { id: '241', name: '早教中心', category: ServiceCategory.CHILDCARE, description: '早教中心课程' },
      { id: '242', name: '亲子活动', category: ServiceCategory.CHILDCARE, description: '亲子活动报名' },
      { id: '243', name: '儿童摄影', category: ServiceCategory.CHILDCARE, description: '儿童写真拍摄' },
      { id: '244', name: '儿童体检', category: ServiceCategory.CHILDCARE, description: '儿童健康体检' }
    ]
  }

  const handleCategoryClick = (categoryId: ServiceCategory) => {
    setSelectedCategory(categoryId)
  }

  const handleServiceFollow = (serviceId: string) => {
    setFollowedServices(prev => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  const currentServices = selectedCategory ? services[selectedCategory] : []

  return (
    <div className={styles.residentPage}>
      <div className={styles.pageHeader}>
        <h2 className={styles.pageTitle}>居民服务</h2>
        <p className={styles.pageSubtitle}>为郑州市民提供便捷的生活服务</p>
      </div>

      <div className={styles.contentLayout}>
        {/* 左侧服务分类 */}
        <aside className={styles.serviceCategory}>
          <h3 className={styles.categoryTitle}>服务分类</h3>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryItem} ${selectedCategory === category.id ? styles.active : ''}`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <div className={styles.categoryInfo}>
                  <span className={styles.categoryName}>{category.name}</span>
                  <span className={styles.categoryDesc}>{category.description}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* 右侧服务网格 */}
        <main className={styles.serviceGrid}>
          <div className={styles.gridHeader}>
            <h3 className={styles.gridTitle}>
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : '全部服务'}
            </h3>
            <p className={styles.gridSubtitle}>共 {currentServices.length} 项服务</p>
          </div>

          <div className={styles.servicesContainer}>
            {currentServices.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <button
                    className={`${styles.followButton} ${followedServices.has(service.id) ? styles.followed : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleServiceFollow(service.id)
                    }}
                  >
                    {followedServices.has(service.id) ? '已关注' : '关注'}
                  </button>
                </div>
                <div className={styles.serviceContent}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {currentServices.length === 0 && (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>🔍</span>
              <p>该分类下暂无服务</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default ResidentPage