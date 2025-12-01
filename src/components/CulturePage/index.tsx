import React from 'react'
import { CultureFeatureType } from '@types/culture'
import MediaCenter from './MediaCenter'
import ReadingClub from './ReadingClub'
import NationReading from './NationReading'
import KnowledgeMarket from './KnowledgeMarket'
import CityCard from './CityCard'
import CityMap from './CityMap'
import CultureActivity from './CultureActivity'
import TourismService from './TourismService'
import styles from '@styles/components/CulturePage.module.css'

const CulturePage: React.FC = () => {
  // 功能模块顺序配置
  const moduleOrder = [
    CultureFeatureType.MEDIA_CENTER,
    CultureFeatureType.READING_CLUB,
    CultureFeatureType.NATION_READING,
    CultureFeatureType.KNOWLEDGE_MARKET,
    CultureFeatureType.CITY_CARD,
    CultureFeatureType.CITY_MAP,
    CultureFeatureType.CULTURE_ACTIVITY,
    CultureFeatureType.TOURISM_SERVICE
  ]

  const components: Record<string, React.FC> = {
    [CultureFeatureType.MEDIA_CENTER]: MediaCenter,
    [CultureFeatureType.READING_CLUB]: ReadingClub,
    [CultureFeatureType.NATION_READING]: NationReading,
    [CultureFeatureType.KNOWLEDGE_MARKET]: KnowledgeMarket,
    [CultureFeatureType.CITY_CARD]: CityCard,
    [CultureFeatureType.CITY_MAP]: CityMap,
    [CultureFeatureType.CULTURE_ACTIVITY]: CultureActivity,
    [CultureFeatureType.TOURISM_SERVICE]: TourismService
  }

  return (
    <div className={styles.culturePage}>
      {/* 详细功能模块展示 */}
      <div className={styles.modulesContainer}>
        {moduleOrder.map((moduleId) => {
          const Component = components[moduleId]
          if (Component) {
            return (
              <div key={`module-${moduleId}`} className={styles.moduleSection}>
                <Component />
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export default CulturePage