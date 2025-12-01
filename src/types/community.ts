// 社区行政区划相关类型定义

export interface CommunityInfo {
  id: string
  name: string
  description?: string
  address?: string
  phone?: string
  services?: string[]
}

export interface StreetInfo {
  id: string
  name: string
  districtId: string
  communities: CommunityInfo[]
}

export interface DistrictInfo {
  id: string
  name: string
  streets: StreetInfo[]
}

export type CommunityLevel = 'district' | 'street' | 'community'

export interface LocationHierarchy {
  districts: DistrictInfo[]
  currentDistrict?: DistrictInfo
  currentStreet?: StreetInfo
  currentCommunity?: CommunityInfo
}