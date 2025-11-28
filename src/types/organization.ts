import { BaseComponentProps } from './common'

export enum OrganizationCategory {
  LIBRARY = 'library',
  SCHOOL = 'school',
  BOOKSTORE = 'bookstore',
  GOVERNMENT = 'government',
  HOSPITAL = 'hospital',
  BANK = 'bank',
  POST_OFFICE = 'post_office',
  COMMUNITY_CENTER = 'community_center',
  POLICE = 'police',
  FIRE_STATION = 'fire_station',
  PARK = 'park',
  MUSEUM = 'museum',
  THEATER = 'theater',
  SPORTS_CENTER = 'sports_center',
  MARKET = 'market',
  HOTEL = 'hotel',
  GAS_STATION = 'gas_station',
  PHARMACY = 'pharmacy',
  TELECOMMUNICATION = 'telecommunication',
  INSURANCE = 'insurance'
}

export interface OrganizationCategoryItem {
  id: OrganizationCategory
  name: string
  icon?: string
  children?: OrganizationCategoryItem[]
}

export interface Organization {
  id: string
  name: string
  category: OrganizationCategory
  address: string
  phone?: string
  description?: string
  imageUrl?: string
}

export interface CategoryTreeProps extends BaseComponentProps {
  categories: OrganizationCategoryItem[]
  activeCategory: OrganizationCategory | null
  onCategoryChange: (category: OrganizationCategory) => void
}

export interface OrganizationListProps extends BaseComponentProps {
  organizations: Organization[]
  selectedCategory: OrganizationCategory | null
}