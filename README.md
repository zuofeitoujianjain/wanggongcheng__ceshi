# Project111 · 源木家具官网

基于 **Django 6 + Vue 3** 前后端分离的家具源头工厂企业官网。前台由 Vue 3 构建，采用高端轻奢风格（白底、鎏金点缀、楷体排版）；后台使用 Django + SimpleUI 中文管理界面；联系/定制表单数据写入 SQLite，可在后台直接查看。

## 功能特性

- 五个独立根页面：首页、产品中心、走进工厂、高端定制、联系我们
- 产品分类筛选，图片点击放大预览（Element Plus）
- 联系表单（8 字段）与定制表单，提交后数据入库
- SimpleUI 中文后台，自定义"联系表单"一级/二级菜单
- 一键启动开发环境（`start.ps1` / `start.bat`）
- 单端口模式：Django 直接托管构建后的 Vue 产物

## 技术栈

| 端 | 技术 |
| --- | --- |
| 前端 | Vue 3 · TypeScript · Vite · Element Plus · SCSS · vue-router@4 · Pinia |
| 后端 | Python 3.13 · Django 6.1 · SQLite |
| 后台 | django-simpleui（中文） |

## 目录结构

```text
project111/
├── manage.py              # Django 入口
├── start.ps1 / start.bat  # 一键启动开发环境
├── project111/            # Django 项目配置（settings / urls）
├── core/                  # Django 应用（联系表单模型与 API）
├── frontend/              # Vue 3 前台
│   ├── src/views/         # 五个根页面
│   ├── src/components/    # 布局与复用组件
│   ├── src/data/          # 站点内容数据
│   └── src/styles/        # 全局 SCSS 设计令牌
├── requirements.txt       # Python 依赖
├── AGENTS.md              # 仓库开发约定
└── README.md
```

## 快速开始

环境要求：Python 3.13+、Node.js 22+。

### 1. 克隆并安装后端

```powershell
git clone <仓库地址> project111
cd project111
python -m venv .venv
.\.venv\Scripts\Activate.ps1      # macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate          # 自动创建数据库表（含 contract 表单表）
python manage.py createsuperuser  # 创建后台管理员
```

### 2. 安装并启动前端

```powershell
cd frontend
npm install
npm run dev                       # http://127.0.0.1:5173
```

### 3. 启动后端

```powershell
cd ..
python manage.py runserver        # http://127.0.0.1:8000
```

### 一键启动

双击 `start.bat`，或在 PowerShell 执行 `.\start.ps1`，会同时启动前后端（Ctrl+C 一起停止）。

## 常用命令

后端（激活虚拟环境后）：

```powershell
python manage.py check              # 系统自检
python manage.py makemigrations     # 生成迁移
python manage.py migrate            # 应用迁移
python manage.py createsuperuser    # 创建管理员
```

前端（`frontend/` 目录）：

```powershell
npm run dev          # 开发服务器
npm run build        # 类型检查 + 生产构建
npm run type-check   # vue-tsc 类型检查
npm run lint         # 代码规范检查
```

## 数据与后台

- 联系/定制表单数据表：`contract`（模型 `ContactMessage`，迁移文件见 `core/migrations/`）
- 后台查看：登录 `http://127.0.0.1:8000/admin/` → 联系表单 → 表单数据
- `db.sqlite3` 不纳入版本控制，克隆后执行 `migrate` 自动建表

## 环境变量（可选）

生产部署可通过环境变量覆盖默认配置（不设置则使用开发默认值）：

| 变量 | 说明 | 默认值 |
| --- | --- | --- |
| `DJANGO_SECRET_KEY` | Django 密钥 | 开发用占位密钥 |
| `DJANGO_DEBUG` | 是否开启调试 | `True` |
| `DJANGO_ALLOWED_HOSTS` | 允许的域名（逗号分隔） | `localhost,127.0.0.1` |

## 生产部署（单端口）

```powershell
cd frontend
npm run build
cd ..
python manage.py runserver
```

此时 `http://127.0.0.1:8000/` 直接提供 Vue 前台，`/admin` 与 `/api/*` 由 Django 处理。正式上线建议使用 Nginx 反向代理，并配置 `STATIC_ROOT` 后执行 `collectstatic`。
