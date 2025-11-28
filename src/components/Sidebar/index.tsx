import React from 'react'
import NavItem from '../Footer/NavItem'
import { PageType, NavItem as NavItemType } from '@types/common'
import styles from '@styles/components/Sidebar.module.css'

interface SidebarProps {
  currentPage: PageType
  onPageChange: (page: PageType) => void
  className?: string
}

// 导航项配置
const navigationItems: NavItemType[] = [
  {
    id: PageType.HOME,
    label: '首页',
    icon: '🏠'
  },
  {
    id: PageType.CULTURE,
    label: '文化',
    icon: '📚'
  },
  {
    id: PageType.ORGANIZATION,
    label: '机构',
    icon: '🏢'
  },
  {
    id: PageType.RESIDENT,
    label: '居民',
    icon: '👥'
  },
  {
    id: PageType.MEMBER,
    label: '会员',
    icon: '⭐'
  }
]

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  onPageChange,
  className = ''
}) => {
  const handleNavItemClick = (page: PageType) => {
    onPageChange(page)
  }

  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <div className={styles.sidebarHeader}>
        <h2 className={styles.sidebarTitle}>数字郑州</h2>
        <p className={styles.sidebarSubtitle}>智慧城市服务平台</p>
      </div>

      <nav className={styles.navigation}>
        {navigationItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            isActive={currentPage === item.id}
            onClick={() => handleNavItemClick(item.id)}
            className={styles.navItem}
          />
        ))}
      </nav>

      <div className={styles.sidebarFooter}>
        <div className={styles.versionInfo}>
          <span className={styles.versionText}>v1.0.0</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar