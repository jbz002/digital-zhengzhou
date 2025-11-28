import { BaseComponentProps } from './common'

export enum ServiceCategory {
  CONVENIENT_SERVICE = 'convenient_service',
  DINING = 'dining',
  HEALTH = 'health',
  HOUSEKEEPING = 'housekeeping',
  EDUCATION = 'education',
  TRANSPORTATION = 'transportation',
  SHOPPING = 'shopping',
  ENTERTAINMENT = 'entertainment',
  FINANCE = 'finance',
  LEGAL = 'legal',
  TOURISM = 'tourism',
  PET_SERVICE = 'pet_service',
  BEAUTY = 'beauty',
  FITNESS = 'fitness',
  REPAIR = 'repair',
  MOVING = 'moving',
  WASTE_DISPOSAL = 'waste_disposal',
  PROPERTY_MANAGEMENT = 'property_management',
  ELDER_CARE = 'elder_care',
  CHILDCARE = 'childcare'
}

export interface ServiceCategoryItem {
  id: ServiceCategory
  name: string
  icon?: string
  description?: string
}

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  description: string
  icon?: string
  isFollowed?: boolean
  url?: string
}

export interface ServiceCategoryProps extends BaseComponentProps {
  categories: ServiceCategoryItem[]
  activeCategory: ServiceCategory | null
  onCategoryChange: (category: ServiceCategory) => void
}

export interface ServiceGridProps extends BaseComponentProps {
  services: Service[]
  selectedCategory: ServiceCategory | null
  onServiceFollow: (serviceId: string) => void
  onServiceClick: (service: Service) => void
}