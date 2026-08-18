export const siteName = '源木家具'
export const siteNameEn = 'YUANMU FURNITURE'

export interface NavItem {
  label: string
  to: string
}

export const navItems: NavItem[] = [
  { label: '首页', to: '/' },
  { label: '产品', to: '/products' },
  { label: '工厂', to: '/factory' },
  { label: '定制', to: '/custom' },
  { label: '联系', to: '/contact' },
]

export type ProductCategory = '客厅' | '餐厅' | '卧室' | '书房'

export interface Product {
  id: number
  name: string
  category: ProductCategory
  material: string
  image: string
}

export const categories: ProductCategory[] = ['客厅', '餐厅', '卧室', '书房']

export const products: Product[] = [
  {
    id: 1,
    name: '云端 · 布艺三人沙发',
    category: '客厅',
    material: '北美白蜡木框架 · 高密海绵 · 进口绒布',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    name: '栖木 · 头层牛皮休闲椅',
    category: '客厅',
    material: '红橡木 · 头层牛皮 · 黄铜五金',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    name: '晨雾 · 实木双人床',
    category: '卧室',
    material: '北美黑胡桃 · 环保水性漆',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    name: '拾光 · 胡桃木餐桌',
    category: '餐厅',
    material: '北美黑胡桃 · 榫卯结构 · 木蜡油',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    name: '白石 · 组合电视柜',
    category: '客厅',
    material: '白蜡木 · 岩板台面 · 静音导轨',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    name: '墨境 · 实木书桌',
    category: '书房',
    material: '樱桃木 · 整板台面 · 黑钢桌腿',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    name: '琥珀 · 轻奢边几',
    category: '客厅',
    material: '黑胡桃木皮 · 黄铜包边',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    name: '夜航 · 转角沙发',
    category: '客厅',
    material: '白蜡木框架 · 磨砂布 · 羽绒填充',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 9,
    name: '拾忆 · 实木餐边柜',
    category: '餐厅',
    material: '北美黑胡桃 · 藤编门板 · 静音导轨',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 10,
    name: '南风 · 原木衣柜',
    category: '卧室',
    material: '白蜡木 · 通顶设计 · 环保水性漆',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 11,
    name: '栖心 · 梳妆台',
    category: '卧室',
    material: '樱桃木 · 皮质软包 · 黄铜五金',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 12,
    name: '砚台 · 整木书柜',
    category: '书房',
    material: '北美黑胡桃 · 玻璃柜门 · 隐藏灯带',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
]

export interface CategoryTile {
  title: string
  desc: string
  image: string
  to: string
  query: { category: string }
}

export const categoryTiles: CategoryTile[] = [
  {
    title: '客厅家具',
    desc: '沙发、茶几、电视柜，撑起家的会客气场。',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    to: '/products',
    query: { category: '客厅' },
  },
  {
    title: '餐厅家具',
    desc: '餐桌与餐椅，一日三餐的仪式感。',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1000&q=80',
    to: '/products',
    query: { category: '餐厅' },
  },
  {
    title: '卧室家具',
    desc: '床与衣柜，一夜安眠的根基。',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    to: '/products',
    query: { category: '卧室' },
  },
  {
    title: '书房家具',
    desc: '书桌与书柜，留一处安静思考。',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80',
    to: '/products',
    query: { category: '书房' },
  },
]

export interface PromiseItem {
  title: string
  desc: string
}

export const promises: PromiseItem[] = [
  { title: '准时交付', desc: '合同约定交期，逾期按日赔付。' },
  { title: '一年质保', desc: '结构件一年免费维修，终身提供配件。' },
  { title: '破损先行赔付', desc: '物流破损无需扯皮，先行补发再定责。' },
  { title: '终身维护', desc: '漆面翻新、五金更换，随时联系我们。' },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote: '交期准、品控稳，三年来我们的客房家具一直交给源木。',
    name: '陈先生',
    role: '锦瑟酒店 · 采购负责人',
  },
  {
    quote: '打样还原度很高，黑胡桃的纹理与色差控制都在预期内。',
    name: '林小姐',
    role: '北屿设计 · 主案设计师',
  },
  {
    quote: '从看样到收货只用了30天，源头价格确实有优势。',
    name: '王先生',
    role: '华东经销商',
  },
]

export const partners = ['锦瑟酒店', '澄舍家居', '北屿设计', 'MORI & CO', 'LUMEN 集团', '澜庭地产']

export const purchaseSteps: ProcessStep[] = [
  { step: '01', title: '看样询价', desc: '到厂看样或在线沟通，明确款式、材质与数量。' },
  { step: '02', title: '方案确认', desc: '确认尺寸、颜色与工艺，锁定报价单。' },
  { step: '03', title: '签订合同', desc: '预付定金排产，约定交期与验收标准。' },
  { step: '04', title: '生产质检', desc: '自有车间生产，关键工序留档，出厂全检。' },
  { step: '05', title: '物流交付', desc: '防震包装、送货上门，破损先行赔付。' },
]

export const productsFaq = [
  { q: '有起订量要求吗？', a: '零售一件起订，批发与工程订单可另议阶梯价。' },
  { q: '下单后多久交货？', a: '常规款15–25天；定制款以打样确认后约定的交期为准。' },
  { q: '支持打样吗？', a: '支持。批量订单可先打样确认，打样费在批量下单后退还。' },
  { q: '可以开票吗？', a: '可开具增值税普通发票或专用发票，随货提供质检报告。' },
]

export const workshopGallery = [
  { title: '恒温干燥窑', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1000&q=80' },
  { title: '数控开料车间', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80' },
  { title: '手工木作区', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80' },
  { title: '水性喷涂线', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80' },
]

export const equipment = [
  { title: '数控开料机', desc: '四轴加工，异形件一次成型，公差±0.5mm。' },
  { title: '四面刨与压刨', desc: '板材厚度统一，拼接严丝合缝。' },
  { title: '全自动砂光机', desc: '八道砂序，表面平整细腻。' },
  { title: '水性喷涂线', desc: '恒温恒湿喷涂房，漆面均匀环保。' },
  { title: '恒温干燥窑', desc: '自主控制含水率，木材更稳定。' },
  { title: '数字化质检台', desc: '尺寸、承重、漆面逐项留档。' },
]

export const ecoItems: PromiseItem[] = [
  { title: '木材溯源', desc: '原料来自 FSC 认证林场，从原木到成品全程可追溯。' },
  { title: '粉尘回收', desc: '车间中央除尘，边角废料制成生物质燃料再利用。' },
  { title: '低 VOC 涂装', desc: '全线使用水性漆与木蜡油，成品环保检测达标。' },
]

export interface CaseItem {
  tag: string
  title: string
  desc: string
  image: string
}

export const customCases: CaseItem[] = [
  {
    tag: '酒店工程',
    title: '锦瑟酒店 · 客房系列',
    desc: '220间客房整体配套，黑胡桃木家具加软包床头，45天交付。',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tag: '私宅全屋',
    title: '澄舍别墅 · 全屋定制',
    desc: '客餐厅、卧室、书房一站式定制，含楼梯扶手与护墙板。',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    tag: '设计师联名',
    title: '北屿设计 · 联名系列',
    desc: '与独立设计师联名开发单椅系列，小批量试产120件。',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1000&q=80',
  },
]

export const customFaq = [
  { q: '定制最短交期多久？', a: '小件定制20天起；全屋项目视图纸复杂度约45–60天。' },
  { q: '可以按图纸定制吗？', a: '可以。接受 CAD 图纸或实景照片，设计团队协助深化。' },
  { q: '打样怎么收费？', a: '常规样块免费；整件打样收取工本费，批量下单后返还。' },
  { q: '异地可以安装吗？', a: '支持全国配送，主要城市可安排师傅上门安装。' },
]

export const customPromises: PromiseItem[] = [
  { title: '交期承诺', desc: '合同约定交期，逾期按日赔付。' },
  { title: '一年质保', desc: '结构件一年免费维修，终身提供配件。' },
  { title: '专属顾问', desc: '从需求到交付，一位顾问跟进到底。' },
]

export const contactSteps: ProcessStep[] = [
  { step: '01', title: '在线咨询', desc: '提交表单或电话沟通，1个工作日内响应。' },
  { step: '02', title: '方案报价', desc: '按款式、材质与数量出具报价单。' },
  { step: '03', title: '打样确认', desc: '需要时先打样，确认后再签约。' },
  { step: '04', title: '签约交付', desc: '签订合同排产，质检后物流交付。' },
]

export const contactFaq = [
  { q: '可以到厂考察吗？', a: '欢迎。建议提前半天预约，专人带看车间与展厅。' },
  { q: '支持小批量批发吗？', a: '支持，一件起批，量大有阶梯价。' },
  { q: '发货到其他城市多久？', a: '珠三角2–3天，全国5–10天，大件送货上门。' },
  { q: '合作需要什么资质？', a: '经销商提供营业执照即可建档，工程客户另签框架协议。' },
]

export const projectTypes = [
  '住宅定制',
  '酒店 · 商业工程',
  '办公空间',
  '经销商 · 批发',
  '出口贸易',
  '其他',
]

export const quantityOptions = ['1–5件', '6–20件', '21–100件', '100件以上', '待定']

export const budgetOptions = ['5万以下', '5–10万', '10–30万', '30–100万', '100万以上', '待定']

export interface StatItem {
  value: string
  label: string
}

export const heroStats: StatItem[] = [
  { value: '18年', label: '出口制造经验' },
  { value: '3.8万㎡', label: '自有制造厂房' },
  { value: '56国', label: '产品出口国家' },
]

export const factoryStats: StatItem[] = [
  { value: '3.8万㎡', label: '自有厂房' },
  { value: '260+', label: '技术工匠' },
  { value: '18年', label: '制造经验' },
  { value: '56国', label: '出口国家' },
]

export interface ProcessStep {
  step: string
  title: string
  desc: string
}

export const factoryProcess: ProcessStep[] = [
  { step: '01', title: '原材甄选', desc: '北美、欧洲进口原木，含水率检测后分级入库，仅保留 A 级板材。' },
  { step: '02', title: '养生干燥', desc: '自然养生与平衡干燥并重，含水率稳定控制在 8%–12%。' },
  { step: '03', title: '精工开料', desc: '数控开料与手工拼接结合，木纹对花，公差严控在毫米级。' },
  { step: '04', title: '榫卯组装', desc: '传统榫卯与现代五金并用，结构稳固，历久弥新。' },
  { step: '05', title: '表面涂装', desc: '环保水性漆与木蜡油，多道打磨，保留木纹原有的温度。' },
  { step: '06', title: '全检包装', desc: '出厂前逐件检验，防震包装，物流直达，破损先行赔付。' },
]

export const customSteps: ProcessStep[] = [
  { step: '01', title: '需求沟通', desc: '了解空间用途、风格偏好与预算，明确项目范围与交付周期。' },
  { step: '02', title: '方案设计', desc: '提供设计图纸与实物样块，一对一定制专属方案。' },
  { step: '03', title: '打样确认', desc: '小样先行，尺寸、材质、工艺逐项确认后再批量投产。' },
  { step: '04', title: '生产制造', desc: '自有工厂排产，关键工序拍照留档，进度随时可查。' },
  { step: '05', title: '质检交付', desc: '全检打包、物流配送，提供一年质保与售后维护。' },
]

export interface QualityItem {
  title: string
  desc: string
}

export const qualityItems: QualityItem[] = [
  { title: '来料检验', desc: '每批原木与面料到厂即检，不合格批次一律退回。' },
  { title: '含水率控制', desc: '平衡干燥后逐板抽检，规避开裂变形等木材通病。' },
  { title: '环保涂装', desc: '全线使用环保水性漆，成品 VOC 检测达标。' },
  { title: '出厂全检', desc: '承重、滑轨、漆面逐项验收，合格后方可包装出库。' },
]

export interface CustomOption {
  title: string
  desc: string
}

export const customOptions: CustomOption[] = [
  { title: '原木材质', desc: '北美黑胡桃、白蜡木、红橡、樱桃木，均可提供实物样块。' },
  { title: '软包面料', desc: '头层牛皮、进口绒布、亚麻混纺，颜色与肤感可打样确认。' },
  { title: '五金配件', desc: '黄铜、黑钢、静音导轨与缓冲铰链，按需选配。' },
  { title: '尺寸涂装', desc: '按空间定制尺寸，漆色与开放 / 封闭漆面自由选择。' },
]

export const contact = {
  address: '广东省佛山市顺德区龙江镇工业大道88号',
  phone: '0757-2888 6666',
  phoneHref: 'tel:+8675728886666',
  email: 'sales@yuanmu-furniture.com',
  wechat: 'yuanmu-furniture',
  hours: '周一至周六 9:00–18:00',
}
