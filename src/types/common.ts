// 通用类型定义

export enum PageType {
  HOME = 'home',
  CULTURE = 'culture',
  ORGANIZATION = 'organization',
  RESIDENT = 'resident',
  MEMBER = 'member',
  ARTICLE_DETAIL = 'article-detail',
  ORGANIZATION_DETAIL = 'organization-detail'
}

export interface NavItem {
  id: PageType
  label: string
  icon?: string
}

export interface WeatherData {
  temperature: string
  condition: string
  humidity?: string
  windSpeed?: string
}

export interface UserInfo {
  id: string
  name: string
  avatar?: string
  isVip?: boolean
}

// 通用组件Props
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ClickableProps extends BaseComponentProps {
  onClick?: () => void
  disabled?: boolean
}