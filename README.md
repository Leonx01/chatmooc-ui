# ChatMOOC Frontend

ChatMOOC 前端项目 - 一个基于 AI 的在线学习平台，提供智能学习、资源管理和复习功能。

## 项目简介

ChatMOOC 是一个智能在线学习平台，结合了 AI 技术与现代教育需求。本项目是 ChatMOOC 的前端实现，基于 Vue 3 + TypeScript + Element Plus 构建。

## 技术栈

- **框架**: Vue 3 (Composition API)
- **语言**: TypeScript
- **UI 组件库**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router (文件系统自动路由)
- **构建工具**: Vite
- **样式**: SCSS + UnoCSS
- **HTTP 客户端**: Axios

## 功能模块

- **学习模块 (Study)**: 课程学习、章节管理、专注模式
- **资源模块 (Resource)**: 学习资源管理、文件预览
- **复习模块 (Review)**: 复习卡片、文件夹管理、AI 机器人助手

## 快速开始

### 环境要求

- Node.js: ^18.0.0 || ^20.0.0
- pnpm (强制使用)

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

开发服务器默认运行在 http://localhost:9005

### 构建

```bash
# 生产环境
pnpm build

# 测试环境
pnpm build:test
```

### 代码检查

```bash
pnpm lint           # 运行所有检查
pnpm lint:tsc       # TypeScript 类型检查
pnpm lint:eslint    # ESLint 检查
pnpm lint:stylelint # Stylelint 检查
```

## 项目结构

```
src/
├── api/           # API 接口定义
│   └── modules/   # 按模块组织的 API
├── assets/        # 静态资源
├── components/    # 公共组件
├── layouts/       # 布局组件
├── router/        # 路由配置
│   └── modules/   # 模块路由
├── store/         # Pinia 状态管理
│   └── modules/   # 状态模块
├── utils/         # 工具函数
└── views/         # 页面视图
    ├── resource/  # 资源模块
    ├── study/     # 学习模块
    └── review/    # 复习模块
```

## 配置说明

- `.env.development` - 开发环境配置
- `.env.production` - 生产环境配置
- `.env.test` - 测试环境配置
- `src/settings.ts` - 应用运行时配置

## 分支策略

- `main` - 主分支，稳定版本
- `feature/*` - 新功能开发分支
- `develop` - 开发分支

## 许可证

[MIT](LICENSE)

---

**注意**: 本项目基于 [Fantastic-admin](https://fantastic-admin.github.io) 框架开发。
