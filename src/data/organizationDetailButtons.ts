import { OrganizationCategory } from '@types/organization'

export interface DetailButton {
  id: string
  label: string
  icon: string
  description?: string
}

export const organizationDetailButtons: Record<OrganizationCategory, DetailButton[]> = {
  [OrganizationCategory.LIBRARY]: [
    { id: 'intro', label: '图书馆介绍', icon: '📖', description: '了解图书馆的基本情况' },
    { id: 'rules', label: '入馆须知', icon: '📋', description: '入馆规则和注意事项' },
    { id: 'borrow', label: '借阅须知', icon: '📚', description: '图书借阅规则和流程' },
    { id: 'notice', label: '公告通知', icon: '📢', description: '最新公告和通知信息' },
    { id: 'card', label: '办证指南', icon: '🆔', description: '借书证办理指南' },
    { id: 'digital', label: '数字资源', icon: '💻', description: '电子资源和数据库' },
    { id: 'activity', label: '活动预告', icon: '🎉', description: '近期活动安排' },
    { id: 'service', label: '读者服务', icon: '👥', description: '各项读者服务介绍' }
  ],

  [OrganizationCategory.SCHOOL]: [
    { id: 'intro', label: '学校介绍', icon: '🏫', description: '学校基本情况介绍' },
    { id: 'enroll', label: '招生简章', icon: '📝', description: '最新招生信息' },
    { id: 'major', label: '专业设置', icon: '📚', description: '专业和课程设置' },
    { id: 'teacher', label: '师资力量', icon: '👨‍🏫', description: '教师队伍介绍' },
    { id: 'campus', label: '校园生活', icon: '🌳', description: '校园环境和活动' },
    { id: 'notice', label: '通知公告', icon: '📢', description: '学校最新通知' },
    { id: 'calendar', label: '校历安排', icon: '📅', description: '学期校历安排' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '各部门联系方式' }
  ],

  [OrganizationCategory.HOSPITAL]: [
    { id: 'intro', label: '医院介绍', icon: '🏥', description: '医院基本情况' },
    { id: 'department', label: '科室介绍', icon: '🩺', description: '各科室特色和专长' },
    { id: 'expert', label: '专家门诊', icon: '👨‍⚕️', description: '专家门诊时间表' },
    { id: 'guide', label: '就医指南', icon: '🧭', description: '就诊流程指导' },
    { id: 'notice', label: '公告通知', icon: '📢', description: '医院最新公告' },
    { id: 'insurance', label: '医保信息', icon: '🛡️', description: '医保报销说明' },
    { id: 'health', label: '健康体检', icon: '❤️', description: '体检服务介绍' },
    { id: 'emergency', label: '急诊服务', icon: '🚨', description: '急诊服务信息' }
  ],

  [OrganizationCategory.BANK]: [
    { id: 'intro', label: '银行介绍', icon: '🏦', description: '银行基本情况' },
    { id: 'personal', label: '个人业务', icon: '👤', description: '个人金融服务' },
    { id: 'enterprise', label: '企业业务', icon: '🏢', description: '企业金融服务' },
    { id: 'rate', label: '利率汇率', icon: '📊', description: '最新利率汇率信息' },
    { id: 'notice', label: '公告通知', icon: '📢', description: '银行最新公告' },
    { id: 'card', label: '银行卡', icon: '💳', description: '银行卡业务介绍' },
    { id: 'loan', label: '贷款服务', icon: '💰', description: '各类贷款产品' },
    { id: 'investment', label: '投资理财', icon: '📈', description: '投资理财产品' }
  ],

  [OrganizationCategory.GOVERNMENT]: [
    { id: 'intro', label: '机构介绍', icon: '🏛️', description: '机构职能介绍' },
    { id: 'service', label: '办事指南', icon: '📋', description: '各项业务办理流程' },
    { id: 'policy', label: '政策法规', icon: '⚖️', description: '相关政策法规' },
    { id: 'notice', label: '公示公告', icon: '📢', description: '最新公示公告' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '各部门联系方式' },
    { id: 'online', label: '网上办事', icon: '💻', description: '在线服务平台' },
    { id: 'feedback', label: '意见建议', icon: '💬', description: '意见反馈渠道' },
    { id: 'guide', label: '办事指南', icon: '📖', description: '办事服务指南' }
  ],

  [OrganizationCategory.POLICE]: [
    { id: 'intro', label: '派出所介绍', icon: '👮', description: '派出所基本情况' },
    { id: 'service', label: '服务指南', icon: '📋', description: '便民服务指南' },
    { id: 'report', label: '报警求助', icon: '🚨', description: '报警求助流程' },
    { id: 'certificate', label: '证件办理', icon: '🆔', description: '各类证件办理' },
    { id: 'notice', label: '安全提示', icon: '⚠️', description: '安全防范提示' },
    { id: 'traffic', label: '交管业务', icon: '🚦', description: '交通管理业务' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '紧急联系电话' },
    { id: 'prevention', label: '防范宣传', icon: '🛡️', description: '安全防范知识' }
  ],

  [OrganizationCategory.FIRE_STATION]: [
    { id: 'intro', label: '消防站介绍', icon: '🚒', description: '消防站基本情况' },
    { id: 'safety', label: '消防安全', icon: '🔥', description: '消防安全知识' },
    { id: 'emergency', label: '应急救援', icon: '🆘', description: '应急救援服务' },
    { id: 'inspection', label: '检查指导', icon: '🔍', description: '消防安全检查' },
    { id: 'training', label: '培训演练', icon: '🎯', description: '消防培训演练' },
    { id: 'notice', label: '安全提醒', icon: '⚠️', description: '安全注意事项' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '值班电话' },
    { id: 'report', label: '火灾报警', icon: '🚨', description: '火灾报警方式' }
  ],

  [OrganizationCategory.PARK]: [
    { id: 'intro', label: '公园介绍', icon: '🌳', description: '公园基本情况' },
    { id: 'scenery', label: '景点导览', icon: '🗺️', description: '主要景点介绍' },
    { id: 'activity', label: '活动信息', icon: '🎉', description: '公园活动安排' },
    { id: 'facility', label: '设施服务', icon: '🏗️', description: '园区设施服务' },
    { id: 'notice', label: '游园须知', icon: '📋', description: '游园注意事项' },
    { id: 'transport', label: '交通指南', icon: '🚌', description: '到达方式' },
    { id: 'ticket', label: '票务信息', icon: '🎫', description: '门票价格信息' },
    { id: 'season', label: '时令特色', icon: '🌺', description: '四季景色特色' }
  ],

  [OrganizationCategory.MUSEUM]: [
    { id: 'intro', label: '博物馆介绍', icon: '🏛️', description: '博物馆基本情况' },
    { id: 'exhibition', label: '展览信息', icon: '🎨', description: '当前展览安排' },
    { id: 'collection', label: '馆藏精品', icon: '💎', description: '重要馆藏介绍' },
    { id: 'guide', label: '参观指南', icon: '🧭', description: '参观注意事项' },
    { id: 'activity', label: '教育活动', icon: '📚', description: '教育推广活动' },
    { id: 'notice', label: '开放公告', icon: '📢', description: '开放时间通知' },
    { id: 'research', label: '学术研究', icon: '🔬', description: '学术研究信息' },
    { id: 'shop', label: '文创商店', icon: '🛍️', description: '文创产品介绍' }
  ],

  [OrganizationCategory.THEATER]: [
    { id: 'intro', label: '剧院介绍', icon: '🎭', description: '剧院基本情况' },
    { id: 'program', label: '演出安排', icon: '📅', description: '近期演出节目' },
    { id: 'ticket', label: '票务信息', icon: '🎫', description: '购票指南' },
    { id: 'seat', label: '座位导览', icon: '🪑', description: '座位分布图' },
    { id: 'notice', label: '观演须知', icon: '📋', description: '观演注意事项' },
    { id: 'vip', label: '会员服务', icon: '👑', description: 'VIP会员服务' },
    { id: 'parking', label: '停车信息', icon: '🚗', description: '停车服务' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '咨询电话' }
  ],

  [OrganizationCategory.SPORTS_CENTER]: [
    { id: 'intro', label: '体育中心介绍', icon: '🏟️', description: '体育中心基本情况' },
    { id: 'facility', label: '设施介绍', icon: '🏋️', description: '体育设施介绍' },
    { id: 'booking', label: '场地预约', icon: '📝', description: '场地预约方式' },
    { id: 'course', label: '培训课程', icon: '📚', description: '培训课程安排' },
    { id: 'activity', label: '赛事活动', icon: '🏆', description: '体育赛事活动' },
    { id: 'membership', label: '会员卡', icon: '💳', description: '会员卡办理' },
    { id: 'notice', label: '开放时间', icon: '⏰', description: '场馆开放时间' },
    { id: 'coach', label: '教练团队', icon: '👨‍🏫', description: '专业教练介绍' }
  ],

  [OrganizationCategory.MARKET]: [
    { id: 'intro', label: '商场介绍', icon: '🏬', description: '商场基本情况' },
    { id: 'brand', label: '品牌导航', icon: '🏪', description: '入驻品牌介绍' },
    { id: 'promotion', label: '优惠活动', icon: '🎉', description: '最新优惠活动' },
    { id: 'service', label: '便民服务', icon: '👥', description: '商场便民服务' },
    { id: 'dining', label: '餐饮美食', icon: '🍽️', description: '餐饮商户介绍' },
    { id: 'parking', label: '停车服务', icon: '🚗', description: '停车信息服务' },
    { id: 'vip', label: '会员服务', icon: '💳', description: 'VIP会员权益' },
    { id: 'notice', label: '营业时间', icon: '⏰', description: '营业时间安排' }
  ],

  [OrganizationCategory.HOTEL]: [
    { id: 'intro', label: '酒店介绍', icon: '🏨', description: '酒店基本情况' },
    { id: 'room', label: '房型介绍', icon: '🛏️', description: '客房类型介绍' },
    { id: 'booking', label: '预订指南', icon: '📝', description: '客房预订流程' },
    { id: 'facility', label: '设施服务', icon: '🏊', description: '酒店设施服务' },
    { id: 'dining', label: '餐饮服务', icon: '🍽️', description: '酒店餐厅介绍' },
    { id: 'meeting', label: '会议服务', icon: '💼', description: '会议室及服务' },
    { id: 'notice', label: '入住须知', icon: '📋', description: '入住注意事项' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '酒店联系方式' }
  ],

  [OrganizationCategory.BOOKSTORE]: [
    { id: 'intro', label: '书店介绍', icon: '📖', description: '书店基本情况' },
    { id: 'category', label: '图书分类', icon: '📚', description: '图书分类导航' },
    { id: 'recommend', label: '推荐书目', icon: '⭐', description: '精选推荐图书' },
    { id: 'activity', label: '文化活动', icon: '🎉', description: '读书文化活动' },
    { id: 'membership', label: '会员卡', icon: '💳', description: '会员卡服务' },
    { id: 'order', label: '预订服务', icon: '📞', description: '图书预订服务' },
    { id: 'notice', label: '营业信息', icon: '📢', description: '营业时间通知' },
    { id: 'online', label: '网上书店', icon: '💻', description: '线上购书平台' }
  ],

  [OrganizationCategory.POST_OFFICE]: [
    { id: 'intro', label: '邮局介绍', icon: '📮', description: '邮局基本情况' },
    { id: 'service', label: '邮政业务', icon: '📦', description: '邮政服务介绍' },
    { id: 'express', label: '快递服务', icon: '🚚', description: '快递服务信息' },
    { id: 'stamp', label: '集邮服务', icon: '📮', description: '邮票集邮服务' },
    { id: 'notice', label: '服务时间', icon: '⏰', description: '营业时间安排' },
    { id: 'rate', label: '资费标准', icon: '💰', description: '服务收费标准' },
    { id: 'tracking', label: '查询服务', icon: '🔍', description: '邮件查询服务' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '联系电话地址' }
  ],

  [OrganizationCategory.COMMUNITY_CENTER]: [
    { id: 'intro', label: '社区中心介绍', icon: '🏘️', description: '社区中心概况' },
    { id: 'service', label: '便民服务', icon: '👥', description: '各项便民服务' },
    { id: 'activity', label: '社区活动', icon: '🎉', description: '社区活动安排' },
    { id: 'course', label: '培训课程', icon: '📚', description: '社区培训课程' },
    { id: 'elderly', label: '养老服务', icon: '👴', description: '老年人服务' },
    { id: 'children', label: '儿童服务', icon: '👶', description: '儿童托管服务' },
    { id: 'notice', label: '通知公告', icon: '📢', description: '社区最新通知' },
    { id: 'volunteer', label: '志愿服务', icon: '❤️', description: '志愿者服务' }
  ],

  [OrganizationCategory.GAS_STATION]: [
    { id: 'intro', label: '加油站介绍', icon: '⛽', description: '加油站基本情况' },
    { id: 'fuel', label: '油品价格', icon: '💰', description: '实时油价信息' },
    { id: 'service', label: '便民服务', icon: '👥', description: '加油站便民服务' },
    { id: 'card', label: '加油卡', icon: '💳', description: '加油卡服务' },
    { id: 'notice', label: '营业时间', icon: '⏰', description: '营业时间安排' },
    { id: 'promotion', label: '优惠活动', icon: '🎉', description: '优惠促销活动' },
    { id: 'safety', label: '安全须知', icon: '⚠️', description: '加油站安全须知' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '联系电话' }
  ],

  [OrganizationCategory.PHARMACY]: [
    { id: 'intro', label: '药店介绍', icon: '💊', description: '药店基本情况' },
    { id: 'medicine', label: '药品信息', icon: '📋', description: '常备药品信息' },
    { id: 'prescription', label: '处方服务', icon: '📝', description: '处方药服务' },
    { id: 'health', label: '健康咨询', icon: '💡', description: '用药健康咨询' },
    { id: 'membership', label: '会员服务', icon: '💳', description: '会员优惠服务' },
    { id: 'notice', label: '服务时间', icon: '⏰', description: '营业时间安排' },
    { id: 'delivery', label: '送药服务', icon: '🚚', description: '送药上门服务' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '联系电话' }
  ],

  [OrganizationCategory.TELECOMMUNICATION]: [
    { id: 'intro', label: '营业厅介绍', icon: '📱', description: '营业厅基本情况' },
    { id: 'package', label: '套餐业务', icon: '📦', description: '通信套餐介绍' },
    { id: 'device', label: '终端销售', icon: '📲', description: '手机终端销售' },
    { id: 'service', label: '业务办理', icon: '📝', description: '各类业务办理' },
    { id: 'notice', label: '公告通知', icon: '📢', description: '最新公告通知' },
    { id: 'promotion', label: '优惠活动', icon: '🎉', description: '优惠促销活动' },
    { id: 'repair', label: '维修服务', icon: '🔧', description: '手机维修服务' },
    { id: 'consultation', label: '业务咨询', icon: '💬', description: '业务咨询服务' }
  ],

  [OrganizationCategory.INSURANCE]: [
    { id: 'intro', label: '公司介绍', icon: '🛡️', description: '保险公司概况' },
    { id: 'product', label: '保险产品', icon: '📋', description: '各类保险产品' },
    { id: 'claim', label: '理赔服务', icon: '💰', description: '理赔服务指南' },
    { id: 'consultation', label: '保险咨询', icon: '💬', description: '保险咨询服务' },
    { id: 'notice', label: '公告通知', icon: '📢', description: '公司最新公告' },
    { id: 'agent', label: '代理人服务', icon: '👤', description: '保险代理人服务' },
    { id: 'online', label: '在线服务', icon: '💻', description: '在线投保理赔' },
    { id: 'contact', label: '联系方式', icon: '📞', description: '客服联系方式' }
  ]
}