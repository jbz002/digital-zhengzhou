import { DistrictInfo, CommunityInfo, StreetInfo } from '../types/community'

// 郑州市各区街道社区数据
export const communityData: DistrictInfo[] = [
  {
    id: 'jinshui',
    name: '金水区',
    streets: [
      {
        id: 'jinshui-jiedao',
        name: '金水街道',
        districtId: 'jinshui',
        communities: [
          {
            id: 'jinshui-shequ1',
            name: '金水社区',
            description: '金水区核心社区，提供便民服务中心、文化活动室、健身设施等服务',
            address: '金水路123号',
            phone: '0371-12345678',
            services: ['便民服务', '文化活动', '健身设施', '老年活动']
          },
          {
            id: 'jinshui-shequ2',
            name: '人民路社区',
            description: '综合性社区，配备完善的医疗、教育、商业设施',
            address: '人民路456号',
            phone: '0371-87654321',
            services: ['医疗保健', '儿童托管', '文化教育', '商业服务']
          },
          {
            id: 'jinshui-shequ3',
            name: '花园路社区',
            description: '环境优美的住宅社区，注重绿化和环保建设',
            address: '花园路789号',
            phone: '0371-11223344',
            services: ['环境维护', '绿化管理', '垃圾分类', '社区巡逻']
          }
        ]
      },
      {
        id: 'weilai-jiedao',
        name: '未来路街道',
        districtId: 'jinshui',
        communities: [
          {
            id: 'weilai-shequ1',
            name: '未来社区',
            description: '现代化智慧社区，配备智能家居和数字化服务',
            address: '未来大道111号',
            phone: '0371-55556666',
            services: ['智能门禁', '线上服务', '智慧停车', '社区电商']
          },
          {
            id: 'weilai-shequ2',
            name: '燕庄社区',
            description: '历史文化社区，保留传统建筑风貌',
            address: '燕庄路222号',
            phone: '0371-77778888',
            services: ['文化保护', '历史展示', '传统活动', '古建筑维护']
          }
        ]
      },
      {
        id: 'jingyi-jiedao',
        name: '经八路街道',
        districtId: 'jinshui',
        communities: [
          {
            id: 'jingyi-shequ1',
            name: '经八路社区',
            description: '商业配套完善的综合社区',
            address: '经八路333号',
            phone: '0371-99990000',
            services: ['商业服务', '餐饮配套', '购物便利', '金融网点']
          }
        ]
      }
    ]
  },
  {
    id: 'erqi',
    name: '二七区',
    streets: [
      {
        id: 'erqi-jiedao',
        name: '二七街道',
        districtId: 'erqi',
        communities: [
          {
            id: 'erqi-shequ1',
            name: '二七社区',
            description: '围绕二七塔的商业文化社区',
            address: '二七广场东侧',
            phone: '0371-22223333',
            services: ['旅游咨询', '商业服务', '文化展示', '交通枢纽']
          },
          {
            id: 'erqi-shequ2',
            name: '德化街社区',
            description: '历史悠久的商业街区社区',
            address: '德化街南段',
            phone: '0371-44445555',
            services: ['商业管理', '文化保护', '步行街维护', '商户服务']
          }
        ]
      },
      {
        id: 'changjianglu-jiedao',
        name: '长江路街道',
        districtId: 'erqi',
        communities: [
          {
            id: 'changjiang-shequ1',
            name: '长江路社区',
            description: '交通便利的居住社区',
            address: '长江路666号',
            phone: '0371-66667777',
            services: ['交通便利', '生活配套', '教育服务', '医疗设施']
          }
        ]
      }
    ]
  },
  {
    id: 'guancheng',
    name: '管城回族区',
    streets: [
      {
        id: 'guancheng-jiedao',
        name: '管城街道',
        districtId: 'guancheng',
        communities: [
          {
            id: 'guancheng-shequ1',
            name: '管城社区',
            description: '具有回族文化特色的社区',
            address: '管城街123号',
            phone: '0371-33334444',
            services: ['民族文化', '特色餐饮', '宗教服务', '民族团结']
          }
        ]
      },
      {
        id: 'zijingshan-jiedao',
        name: '紫荆山街道',
        districtId: 'guancheng',
        communities: [
          {
            id: 'zijingshan-shequ1',
            name: '紫荆山社区',
            description: '围绕紫荆山公园的生态社区',
            address: '紫荆山路888号',
            phone: '0371-88889999',
            services: ['公园管理', '生态保护', '休闲娱乐', '运动健身']
          }
        ]
      }
    ]
  },
  {
    id: 'zhongyuan',
    name: '中原区',
    streets: [
      {
        id: 'zhongyuan-jiedao',
        name: '中原街道',
        districtId: 'zhongyuan',
        communities: [
          {
            id: 'zhongyuan-shequ1',
            name: '中原社区',
            description: '工业区配套的居住社区',
            address: '建设西路999号',
            phone: '0371-10101010',
            services: ['工业服务', '就业指导', '技能培训', '职工福利']
          }
        ]
      },
      {
        id: 'linyilu-jiedao',
        name: '林荫路街道',
        districtId: 'zhongyuan',
        communities: [
          {
            id: 'linyin-shequ1',
            name: '林荫社区',
            description: '环境优美的文教社区',
            address: '林荫路555号',
            phone: '0371-20202020',
            services: ['教育配套', '文化服务', '图书阅览', '学习辅导']
          }
        ]
      }
    ]
  },
  {
    id: 'huiji',
    name: '惠济区',
    streets: [
      {
        id: 'huiji-jiedao',
        name: '惠济街道',
        districtId: 'huiji',
        communities: [
          {
            id: 'huiji-shequ1',
            name: '惠济社区',
            description: '黄河岸边的生态社区',
            address: '惠济桥路168号',
            phone: '0371-30304040',
            services: ['黄河文化', '生态旅游', '农业服务', '水利设施']
          }
        ]
      }
    ]
  }
]

// 获取所有区
export const getAllDistricts = (): DistrictInfo[] => {
  return communityData
}

// 根据区ID获取街道列表
export const getStreetsByDistrict = (districtId: string): StreetInfo[] => {
  const district = communityData.find(d => d.id === districtId)
  return district ? district.streets : []
}

// 根据区ID和街道ID获取社区列表
export const getCommunitiesByStreet = (districtId: string, streetId: string): CommunityInfo[] => {
  const district = communityData.find(d => d.id === districtId)
  if (!district) return []

  const street = district.streets.find(s => s.id === streetId)
  return street ? street.communities : []
}

// 获取指定区下的所有街道和社区（用于平铺展示）
export const getAllStreetsAndCommunitiesByDistrict = (districtId: string): Array<{
  street: StreetInfo
  communities: CommunityInfo[]
}> => {
  const district = communityData.find(d => d.id === districtId)
  if (!district) return []

  return district.streets.map(street => ({
    street,
    communities: street.communities
  }))
}