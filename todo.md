# 数字郑州网站Demo开发清单

## 项目概述
将"数字郑州"app转换为PC端网站demo，以红色为主题色调，包含首页、文化、机构、居民、会员五个主要板块。

## 技术栈
- **前端框架**: React + TypeScript
- **构建工具**: Vite
- **样式方案**: CSS Modules + 自定义CSS
- **主题色**: 中国红 (#E53935)
- **最低宽度**: 1200px
- **系统适配**: Windows

## 项目结构
```
zhengzhou/
├── index.html                    # 入口HTML文件
├── package.json                   # 项目依赖配置
├── vite.config.ts                # Vite构建配置
├── tsconfig.json                 # TypeScript配置
├── src/
│   ├── main.tsx                  # 应用入口
│   ├── App.tsx                   # 根组件
│   ├── components/               # 组件目录
│   │   ├── Header/              # 顶部导航组件
│   │   │   ├── index.tsx        # Header主组件
│   │   │   ├── WeatherWidget.tsx # 天气组件
│   │   │   ├── Logo.tsx         # Logo组件
│   │   │   ├── UserCenter.tsx   # 个人中心组件
│   │   │   └── ScanButton.tsx   # 扫码按钮组件
│   │   ├── Footer/              # 底部导航组件
│   │   │   ├── index.tsx        # Footer主组件
│   │   │   └── NavItem.tsx      # 导航项组件
│   │   ├── HomePage/            # 首页组件
│   │   │   ├── index.tsx        # 首页主组件
│   │   │   ├── TabBar.tsx       # 标签栏组件
│   │   │   └── TabContent.tsx   # 标签内容组件
│   │   ├── CulturePage/         # 文化页面组件
│   │   │   ├── index.tsx        # 文化页主组件
│   │   │   └── FeatureCard.tsx  # 功能卡片组件
│   │   ├── OrganizationPage/    # 机构页面组件
│   │   │   ├── index.tsx        # 机构页主组件
│   │   │   ├── CategoryTree.tsx # 分类树组件
│   │   │   └── OrganizationList.tsx # 机构列表组件
│   │   ├── ResidentPage/        # 居民页面组件
│   │   │   ├── index.tsx        # 居民页主组件
│   │   │   ├── ServiceCategory.tsx # 服务分类组件
│   │   │   └── ServiceGrid.tsx  # 服务网格组件
│   │   ├── MemberPage/          # 会员页面组件
│   │   │   └── index.tsx        # 会员页主组件
│   │   └── common/              # 通用组件
│   │       ├── Layout.tsx       # 布局组件
│   │       ├── Loading.tsx      # 加载组件
│   │       └── Button.tsx       # 按钮组件
│   ├── styles/                  # 样式文件
│   │   ├── global.css           # 全局样式
│   │   ├── variables.css        # CSS变量定义
│   │   ├── header.css           # 头部样式
│   │   ├── footer.css           # 底部样式
│   │   ├── homepage.css         # 首页样式
│   │   ├── culturepage.css      # 文化页样式
│   │   ├── organizationpage.css # 机构页样式
│   │   └── residentpage.css     # 居民页样式
│   ├── types/                   # TypeScript类型定义
│   │   ├── common.ts            # 通用类型
│   │   ├── home.ts              # 首页类型
│   │   ├── culture.ts           # 文化页类型
│   │   ├── organization.ts      # 机构页类型
│   │   └── resident.ts          # 居民页类型
│   └── assets/                  # 静态资源
│       ├── images/              # 图片资源
│       └── icons/               # 图标资源
```

## 详细开发任务

### 阶段1：项目初始化 ⏳
- [ ] 创建Vite+React+TS项目
- [ ] 配置TypeScript和Vite
- [ ] 创建基础目录结构
- [ ] 设置CSS变量和全局样式
- [ ] 配置路径别名

### 阶段2：基础布局开发 ⏳
- [ ] 创建Layout主布局组件
- [ ] 实现Header+MainContent+Footer三层布局
- [ ] 设置全局CSS重置和基础样式
- [ ] 实现响应式布局基础框架

### 阶段3：Header组件开发 ⏳
- [ ] 开发WeatherWidget组件（显示郑州天气）
- [ ] 开发Logo组件（"数字郑州"标题）
- [ ] 开发UserCenter组件（个人中心头像）
- [ ] 开发ScanButton组件（扫码按钮）
- [ ] 组装Header主组件
- [ ] 实现Header样式和布局

### 阶段4：Footer导航开发 ⏳
- [ ] 开发NavItem导航项组件
- [ ] 实现5个导航项（首页、文化、机构、居民、会员）
- [ ] 添加导航切换功能
- [ ] 实现Footer样式和布局
- [ ] 添加激活状态样式

### 阶段5：首页开发 ⏳
- [ ] 开发TabBar标签栏组件
- [ ] 实现8个标签项（关注、推荐、社区、融媒、政务、科普、健康、家庭）
- [ ] 开发TabContent标签内容组件
- [ ] 为每个标签创建示例内容
- [ ] 实现标签切换逻辑
- [ ] 优化首页样式和用户体验

### 阶段6：文化页面开发 ⏳
- [ ] 开发FeatureCard功能卡片组件
- [ ] 实现8个功能模块：
  - [ ] 融媒中心
  - [ ] 同城读书会
  - [ ] 全民阅读
  - [ ] 知识超市
  - [ ] 城市名片
  - [ ] 城市地图
  - [ ] 文化活动
  - [ ] 文旅服务
- [ ] 实现模块网格布局
- [ ] 添加悬停效果和交互

### 阶段7：机构页面开发 ⏳
- [ ] 开发CategoryTree分类树组件
- [ ] 实现机构分类（图书馆、学校、书店、党政机关等）
- [ ] 开发OrganizationList机构列表组件
- [ ] 实现分类切换逻辑
- [ ] 添加机构项示例数据
- [ ] 实现左右分栏布局

### 阶段8：居民页面开发 ⏳
- [ ] 开发ServiceCategory服务分类组件
- [ ] 实现服务类别（便民服务、餐饮美食、健康养生、家政服务等）
- [ ] 开发ServiceGrid服务网格组件
- [ ] 实现服务按钮和关注功能
- [ ] 添加服务示例数据
- [ ] 优化网格布局和交互

### 阶段9：会员页面开发 ⏳
- [ ] 创建MemberPage基础结构
- [ ] 实现简单的会员信息展示
- [ ] 添加会员功能入口

### 阶段10：样式优化 ⏳
- [ ] 统一红色主题色调应用
- [ ] 优化字体和间距
- [ ] 实现悬停效果和过渡动画
- [ ] 确保跨浏览器兼容性
- [ ] 响应式布局优化

### 阶段11：测试与调整 ⏳
- [ ] 功能完整性测试
- [ ] 页面切换测试
- [ ] 样式一致性检查
- [ ] 性能优化
- [ ] 最终调试和修复

## 设计要求

### 颜色主题
- **主色调**: 中国红 #E53935
- **辅助色**: 深红色 #C62828
- **背景色**: #FAFAFA
- **文字色**: #212121
- **次要文字**: #757575

### 布局规范
- **整体最小宽度**: 1200px
- **Header高度**: 60px
- **Footer高度**: 60px
- **内容区域**: 自适应，最小高度600px
- **组件间距**: 使用8px倍数系统

### 交互规范
- **悬停效果**: 0.3s过渡动画
- **点击反馈**: 轻微缩放效果
- **页面切换**: 淡入淡出动画
- **加载状态**: 骨架屏或加载指示器

## 注意事项
1. 严格按照组件化开发思想
2. 保持代码整洁和可维护性
3. 确保TypeScript类型安全
4. 优先使用CSS Modules避免样式冲突
5. 所有组件都需要有适当的props类型定义
6. 保持统一的命名规范
7. 添加必要的注释说明

## 完成标准
- [ ] 所有页面正常显示和切换
- [ ] 响应式布局在不同屏幕尺寸下正常工作
- [ ] 红色主题统一应用到所有组件
- [ ] 所有交互功能正常
- [ ] 代码结构清晰，符合React最佳实践
- [ ] 无TypeScript类型错误
- [ ] 性能良好，无明显卡顿

---
*此清单将随着开发进度更新和完善*