# Squid Game Thanos

一个基于 Next.js 14 构建的多语言游戏网站，集成了 Squid Game 在线游戏。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **语言**: TypeScript
- **国际化**: next-intl
- **代码规范**: ESLint, Prettier
- **包管理**: npm/yarn

## 主要特性

- 🌐 多语言支持 (en, tw, jp, es, fr)
- 🎮 集成在线游戏
- 📱 响应式设计
- 🎨 现代化 UI/UX
- 🔍 SEO 优化
- 🚀 快速加载

## 项目结构
squidgamethanos/
├── app/ # Next.js 14 应用目录
│ ├── [locale]/ # 多语言路由
│ │ ├── (with-footer) # 带页脚的布局组
│ │ └── layout.tsx # 根布局
├── components/ # React 组件
│ ├── home/ # 首页相关组件
│ └── page/ # 通用页面组件
├── messages/ # 多语言翻译文件
├── public/ # 静态资源
│ └── images/ # 图片资源
└── styles/ # 全局样式

## 核心功能

1. **首页内容**
   - Hero 区域展示游戏
   - 游戏特性介绍
   - 游戏玩法说明
   - 玩家评价展示
   - FAQ 常见问题

2. **导航功能**
   - 响应式导航菜单
   - 平滑滚动
   - 语言切换

3. **游戏集成**
   - 内嵌游戏框架
   - 安全沙箱配置
   - 全屏支持

## 开发指南

### 环境要求

- Node.js 18+
- npm 或 yarn

### 安装
bash
克隆项目
git clone https://github.com/yourusername/squidgamethanos.git
安装依赖
cd squidgamethanos
npm install
或
yarn install

### 开发命令
bash
开发环境运行
npm run dev
或
yarn dev
构建项目
npm run build
或
yarn build
生产环境运行
npm run start
或
yarn start

### 环境变量

创建 `.env.local` 文件并配置以下变量：
env
NEXT_PUBLIC_BASE_URL=your_base_url


## 国际化

项目使用 next-intl 进行国际化管理，支持以下语言：

- 英语 (en)
- 繁体中文 (tw)
- 日语 (jp)
- 西班牙语 (es)
- 法语 (fr)

翻译文件位于 `messages/` 目录下。

## 部署

项目可以部署到任何支持 Node.js 的平台：

- Vercel (推荐)
- Netlify
- 自托管服务器

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

[MIT License](LICENSE)

## 联系方式

- Website: [squidgamethanos.com](https://squidgamethanos.com)
- Email: support@squidgamethanos.com











