import { BaseComponentProps } from './common'

export enum CultureFeatureType {
  MEDIA_CENTER = 'media_center',
  READING_CLUB = 'reading_club',
  NATION_READING = 'nation_reading',
  KNOWLEDGE_MARKET = 'knowledge_market',
  CITY_CARD = 'city_card',
  CITY_MAP = 'city_map',
  CULTURE_ACTIVITY = 'culture_activity',
  TOURISM_SERVICE = 'tourism_service'
}

export interface CultureFeature {
  id: CultureFeatureType
  title: string
  description: string
  icon?: string
  imageUrl?: string
}

export interface FeatureCardProps extends BaseComponentProps {
  feature: CultureFeature
}