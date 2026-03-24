# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 admin management system based on [Fantastic-admin](https://fantastic-admin.github.io). It provides an out-of-the-box Vue3中后台管理系统框架 (Vue3 backend management system framework).

## Common Commands

```bash
pnpm dev              # Start development server (port 9005)
pnpm build           # Build for production
pnpm build:test      # Build for test environment
pnpm serve           # Serve production build
pnpm lint            # Run full lint (tsc + eslint + stylelint)
pnpm lint:tsc        # TypeScript type checking only
pnpm lint:eslint     # ESLint checking only
pnpm lint:stylelint  # Stylelint checking only
pnpm new             # Generate new components/pages/stores via plop
pnpm commit          # Commit with cz-git interactive prompt
pnpm release         # Bump version and create release
```

**Note**: This project uses pnpm as the package manager (enforced via `only-allow pnpm`).

## Architecture

### Routing
- **File-system routing**: Routes are auto-generated from `src/views/` using `vite-plugin-pages`
- Manual route configuration in `src/router/routes.ts`:
  - `constantRoutes`: Fixed routes (login, 404)
  - `systemRoutes`: System routes (root layout, reload)
  - `asyncRoutes`: Dynamic routes loaded based on permissions (defined in `src/router/modules/`)
- Route modules are organized in `src/router/modules/` (resource.ts, study.ts, review.ts)

### State Management (Pinia)
- Store index at `src/store/index.ts`
- Key stores in `src/store/modules/`:
  - `user.ts`: User authentication state
  - `settings.ts`: App settings and configuration
  - `menu.ts`: Menu navigation state
  - `route.ts`: Route history
  - `tabbar.ts`: Multi-tab navigation
  - `keepAlive.ts`: Page cache state

### API Layer
- Axios-based HTTP client with interceptors
- API modules in `src/api/modules/` (app.ts, user.ts, resource.ts, study.ts, review.ts)
- Request/response handling in `src/api/index.ts`

### UI Components
- Primary UI library: Element Plus
- Icons: Iconify (configured in `src/iconify/`)
- Custom components in `src/components/`
- Layout components in `src/layouts/`

### Configuration
- Environment files: `.env.development`, `.env.production`, `.env.test`
- App settings: `src/settings.ts` (user overrides) + `src/settings.default.ts` (defaults)
- Vite config: `vite.config.ts` with plugins in `vite/plugins/`

## Key Patterns

### Adding New Pages
1. Create Vue file in `src/views/` - file-system routing automatically generates routes
2. Configure route metadata (title, icon, permissions) in frontmatter
3. Add to menu via `src/store/modules/menu.ts` if needed

### Component Generation
Run `pnpm new` to interactively generate:
- New components in `src/components/`
- New pages in `src/views/`
- New stores in `src/store/modules/`
- New API modules in `src/api/modules/`

### API Requests
Import and use API functions from `src/api/modules/`:
```typescript
import { getUserInfo } from '@/api/modules/user'
```

## Development Notes

- Dev server runs on port 9005 (configured in vite.config.ts)
- Proxy configured for `/api` requests - rewrites to remove `/api` prefix
- Path aliases: `@` → `src/`, `#` → `src/types/`
- Global SCSS variables in `src/assets/styles/resources/`
- Pre-commit hooks run lint-staged via simple-git-hooks
