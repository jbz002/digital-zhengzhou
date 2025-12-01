import { BaseComponentProps } from './common'

export enum HomeTabType {
  FOLLOW = 'follow',
  RECOMMEND = 'recommend',
  COMMUNITY = 'community',
  MEDIA = 'media',
  GOVERNMENT = 'government',
  SCIENCE = 'science',
  HEALTH = 'health',
  FAMILY = 'family',
  ORGANIZATION = 'organization'
}

export interface TabItem {
  id: HomeTabType
  label: string
}

export interface TabBarProps extends BaseComponentProps {
  activeTab: HomeTabType
  onTabChange: (tab: HomeTabType) => void
}

export interface TabContentProps extends BaseComponentProps {
  activeTab: HomeTabType
}