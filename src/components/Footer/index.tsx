import React from 'react'
import NavItem from './NavItem'
import { PageType, NavItem as NavItemType } from '@types/common'
import styles from '@styles/components/Footer.module.css'

interface FooterProps {
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

const Footer: React.FC<FooterProps> = ({
  currentPage,
  onPageChange,
  className = ''
}) => {
  const handleNavItemClick = (page: PageType) => {
    onPageChange(page)
  }

  return (
    <footer className={`${styles.footer} ${className}`}>
      <div className={styles.footerContainer}>
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
      </div>
    </footer>
  )
}

export default Footer