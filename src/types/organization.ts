import { BaseComponentProps } from './common'

export enum OrganizationCategory {
  LIBRARY = 'library',
  SCHOOL = 'school',
  BOOKSTORE = 'bookstore',
  GOVERNMENT = 'government',
  HOSPITAL = 'hospital',
  BANK = 'bank',
  POST_OFFICE = 'post_office',
  COMMUNITY_CENTER = 'community_center'
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