# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

"数字郑州"是一个React + TypeScript + Vite构建的政府服务网站demo，将现有移动端app转换为PC端网页形式。项目采用中国红色主题，提供五个主要功能模块：首页、文化、机构、居民、会员。

## 常用命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 代码检查
npm run lint

# 预览构建结果
npm run preview
```

开发服务器默认运行在 http://localhost:3000，如果端口被占用会自动尝试其他端口（3001, 3002, 3003等）。

## 技术架构

### 核心技术栈
- **React 18** - 组件框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具和开发服务器

### 路径别名配置
项目使用自定义路径别名（在 vite.config.ts 中定义）：
- `@` → `./src`
- `@components` → `./src/components`
- `@styles` → `./src/styles`
- `@types` → `./src/types`
- `@assets` → `./src/assets`

### 样式系统
项目使用CSS Modules + CSS Custom Properties的混合架构：
- **CSS Variables**：统一的主题系统定义在 `src/styles/variables.css`，包括：
  - 中国红色主题色彩系统（--primary-color: #E53935）
  - 完整的间距、字体、阴影等设计tokens
  - 统一的动画缓动函数和过渡时间
- **CSS Modules**：组件级别的作用域样式，每个组件都有对应的 `.module.css` 文件

### 组件架构

#### 核心布局组件
- **Layout**: 主布局容器，包含Header、Footer和内容区域
- **Header**: 顶部导航栏，包含Logo、主导航、天气模块、用户中心
- **Footer**: 底部信息栏

#### 页面组件结构
- **HomePage**: 首页，包含左侧垂直导航标签 + 右侧资讯列表
- **CulturePage**: 文化服务页面，展示文化功能模块网格
- **OrganizationPage**: 机构服务页面，左侧分类树 + 右侧机构列表
- **ResidentPage**: 居民服务页面，左侧服务分类 + 右侧服务卡片
- **MemberPage**: 会员服务页面，展示会员权益和功能

#### 通用组件
- **NewsList**: 资讯列表组件，支持卡片式展示
- **WeatherWidget**: 天气组件，显示当前天气信息
- **UserCenter**: 用户中心组件，包含头像和下拉菜单

### 数据层
- **新闻数据**: `src/data/newsData.ts` 包含8个分类的示例新闻数据
- **类型定义**: `src/types/` 目录下包含完整的TypeScript类型定义

### 响应式设计原则
- 桌面端优先设计，最小宽度1200px
- 首页特殊布局：左侧垂直标签 + 右侧内容，移动端转为水平标签
- 其他页面采用网格布局，移动端转为单列布局

## 开发注意事项

### CSS类名规范
CSS Modules会自动将kebab-case转换为camelCase，例如：
```css
.my-class { /* 在CSS中 */ }
```
```tsx
styles.myClass /* 在TypeScript中使用 */
```

### 组件Props规范
所有组件都应继承BaseComponentProps接口，支持：
```typescript
interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}
```

### 色彩使用
严格使用CSS变量中的色彩系统：
- 主色：`var(--primary-color)`
- 文字：`var(--text-primary)`、`var(--text-secondary)`、`var(--text-hint)`
- 背景：`var(--background-color)`、`var(--surface-color)`
- 边框：`var(--border-color)`、`var(--divider-color)`

### 间距系统
使用标准化的间距变量：
- `var(--spacing-xs)` (4px) 到 `var(--spacing-xxl)` (48px)
- 基于8px系统设计

### 阴影层级
使用预定义的阴影变量：
- `var(--shadow-light)`、`var(--shadow-medium)`、`var(--shadow-heavy)`

## 布局约定

### Header布局结构
```
Header (fixed, height: var(--header-height))
├── headerContainer (max-width, centered)
│   ├── headerLeft
│   │   ├── Logo
│   │   └── headerNav (主导航)
│   └── headerRight
│       ├── WeatherWidget
│       └── UserCenter
```

### 首页布局结构（桌面端）
```
HomePage
├── contentLayout (flex, gap: var(--spacing-lg))
│   ├── leftSidebar (width: 120px, sticky)
│   │   └── verticalTabBar
│   └── mainContent (flex: 1)
│       └── contentArea
│           ├── NewsList
│           └── loadMore
```

### 其他页面布局模式
- **CulturePage**: 标题 + 功能网格
- **OrganizationPage**: 左侧分类树 + 右侧机构列表
- **ResidentPage**: 左侧服务分类 + 右侧服务卡片
- **MemberPage**: 标题 + 会员权益列表

所有页面都应使用相同的容器内边距（`padding: var(--spacing-lg)`），确保布局一致性。