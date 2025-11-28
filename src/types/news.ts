// 资讯相关类型定义

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
}

export interface NewsListResponse {
  items: NewsItem[]
  total: number
  page: number
  pageSize: number
}

// 导入首页标签类型
import { HomeTabType } from './home'