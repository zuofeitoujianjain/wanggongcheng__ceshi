# AGENTS.md

本文件为在 `project111` 仓库中工作的 AI Agent 与开发者提供项目上下文、常用命令和编码约定。

## 项目概述

Django 6 + Vue 3 前后端分离项目，前台由 Vue 接管，Django 提供数据接口与 SimpleUI 中文管理后台。

- 后端：Python 3.13（虚拟环境 `.venv`）+ Django 6.1 + SQLite
- 前端：Vue 3 + TypeScript + Vite + Element Plus + SCSS + vue-router@4 + Pinia
- 管理后台：django-simpleui（中文界面）

## 快速启动

开发模式（推荐，一键同时启动前后端）：

```powershell
.\start.ps1
```

或双击 `start.bat`。启动后：

- 前台（Vite 热更新）：http://127.0.0.1:5173
- 后台（Django + SimpleUI）：http://127.0.0.1:8000/admin
- API：http://127.0.0.1:8000/api/

按 Ctrl+C 同时停止两个服务。

单端口模式（Django 直接托管构建后的 Vue 前台）：

```powershell
cd frontend
npm run build
cd ..
.\.venv\Scripts\Activate.ps1
python manage.py runserver
```

此时 http://127.0.0.1:8000/ 即为 Vue 前台。

## 架构与端口

| 服务 | 端口 | 说明 |
| --- | --- | --- |
| Django 后端 | 8000 | `/admin` 管理后台、`/api/*` 接口；单端口模式下托管前端构建产物与 SPA 路由 |
| Vue 开发服务器 | 5173 | 热更新开发服务器，`/api` 前缀由 Vite 代理转发到 8000 |

## 项目结构

```text
project111/
├── manage.py              # Django 入口
├── start.ps1 / start.bat  # 一键启动脚本
├── README.md
├── AGENTS.md
├── project111/            # Django 项目配置
│   ├── settings.py        # simpleui、zh-hans、Asia/Shanghai、FRONTEND_DIST_DIR、SIMPLEUI_CONFIG
│   └── urls.py            # /admin、/api、单端口 SPA 兜底
├── core/                  # Django 应用（API 与页面视图）
│   ├── models.py          # ContactMessage（contract 表）
│   ├── views.py           # hello、contact_submit 接口、frontend_index 视图
│   └── urls.py            # /api/hello/、/api/contact/
├── frontend/              # Vue 3 前台
│   ├── vite.config.ts     # @ 别名、/api 代理、Element Plus 按需导入
│   ├── src/
│   │   ├── App.vue        # 根组件（el-config-provider 中文环境）
│   │   ├── main.ts
│   │   ├── data/          # site.ts 站点内容数据
│   │   ├── views/         # Home、Products、Factory、Custom、Contact
│   │   ├── components/    # AppHeader、AppFooter、PageHero、SectionTitle、ProductCard
│   │   ├── router/        # 路由配置
│   │   └── styles/        # 全局 SCSS（variables、utilities、element、reset）
│   └── dist/              # 生产构建产物
└── .venv/                 # Python 虚拟环境
```

## 常用命令

后端（需先激活虚拟环境或使用 `.\.venv\Scripts\python.exe`）：

```powershell
python manage.py check                 # 系统自检
python manage.py makemigrations        # 生成迁移
python manage.py migrate               # 应用迁移
python manage.py createsuperuser       # 创建管理员
python manage.py runserver             # 启动开发服务器
```

前端（在 `frontend/` 目录）：

```powershell
npm run dev          # 开发服务器
npm run build        # 类型检查 + 生产构建
npm run type-check   # vue-tsc 类型检查
npm run lint         # oxlint + eslint
npm run format       # prettier 格式化
```

## 开发约定

### Django

- 新增业务接口统一挂载在 `/api/` 前缀下；路由在 `core/urls.py`（或新建应用的 urls）中定义，并由 `project111/urls.py` 的 `include('core.urls')` 接入。
- 新建应用后必须在 `project111/settings.py` 的 `INSTALLED_APPS` 注册。
- 修改模型后必须执行 `makemigrations` + `migrate`。
- 已配置中文：`LANGUAGE_CODE = 'zh-hans'`、`TIME_ZONE = 'Asia/Shanghai'`。
- 单端口 SPA 兜底位于 `project111/urls.py` 的 `if settings.DEBUG:` 块内，新增顶级路径时注意避开 `admin`、`api`、`assets`、`favicon`、`static` 前缀，否则会被前端兜底拦截。
- 开发环境 `DEBUG = True`、`SECRET_KEY` 为脚手架默认值；生产部署必须更换密钥并关闭 DEBUG。

### Vue 前端

- 强制使用 Composition API + `<script setup lang="ts">`。
- 目录约定：页面放 `src/views/`，可复用组件放 `src/components/`，组合式函数放 `src/composables/useXxx.ts`，状态放 Pinia store，路由配置集中在 `src/router/`。
- 样式统一使用 SCSS：组件内 `<style scoped lang="scss">`，全局样式放 `src/styles/`；使用 `@use`，不用已废弃的 `@import`。
- 路径别名 `@` 指向 `src`（`vite.config.ts` 与 `tsconfig.app.json` 已同步配置）。
- Element Plus 采用按需自动导入（`unplugin-auto-import` + `unplugin-vue-components`），不要在 `main.ts` 中 `app.use(ElementPlus)`；模板中直接使用 `el-*` 组件。
- 中文环境由 `App.vue` 的 `<el-config-provider :locale="zhCn">` 提供。
- 前端请求后端统一走 `/api` 前缀，开发环境由 Vite 代理到 Django；基础地址使用 `import.meta.env.VITE_API_BASE`（见 `.env.development`）。
- 新增/修改前端代码后若涉及构建产物，需执行 `npm run build` 使单端口模式生效。

## 注意事项

- `start.ps1` 必须保持 UTF-8 带 BOM 编码，否则 Windows PowerShell 5.1 会解析失败。
- Vite 开发服务器固定绑定 `127.0.0.1`（`vite.config.ts` 的 `server.host`），不要随意移除。
- 当前 Node 为 22.17，脚手架 engines 要求 `^22.18.0 || >=24.12.0`，仅产生警告；如需升级工具链先确认 Vite/TypeScript 兼容性。
- npm 源已配置为国内镜像 `https://registry.npmmirror.com`。
- `db.sqlite3` 包含开发用超级管理员（zuofei），仅限本地开发。
- 运行产物（`.venv/`、`node_modules/`、`frontend/dist/`、`*.log`、`db.sqlite3`、`.eslintcache`、`frontend/auto-imports.d.ts`、`frontend/components.d.ts`）已由根目录 `.gitignore` 排除；仓库已初始化为 git（`main` 分支）。
