# 🎓 ChatMOOC 用户端

> 一个基于 AI 的智能在线学习平台前端应用，结合现代教育需求与先进技术栈

[![Node.js](https://img.shields.io/badge/Node.js-^18.0.0%20%7C%7C%20^20.0.0-green)](https://nodejs.org)
[![Vue](https://img.shields.io/badge/Vue-3.4.21-4FC08D?logo=vuedotjs)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.3-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.2.7-646CFF?logo=vite)](https://vitejs.dev)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

## 📋 项目简介

ChatMOOC 是一个智能在线学习平台，通过整合 AI 技术与现代化的教育理念，为学生提供个性化的学习体验。本项目是 ChatMOOC 的前端实现，采用最新的 Web 技术栈，确保高性能、可维护性和最佳用户体验。

### 🎯 核心特性

- 🤖 **AI 驱动** - 集成智能学习助手，提供个性化学习建议
- 📚 **完整课程体系** - 课程学习、章节管理、进度跟踪
- 🎯 **智能复习** - 基于艾宾浩斯遗忘曲线的复习卡片系统
- 📦 **资源管理** - 统一的学习资源管理和文件预览
- 🎨 **现代界面** - 响应式设计，支持深色模式
- ⚡ **高性能** - 优化的加载速度和运行效率
- 🔐 **安全可靠** - 完善的权限管理和数据保护

---

## 🛠️ 技术栈详解

### 核心框架与库

| 技术 | 版本 | 用途 | 官方链接 |
|------|------|------|--------|
| **Vue** | ^3.4.21 | 渐进式 JavaScript 框架 | [vue.org](https://vuejs.org) |
| **TypeScript** | ^5.4.3 | 类型安全的 JavaScript 超集 | [typescriptlang.org](https://www.typescriptlang.org) |
| **Vite** | ^5.2.7 | 极速前端构建工具 | [vitejs.dev](https://vitejs.dev) |
| **Element Plus** | ^2.6.3 | Vue 3 企业级 UI 组件库 | [element-plus.org](https://element-plus.org) |
| **Pinia** | ^2.1.7 | 下一代状态管理库 | [pinia.vuejs.org](https://pinia.vuejs.org) |
| **Vue Router** | ^4.3.0 | 官方路由管理器 | [router.vuejs.org](https://router.vuejs.org) |

### 开发工具与构建优化

| 工具 | 版本 | 说明 |
|------|------|------|
| **UnoCSS** | ^0.58.8 | 原子化 CSS 引擎，快速样式开发 |
| **Sass** | ^1.72.0 | CSS 预处理器 |
| **PostCSS** | 最新 | CSS 转换工具 |
| **ESLint** | ^8.57.0 | 代码质量检查 |
| **Stylelint** | ^16.3.1 | 样式规范检查 |
| **TypeScript** | ^5.4.3 | 静态类型检查 |

### HTTP 与数据

| 库 | 版本 | 用途 |
|----|------|------|
| **Axios** | ^1.6.8 | HTTP 客户端库 |
| **Day.js** | ^1.11.10 | 轻量级日期库 |
| **Lodash-es** | ^4.17.21 | 实用工具函数库 |
| **Qs** | ^6.12.0 | 查询字符串序列化库 |

### UI 与交互

| 库 | 版本 | 功能 |
|----|------|------|
| **@Headlessui/Vue** | ^1.7.19 | 无样式 UI 组件 |
| **Floating-vue** | 5.2.2 | Tooltip 和 Popover |
| **@imengyu/Vue3-Context-Menu** | ^1.3.9 | 右键菜单 |
| **Hotkeys-js** | ^3.13.7 | 快捷键管理 |
| **NPProgress** | ^0.2.0 | 页面加载进度条 |
| **OverlayScrollbars** | ^2.6.1 | 自定义滚动条 |

### 图标与资源

| 库 | 版本 | 说明 |
|----|------|------|
| **@Iconify/Vue** | ^4.1.1 | 图标集成方案 |
| **Vite-plugin-svg-icons** | ^2.0.1 | SVG 图标管理 |

### 开发辅助

| 工具 | 版本 | 用途 |
|------|------|------|
| **Plop** | ^4.0.1 | 代码生成工具 |
| **Unplugin-vue-components** | ^0.26.0 | 自动导入组件 |
| **Unplugin-auto-import** | ^0.17.5 | 自动导入 API |
| **Vite-plugin-pages** | ^0.32.1 | 文件系统路由 |
| **Vite-plugin-vue-devtools** | ^7.0.25 | Vue DevTools 集成 |
| **Simple-git-hooks** | ^2.11.1 | Git hooks 管理 |
| **Lint-staged** | ^15.2.2 | 暂存区文件检查 |

### 调试与测试

| 工具 | 说明 |
|------|------|
| **VConsole** | 移动端调试工具 |
| **Eruda** | 浏览器控制台 |
| **MockJS** | 数据模拟 |
| **Vite-plugin-fake-server** | 虚拟服务器 |

---

## 📁 项目结构

```
chatmooc-ui/
├── src/
│   ├── api/                    # API 接口层
│   │   └── modules/            # 模块化 API
│   │       ├── study.ts        # 学习模块 API
│   │       ├── resource.ts     # 资源模块 API
│   │       └── review.ts       # 复习模块 API
│   │
│   ├── assets/                 # 静态资源
│   │   ├── icons/              # SVG 图标
│   │   ├── images/             # 图片资源
│   │   └── styles/             # 全局样式
│   │
│   ├── components/             # 通用组件
│   │   ├── common/             # 公共组件
│   │   │   ├── Header.vue
│   │   │   ├── Sidebar.vue
│   │   │   └── Footer.vue
│   │   └── business/           # 业务组件
│   │
│   ├── layouts/                # 布局组件
│   │   ├── DefaultLayout.vue
│   │   └── BlankLayout.vue
│   │
│   ├── router/                 # 路由配置
│   │   ├── index.ts
│   │   ├── modules/
│   │   │   ├── study.ts        # 学习路由
│   │   │   ├── resource.ts     # 资源路由
│   │   │   └── review.ts       # 复习路由
│   │   └── guard.ts            # 路由守卫
│   │
│   ├── store/                  # Pinia 状态管理
│   │   ├── index.ts
│   │   └── modules/
│   │       ├── app.ts          # 应用状态
│   │       ├── user.ts         # 用户状态
│   │       ├── study.ts        # 学习状态
│   │       └── ui.ts           # UI 状态
│   │
│   ├── utils/                  # 工具函数
│   │   ├── http.ts             # HTTP 请求封装
│   │   ├── storage.ts          # 本地存储
│   │   ├── validate.ts         # 数据验证
│   │   └── helpers.ts          # 辅助函数
│   │
│   ├── views/                  # 页面视图
│   │   ├── study/              # 学习模块
│   │   │   ├── index.vue
│   │   │   ├── course.vue
│   │   │   └── chapter.vue
│   │   ├── resource/           # 资源模块
│   │   │   ├── index.vue
│   │   │   └── preview.vue
│   │   ├── review/             # 复习模块
│   │   │   ├── index.vue
│   │   │   ├── cards.vue
│   │   │   └── ai-helper.vue
│   │   └── auth/               # 认证页面
│   │       ├── login.vue
│   │       └── register.vue
│   │
│   ├── settings.ts             # 运行时配置
│   ├── main.ts                 # 应用入口
│   └── App.vue                 # 根组件
│
├── public/                     # 公共静态资源
├── scripts/                    # 构建和工具脚本
│   ├── generate.icons.ts       # 图标生成脚本
│   └── build.ts                # 构建脚本
│
├── plop-templates/             # Plop 代码生成模板
│   ├── component.hbs
│   ├── view.hbs
│   └── api.hbs
│
├── vite/                       # Vite 插件配置
├── themes/                     # 主题配置
├── .github/                    # GitHub 配置
│   └── workflows/              # CI/CD 工作流
│
├── .vscode/                    # VSCode 配置
├── Configuration Files
│   ├── vite.config.ts          # Vite 配置
│   ├── tsconfig.json           # TypeScript 配置
│   ├── uno.config.ts           # UnoCSS 配置
│   ├── eslint.config.js        # ESLint 配置
│   ├── stylelint.config.js     # Stylelint 配置
│   ├── postcss.config.js       # PostCSS 配置
│   ├── .commitlintrc.js        # 提交规范配置
│   ├── .lintstagedrc           # 暂存区检查配置
│   ├── .npmrc                  # NPM 配置
│   ├── .editorconfig           # 编辑器配置
│   └── .gitignore              # Git 忽略文件
│
├── Environment Files
│   ├── .env.development        # 开发环境
│   ├── .env.production         # 生产环境
│   └── .env.test               # 测试环境
│
├── .pnpmfile.cjs              # PNPM 配置
├── pnpm-lock.yaml             # 依赖锁定文件
├── package.json               # 项目配置
├── README.md                  # 项目文档
├── LICENSE                    # 许可证
└── CLAUDE.md                  # AI 协议文档
```

---

## 🚀 快速开始

### 📦 环境要求

- **Node.js**: `^18.0.0` 或 `^20.0.0`
- **包管理工具**: `pnpm` (必须，已在 package.json 中强制)
- **操作系统**: Windows / macOS / Linux

### ⚙️ 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/Leonx01/chatmooc-ui.git
cd chatmooc-ui
```

#### 2. 安装依赖

```bash
pnpm install
```

#### 3. 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:9005` 运行

### 🏗️ 构建部署

#### 生产环境构建

```bash
pnpm build
```

输出目录: `dist/`

#### 测试环境构建

```bash
pnpm build:test
```

输出目录: `dist-test/`

#### 本地预览构建结果

```bash
# 生产环境预览
pnpm serve

# 测试环境预览
pnpm serve:test
```

---

## 🔍 代码质量

### 代码检查命令

```bash
# 运行所有检查（推荐）
pnpm lint

# TypeScript 类型检查
pnpm lint:tsc

# ESLint 代码检查和修复
pnpm lint:eslint

# Stylelint 样式检查和修复
pnpm lint:stylelint
```

### 代码规范

- **JavaScript/TypeScript**: [Antfu ESLint Config](https://github.com/antfu/eslint-config)
- **样式**: SCSS + UnoCSS 原子化 CSS
- **提交规范**: [Conventional Commits](https://www.conventionalcommits.org)
- **Git Hooks**: Husky + Lint-staged

### 提交规范

```bash
# 使用规范化的提交
pnpm commit

# 或使用 Git Cz
git cz
```

提交格式: `<type>(<scope>): <subject>`

---

## 🛠️ 开发指南

### 生成新组件

```bash
# 使用 Plop 生成新组件（交互式）
pnpm new
```

### 导入配置

项目使用 `unplugin-auto-import` 和 `unplugin-vue-components` 自动导入常用 API 和组件，无需手动 import。

### 路由系统

- 使用 `vite-plugin-pages` 自动生成路由
- 在 `src/views` 中创建 `.vue` 文件会自动成为路由页面
- 在 `src/router/modules` 中定义模块路由

### API 请求

```typescript
// src/api/modules/study.ts
import { request } from '@/utils/http'

export const getCourse = (id: string) => {
  return request.get(`/course/${id}`)
}
```

### 状态管理

```typescript
// src/store/modules/study.ts
import { defineStore } from 'pinia'

export const useStudyStore = defineStore('study', () => {
  // 定义状态、方法等
})
```

### 样式开发

- **全局样式**: `src/assets/styles/`
- **UnoCSS**: 原子化 CSS 工具类
- **Sass**: 组件级样式

```vue
<style lang="scss" scoped>
.component {
  // Sass 嵌套语法
  &:hover {
    color: var(--primary-color);
  }
}
</style>
```

---

## ⚙️ 环境配置

项目支持多环境配置：

### 开发环境 (`.env.development`)
```
VITE_APP_TITLE=ChatMOOC
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_ENV=development
```

### 生产环境 (`.env.production`)
```
VITE_APP_TITLE=ChatMOOC
VITE_API_BASE_URL=https://api.chatmooc.com
VITE_APP_ENV=production
```

### 测试环境 (`.env.test`)
```
VITE_APP_TITLE=ChatMOOC Test
VITE_API_BASE_URL=https://test-api.chatmooc.com
VITE_APP_ENV=test
```

### 运行时配置

详见 `src/settings.ts`

---

## 📚 模块说明

### 📖 学习模块 (Study)

- 课程列表和详情
- 章节管理和学习
- 进度跟踪
- 专注模式

### 🎁 资源模块 (Resource)

- 学习资源上传和管理
- 文件预览
- 资源分类
- 下载管理

### 📝 复习模块 (Review)

- 复习卡片系统
- 文件夹管理
- AI 机器人助手
- 学习统计

---

## 🔄 分支管理

```
main          ← 生产分支（稳定版本）
├── develop   ← 开发分支
└── feature/* ← 功能分支（feature/xxx）
```

### 工作流程

1. 从 `develop` 分支创建 `feature/xxx` 分支
2. 完成开发并通过代码审查
3. 合并回 `develop` 分支
4. 定期从 `develop` 合并到 `main` 发布版本

---

## 📖 相关资源

- [Vue 3 文档](https://vuejs.org)
- [TypeScript 文档](https://www.typescriptlang.org)
- [Vite 文档](https://vitejs.dev)
- [Element Plus 文档](https://element-plus.org)
- [Pinia 文档](https://pinia.vuejs.org)
- [UnoCSS 文档](https://uno.antfu.me)

---

## 🤝 贡献指南

我们欢迎所有贡献！请按以下步骤进行：

1. **Fork** 本仓库
2. **创建** 功能分支 (`git checkout -b feature/AmazingFeature`)
3. **提交** 更改 (`git commit -m 'Add some AmazingFeature'`)
4. **推送** 到分支 (`git push origin feature/AmazingFeature`)
5. **提交** Pull Request

### 提交要求

- ✅ 通过所有代码检查 (`pnpm lint`)
- ✅ 遵循提交规范
- ✅ 提供清晰的 PR 描述

---

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证

---

## 🙏 致谢

- 本项目基于 [Fantastic-admin](https://fantastic-admin.github.io) 框架开发
- 感谢所有贡献者的支持

---

<div align="center">

**⭐ 如果觉得有帮助，请给个 Star！**

Made with ❤️ by Leonx01

</div>
