import React from 'react'
import Header from '../Header'
import { PageType } from '@types/common'
import styles from '@styles/components/Layout.module.css'

interface LayoutProps {
  children: React.ReactNode
  currentPage: PageType
  onPageChange: (page: PageType) => void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  currentPage,
  onPageChange
}) => {
  return (
    <div className={styles.layout}>
      <Header
        currentPage={currentPage}
        onPageChange={onPageChange}
      />

      <main className={styles.mainContent}>
        <div className={styles.contentContainer}>
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout