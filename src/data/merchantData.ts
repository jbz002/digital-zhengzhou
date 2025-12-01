import { Merchant, ServiceCategory } from '@types/resident'

// 示例商家数据
export const merchants: Record<ServiceCategory, Merchant[]> = {
  [ServiceCategory.DINING]: [
    {
      id: 'merchant-1',
      name: '巴奴毛肚火锅（郑州店）',
      category: ServiceCategory.DINING,
      description: '专注毛肚火锅，连锁知名品牌',
      address: '河南省郑州市金水区花园路与农业路交叉口',
      phone: '0371-88888888',
      businessHours: '周一至周日 10:00-22:00',
      introduction: '巴奴毛肚火锅创立于2001年，秉承"产品主义"理念，专注毛肚火锅18年。采用天然辣椒、花椒炒制锅底，毛肚口感脆嫩，深受消费者喜爱。',
      tags: ['火锅', '毛肚', '连锁品牌', '河南特色'],
      imageUrl: '/images/merchants/banu-hotpot.jpg',
      rating: 4.8,
      reviewCount: 2580,
      averagePrice: '80-120元/人',
      features: ['免费WiFi', '包厢服务', '停车位充足', '可外卖'],
      services: ['毛肚火锅', '精品肥牛', '手工虾滑', '新鲜蔬菜']
    },
    {
      id: 'merchant-2',
      name: 'CoCo都可茶饮（郑州二七广场店）',
      category: ServiceCategory.DINING,
      description: '台湾奶茶品牌，各种特色饮品',
      address: '河南省郑州市二七区二七广场',
      phone: '0371-88888889',
      businessHours: '周一至周日 09:00-22:30',
      introduction: 'CoCo都可源自1997年的台湾，是全球知名茶饮品牌。坚持"新鲜、现煮"的制茶理念，为消费者提供健康美味的茶饮。',
      tags: ['奶茶', '台湾品牌', '茶饮', '连锁店'],
      imageUrl: '/images/merchants/coco-tea.jpg',
      rating: 4.6,
      reviewCount: 1890,
      averagePrice: '15-30元/人',
      features: ['外卖服务', '会员积分', '新品推荐', '节日特惠'],
      services: ['珍珠奶茶', '鲜果茶', '芝士奶盖', '咖啡系列']
    },
    {
      id: 'merchant-3',
      name: '海底捞火锅（郑州大卫城店）',
      category: ServiceCategory.DINING,
      description: '知名连锁火锅品牌，服务优质',
      address: '河南省郑州市金水区花园路丹尼斯大卫城6楼',
      phone: '0371-88888890',
      businessHours: '周一至周日 11:00-次日02:00',
      introduction: '海底捞成立于1994年，以"服务至上，顾客至上"为经营理念，已成为全球知名的火锅连锁品牌。贴心的服务和优质的食材赢得广大消费者的喜爱。',
      tags: ['火锅', '知名连锁', '服务优质', '24小时'],
      imageUrl: '/images/merchants/haidilao.jpg',
      rating: 4.9,
      reviewCount: 3200,
      averagePrice: '100-150元/人',
      features: ['免费WiFi', '儿童乐园', '美甲服务', '包厢预订'],
      services: ['招牌麻辣锅', '番茄锅底', '手工拉面', '免费水果']
    },
    {
      id: 'merchant-4',
      name: '肯德基KFC（郑州高铁站店）',
      category: ServiceCategory.DINING,
      description: '国际知名快餐连锁品牌',
      address: '河南省郑州市郑东新区郑州东站内',
      phone: '0371-88888891',
      businessHours: '周一至周日 07:00-22:00',
      introduction: '肯德基成立于1952年，是全球最大的快餐连锁品牌之一。以原味鸡和吮指原味鸡闻名，为消费者提供便捷美味的快餐服务。',
      tags: ['快餐', '国际品牌', '炸鸡', '汉堡'],
      imageUrl: '/images/merchants/kfc.jpg',
      rating: 4.5,
      reviewCount: 1560,
      averagePrice: '25-40元/人',
      features: ['24小时营业', '外卖服务', '停车位', '儿童餐'],
      services: ['原味鸡', '香辣鸡腿堡', '薯条', '可乐']
    }
  ],
  // 其他分类暂时空，后续可扩展
  [ServiceCategory.CONVENIENT_SERVICE]: [],
  [ServiceCategory.HEALTH]: [],
  [ServiceCategory.HOUSEKEEPING]: [],
  [ServiceCategory.EDUCATION]: [],
  [ServiceCategory.TRANSPORTATION]: [],
  [ServiceCategory.SHOPPING]: [],
  [ServiceCategory.ENTERTAINMENT]: [],
  [ServiceCategory.FINANCE]: [],
  [ServiceCategory.LEGAL]: [],
  [ServiceCategory.TOURISM]: [],
  [ServiceCategory.PET_SERVICE]: [],
  [ServiceCategory.BEAUTY]: [],
  [ServiceCategory.FITNESS]: [],
  [ServiceCategory.REPAIR]: [],
  [ServiceCategory.MOVING]: [],
  [ServiceCategory.WASTE_DISPOSAL]: [],
  [ServiceCategory.PROPERTY_MANAGEMENT]: [],
  [ServiceCategory.ELDER_CARE]: [],
  [ServiceCategory.CHILDCARE]: []
}

// 根据服务ID获取对应商家
export const getMerchantByServiceId = (serviceId: string, category: ServiceCategory): Merchant | null => {
  const categoryMerchants = merchants[category]

  // 根据serviceId映射到对应的商家
  const merchantMap: Record<string, string> = {
    '7': 'merchant-1',  // 巴奴毛肚火锅
    '8': 'merchant-2',  // CoCo都可茶饮
    '108': 'merchant-3', // 海底捞火锅
    '110': 'merchant-4'  // 肯德基KFC
  }

  const merchantId = merchantMap[serviceId]
  if (!merchantId) return null

  return categoryMerchants.find(m => m.id === merchantId) || null
}