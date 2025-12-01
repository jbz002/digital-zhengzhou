import React, { useState } from 'react'
import Layout from './components/common/Layout'
import { PageType } from './types/common'
import { Organization } from './types/organization'
import { Merchant } from './types/resident'
import { CommunityInfo } from './types/community'
import HomePage from './components/HomePage'
import CulturePage from './components/CulturePage'
import OrganizationPage from './components/OrganizationPage'
import ResidentPage from './components/ResidentPage'
import MemberPage from './components/MemberPage'
import ArticleDetail from './components/ArticleDetail'
import OrganizationDetail from './components/OrganizationDetail'
import MerchantDetail from './components/MerchantDetail'
import CommunityDetail from './components/CommunityDetail'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME)
  const [currentArticleId, setCurrentArticleId] = useState<string | null>(null)
  const [selectedOrganization, setSelectedOrganization] = useState<Organization | null>(null)
  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null)
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityInfo | null>(null)

  // 处理文章详情页面
  const handleArticleClick = (articleId: string) => {
    setCurrentArticleId(articleId)
    setCurrentPage(PageType.ARTICLE_DETAIL)
  }

  // 处理机构详情页面
  const handleOrganizationSelect = (organization: Organization) => {
    setSelectedOrganization(organization)
    setCurrentPage(PageType.ORGANIZATION_DETAIL)
  }

  // 处理商家详情页面
  const handleMerchantSelect = (merchant: Merchant) => {
    setSelectedMerchant(merchant)
    setCurrentPage(PageType.MERCHANT_DETAIL)
  }

  // 处理社区详情页面
  const handleCommunitySelect = (community: CommunityInfo) => {
    setSelectedCommunity(community)
    setCurrentPage(PageType.COMMUNITY_DETAIL)
  }

  // 处理返回上一页
  const handleBack = () => {
    setCurrentPage(PageType.HOME)
    setCurrentArticleId(null)
    setSelectedOrganization(null)
    setSelectedMerchant(null)
    setSelectedCommunity(null)
  }

  // 处理从详情页面返回到机构列表
  const handleBackToOrganization = () => {
    setCurrentPage(PageType.ORGANIZATION)
    setSelectedOrganization(null)
  }

  // 处理从商家详情返回到居民页面
  const handleBackToResident = () => {
    setCurrentPage(PageType.RESIDENT)
    setSelectedMerchant(null)
  }

  // 处理从社区详情返回到首页
  const handleBackToHome = () => {
    setCurrentPage(PageType.HOME)
    setSelectedCommunity(null)
  }

  // 根据当前页面渲染对应组件
  const renderCurrentPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <HomePage onArticleClick={handleArticleClick} onCommunitySelect={handleCommunitySelect} />
      case PageType.CULTURE:
        return <CulturePage />
      case PageType.ORGANIZATION:
        return <OrganizationPage onOrganizationSelect={handleOrganizationSelect} />
      case PageType.RESIDENT:
        return <ResidentPage onMerchantSelect={handleMerchantSelect} />
      case PageType.MEMBER:
        return <MemberPage />
      case PageType.ARTICLE_DETAIL:
        return currentArticleId ? (
          <ArticleDetail articleId={currentArticleId} onBack={handleBack} />
        ) : null
      case PageType.ORGANIZATION_DETAIL:
        return selectedOrganization ? (
          <OrganizationDetail
            organization={selectedOrganization}
            onBack={handleBackToOrganization}
          />
        ) : null
      case PageType.MERCHANT_DETAIL:
        return selectedMerchant ? (
          <MerchantDetail
            merchant={selectedMerchant}
            onBack={handleBackToResident}
          />
        ) : null
      case PageType.COMMUNITY_DETAIL:
        return selectedCommunity ? (
          <CommunityDetail
            community={selectedCommunity}
            onBack={handleBackToHome}
          />
        ) : null
      default:
        return <HomePage onArticleClick={handleArticleClick} onCommunitySelect={handleCommunitySelect} />
    }
  }

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page)
    if (page !== PageType.ARTICLE_DETAIL) {
      setCurrentArticleId(null)
    }
    if (page !== PageType.ORGANIZATION_DETAIL) {
      setSelectedOrganization(null)
    }
    if (page !== PageType.MERCHANT_DETAIL) {
      setSelectedMerchant(null)
    }
    if (page !== PageType.COMMUNITY_DETAIL) {
      setSelectedCommunity(null)
    }
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