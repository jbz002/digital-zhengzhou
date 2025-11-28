import React, { useState } from 'react'
import Layout from '@components/common/Layout'
import HomePage from '@components/HomePage'
import CulturePage from '@components/CulturePage'
import OrganizationPage from '@components/OrganizationPage'
import ResidentPage from '@components/ResidentPage'
import MemberPage from '@components/MemberPage'

// 页面类型枚举
enum PageType {
  HOME = 'home',
  CULTURE = 'culture',
  ORGANIZATION = 'organization',
  RESIDENT = 'resident',
  MEMBER = 'member'
}

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME)

  // 根据当前页面渲染对应组件
  const renderCurrentPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <HomePage />
      case PageType.CULTURE:
        return <CulturePage />
      case PageType.ORGANIZATION:
        return <OrganizationPage />
      case PageType.RESIDENT:
        return <ResidentPage />
      case PageType.MEMBER:
        return <MemberPage />
      default:
        return <HomePage />
    }
  }

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page)
  }

  return (
    <Layout
      currentPage={currentPage}
      onPageChange={handlePageChange}
    >
      {renderCurrentPage()}
    </Layout>
  )
}

export default App