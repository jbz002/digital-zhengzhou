import React from 'react'
import Logo from './Logo'
import WeatherWidget from './WeatherWidget'
import UserCenter from './UserCenter'
import { PageType, NavItem as NavItemType } from '@types/common'
import styles from '@styles/components/Header.module.css'

interface HeaderProps {
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

const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
  className = ''
}) => {
  const handleLogoClick = () => {
    onPageChange(PageType.HOME)
  }

  const handleScanClick = () => {
    console.log('扫码功能点击')
    alert('扫码功能将在后续版本中实现')
  }

  
  const handleNavItemClick = (page: PageType) => {
    onPageChange(page)
  }

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <Logo
            onClick={handleLogoClick}
            className={styles.logo}
          />
          <nav className={styles.headerNav}>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${currentPage === item.id ? styles.active : ''}`}
                onClick={() => handleNavItemClick(item.id)}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.headerRight}>
          <WeatherWidget
            className={styles.weatherWidget}
          />
          <UserCenter
            onScanClick={handleScanClick}
            className={styles.userCenter}
          />
        </div>
      </div>
    </header>
  )
}

export default Header