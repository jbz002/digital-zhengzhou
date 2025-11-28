import React from 'react'
import { PageType, NavItem as NavItemType } from '@types/common'
import styles from '@styles/components/NavItem.module.css'

interface NavItemProps {
  item: NavItemType
  isActive: boolean
  onClick: () => void
  className?: string
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  isActive,
  onClick,
  className = ''
}) => {
  return (
    <button
      className={`${styles.navItem} ${isActive ? styles.active : ''} ${className}`}
      onClick={onClick}
      title={item.label}
    >
      <div className={styles.navIcon}>
        <span className={styles.iconEmoji}>{item.icon}</span>
        {isActive && (
          <div className={styles.activeDot}></div>
        )}
      </div>
      <div className={styles.navLabel}>
        {item.label}
      </div>
    </button>
  )
}

export default NavItem