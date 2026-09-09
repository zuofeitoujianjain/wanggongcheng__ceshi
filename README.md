# 源木家具官网 · 家具源头工厂企业网站

一个前后端分离的**企业官网全栈项目**，前端 Vue 3，后端 Django，面向“家具源头工厂”业务场景，整体走**高端轻奢**视觉路线（白底、鎏金点缀、楷体排版），管理后台可直接查看访客提交的表单数据。

---

## 页面展示

<div align="center">
  <img src="docs/screenshots/home.png" alt="首页" width="720"/>

  <br/>
  <sub><b>① 首页</b>：品牌主视觉、核心品类导览、精选产品、工厂实力、服务承诺、客户声音</sub>
</div>

<div align="center">
  <img src="docs/screenshots/products.png" alt="产品中心" width="720"/>
  <br/>
  <sub><b>② 产品中心</b>：客厅 / 餐厅 / 卧室 / 书房分类筛选，12 款产品，图片点击放大预览</sub>
</div>

<div align="center">
  <img src="docs/screenshots/factory.png" alt="走进工厂" width="720"/>
  <br/>
  <sub><b>③ 走进工厂</b>：制造实力、车间实景、六道工艺流程、设备产线、环保责任、认证资质</sub>
</div>

<div align="center">
  <img src="docs/screenshots/custom.png" alt="高端定制" width="720"/>
  <br/>
  <sub><b>④ 高端定制</b>：五步定制流程、案例展示、可选配置、可提交的定制需求表单</sub>
</div>

<div align="center">
  <img src="docs/screenshots/contact.png" alt="联系我们" width="720"/>
  <br/>
  <sub><b>⑤ 联系我们</b>：合作流程、8 字段留言表单（联系人 / 电话 / 公司 / 项目类型 / 数量 / 城市 / 预算 / 需求），提交后后台可查</sub>
</div>

---

## 功能特性

**前端（Vue 3）**

- 五个独立根页面：`/`、`/products`、`/factory`、`/custom`、`/contact`，各自拥有独立路由与页面标题
- 产品分类筛选、图片懒加载与点击放大预览（Element Plus `el-image`）
- 联系/定制表单：字段校验 + 真实提交 + 成功/失败提示
- 高端轻奢设计系统：SCSS 设计令牌（墨檀 / 云砂 / 鎏金）、衬线标题排版、白底卡片、无冗余圆角
- 全站楷体排版、页面切换过渡、返回顶部按钮，尊重系统“减少动态效果”设置

**后端（Django 6）**

- 表单数据接口 `POST /api/contact/`，留言存入 SQLite `contract` 表（`ContactMessage` 模型 + 迁移）
- SimpleUI 中文管理后台，自定义“联系表单 → 表单数据”菜单，列表可按项目类型筛选、搜索
- 单端口模式：Django 直接托管构建后的 Vue 产物，SPA 路由兜底
- 关键配置支持环境变量覆盖（密钥 / 调试开关 / 允许域名）

## 技术栈

| 端 | 技术 |
| --- | --- |
| 前端 | Vue 3 · TypeScript · Vite · Element Plus · SCSS · vue-router@4 · Pinia |
| 后端 | Python 3.13 · Django 6.1 · Django SimpleUI · SQLite |
| 工程 | Git · npm · pip · PowerShell 一键启动脚本 |

## 本地运行

环境要求：Python 3.13+、Node.js 22+。

```powershell
# 1. 后端依赖与建表
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser

# 2. 前端依赖
cd frontend
npm install

# 3. 一键启动（回到项目根目录后）
cd ..
.\start.ps1
```

启动后：

- 前台：http://127.0.0.1:5173
- 后台：http://127.0.0.1:8000/admin（SimpleUI，登录后可在“联系表单”查看访客提交）
- API：http://127.0.0.1:8000/api/contact/

## 目录结构

```text
project111/
├── manage.py                  # Django 入口
├── start.ps1 / start.bat      # 一键启动（Django + Vite 同时运行）
├── project111/                # Django 配置：路由、SimpleUI 菜单、SPA 托管
├── core/                      # Django 应用：ContactMessage 模型、/api 视图
├── frontend/                  # Vue 3 前台
│   ├── src/views/             # 五个根页面
│   ├── src/components/        # 布局与复用组件
│   ├── src/data/              # 站点内容数据（产品、流程、FAQ）
│   └── src/styles/            # 全局 SCSS 设计令牌
├── docs/screenshots/          # 本 README 使用的页面截图
└── requirements.txt
```

## 备注

- 截图中的产品与空间图片来自 [Unsplash](https://unsplash.com) 图库（仅作演示素材），生产使用请替换为真实产品图
- `db.sqlite3` 不纳入版本控制，克隆后执行 `python manage.py migrate` 自动建表
- 本项目为个人全栈练习作品，用于展示前后端集成、后台管理系统与企业官网视觉实现
