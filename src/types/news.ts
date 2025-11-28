// 资讯相关类型定义

// 卡片布局类型
export type CardLayoutType =
  | 'default'           // 默认布局（左图右文）
  | 'featured'          // 特色大图布局
  | 'grid'              // 网格卡片布局
  | 'list'              // 纯文字列表布局
  | 'magazine'          // 杂志风格布局
  | 'compact'           // 紧凑型布局

// 视觉样式类型
export interface CardVisualStyle {
  theme?: 'default' | 'dark' | 'colorful' | 'minimal'
  accentColor?: string
  borderRadius?: 'small' | 'medium' | 'large'
  shadow?: 'none' | 'light' | 'medium' | 'heavy'
  showTags?: boolean
  showStats?: boolean
  showSource?: boolean
}

export interface NewsItem {
  id: string
  title: string
  summary: string
  content?: string
  category: HomeTabType
  tags?: string[]
  author?: string
  publishTime: string
  readCount?: number
  likeCount?: number
  imageUrl?: string
  source?: string
  priority?: 'high' | 'medium' | 'low'

  // 新增多元化卡片字段
  cardLayout?: CardLayoutType            // 卡片布局类型
  visualStyle?: CardVisualStyle          // 视觉样式配置
  featuredImage?: string                 // 特色大图
  images?: string[]                      // 多图展示
  videoUrl?: string                      // 视频资讯
  audioUrl?: string                      // 音频资讯
  quote?: string                         // 引用/金句
  eventDate?: string                     // 活动日期
  location?: string                      // 活动地点
  duration?: string                      // 时长（视频/音频）
  difficulty?: 'easy' | 'medium' | 'hard' // 难度等级
  price?: string                         // 价格信息
  discount?: string                      // 折扣信息
  rating?: number                        // 评分 (0-5)
  isHot?: boolean                        // 是否热门
  isNew?: boolean                        // 是否新品
  isExclusive?: boolean                  // 是否独家
}

export interface NewsListResponse {
  items: NewsItem[]
  total: number
  page: number
  pageSize: number
}

// 导入首页标签类型
import { HomeTabType } from './home'