<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { categoryTiles, heroStats, partners, promises, products, testimonials } from '@/data/site'

const featured = products.slice(0, 4)

const advantages = [
  { title: '自有工厂', desc: '3.8万㎡制造基地，从源头把控成本与品质。' },
  { title: '源头价格', desc: '省去中间环节，工厂直供，一件也享出厂价。' },
  { title: '出口品控', desc: '沿用出口标准检验，细节经得起放大镜审视。' },
  { title: '柔性定制', desc: '支持尺寸、材质、颜色定制，承接 OEM / ODM。' },
]

const heroImage =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85'
const brandImage =
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80'
const customImage =
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80'
</script>

<template>
  <div class="home">
    <section class="home-hero">
      <img class="home-hero__image" :src="heroImage" alt="源木家具客厅场景" />
      <div class="home-hero__veil" />

      <div class="container home-hero__inner">
        <span class="seal home-hero__seal">木</span>
        <p class="home-hero__kicker">YUANMU FURNITURE · 家具源头工厂</p>
        <h1 class="home-hero__title">
          以木为源<br />
          造传世之器
        </h1>
        <p class="home-hero__subtitle">
          从北美森林到您的客厅，二十年实木家具制造经验，自有工厂直供，每一件家具都经得起时间审视。
        </p>
        <div class="home-hero__actions">
          <RouterLink class="btn btn--light" to="/products">探索产品</RouterLink>
          <RouterLink class="btn" to="/factory">走进工厂</RouterLink>
        </div>
      </div>

      <div class="home-hero__stats">
        <div class="container home-hero__stats-inner">
          <div v-for="stat in heroStats" :key="stat.label" class="home-hero__stat">
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="核心品类 · CATEGORIES"
          title="四大品类，覆盖全屋"
          description="按空间挑选家具，也支持跨品类整体配套，一次到厂全部看齐。"
        />

        <div class="home-categories">
          <RouterLink
            v-for="tile in categoryTiles"
            :key="tile.title"
            :to="{ path: tile.to, query: tile.query }"
            class="home-category"
          >
            <div class="home-category__media">
              <el-image
                class="home-category__image"
                :src="tile.image"
                :alt="tile.title"
                :preview-src-list="[tile.image]"
                preview-teleported
                hide-on-click-modal
                fit="cover"
                loading="lazy"
              />
            </div>
            <div class="home-category__body">
              <h3>{{ tile.title }}</h3>
              <p>{{ tile.desc }}</p>
              <span>进入分类</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container home-brand">
        <div class="home-brand__media">
          <img :src="brandImage" alt="源木家具实木沙发" loading="lazy" />
          <div class="home-brand__badge">
            <strong>20年</strong>
            <span>实木家具制造</span>
          </div>
        </div>

        <div class="home-brand__content">
          <SectionTitle
            kicker="关于源木 · ABOUT"
            title="一木一器，皆出于心"
            description="源木家具创立于佛山家具产业带，二十年专注实木家具的设计与制造。我们坚持自有工厂、自有品控，把每一块木材的纹理、每一道榫卯的咬合，当作对家的承诺。"
          />
          <ul class="home-brand__list">
            <li><span>自有工厂</span>从开料、组装到涂装全流程自主完成</li>
            <li><span>源头直供</span>去除中间商差价，出厂价直达客户</li>
            <li><span>柔性定制</span>尺寸、材质、颜色自由选择，支持 OEM / ODM</li>
          </ul>
          <RouterLink class="btn btn--solid" to="/factory">了解工厂实力</RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="精选系列 · COLLECTION"
          title="匠心之作，四季常伴"
          description="从沙发到书桌，每一件都出自自有车间，源头价格直供，欢迎到厂看样。"
        />

        <div class="home-products">
          <ProductCard v-for="product in featured" :key="product.id" :product="product" />
        </div>

        <div class="home-products__more">
          <RouterLink class="btn" to="/products">查看全部产品</RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="服务保障 · SERVICE"
          title="承诺写进合同里"
          description="对交期、品质与售后的要求，我们都以书面形式作出承诺。"
        />

        <div class="home-promises">
          <div v-for="item in promises" :key="item.title" class="home-promise">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ink">
      <div class="container">
        <SectionTitle
          align="center"
          tone="dark"
          kicker="源头实力 · WHY YUANMU"
          title="为什么选择源木"
          description="二十年的出口制造沉淀，让「源头工厂」这四个字经得起逐项检验。"
        />

        <div class="home-advantages">
          <div v-for="item in advantages" :key="item.title" class="home-advantages__item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container home-custom">
        <div class="home-custom__content">
          <SectionTitle
            kicker="高端定制 · BESPOKE"
            title="让空间，贴合您的想象"
            description="无论是酒店工程、设计师项目，还是自己的家，我们都提供从图纸到打样的一站式定制服务。"
          />
          <RouterLink class="btn btn--solid" to="/custom">提交定制需求</RouterLink>
        </div>
        <div class="home-custom__media">
          <img :src="customImage" alt="源木家具定制空间" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="客户声音 · CLIENTS"
          title="他们把项目交给源木"
          description="酒店、设计师与经销商的长期选择，是我们最好的名片。"
        />

        <div class="home-testimonials">
          <figure v-for="item in testimonials" :key="item.name" class="home-testimonial">
            <blockquote>{{ item.quote }}</blockquote>
            <figcaption>
              <strong>{{ item.name }}</strong>
              <span>{{ item.role }}</span>
            </figcaption>
          </figure>
        </div>

        <div class="home-partners">
          <span v-for="partner in partners" :key="partner">{{ partner }}</span>
        </div>
      </div>
    </section>

    <section class="home-cta">
      <div class="container home-cta__inner">
        <div>
          <p class="home-cta__kicker">到厂考察 · 合作洽谈</p>
          <h2>有意向合作？欢迎到厂实地考察</h2>
        </div>
        <div class="home-cta__actions">
          <a class="btn btn--light" href="tel:+8675728886666">0757-2888 6666</a>
          <RouterLink class="btn" to="/contact">联系我们</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 92vh;
  overflow: hidden;
  background: var(--ink);
  color: var(--ivory);
}

.home-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(23, 20, 15, 0.8) 0%,
    rgba(23, 20, 15, 0.42) 55%,
    rgba(23, 20, 15, 0.18) 100%
  );
}

.home-hero__inner {
  position: relative;
  padding: 6rem 0 9rem;
}

.home-hero__seal {
  width: 3rem;
  height: 3rem;
  margin-bottom: 1.8rem;
  font-size: 1.5rem;
}

.home-hero__kicker {
  margin: 0 0 1.4rem;
  font-size: 0.8rem;
  letter-spacing: 0.46em;
  text-transform: uppercase;
  color: #d3b98a;
}

.home-hero__title {
  margin: 0 0 1.6rem;
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: clamp(2.6rem, 6vw, 4.6rem);
  line-height: 1.28;
  letter-spacing: 0.08em;
}

.home-hero__subtitle {
  max-width: 34rem;
  margin: 0 0 2.4rem;
  font-size: 1rem;
  line-height: 2;
  color: rgba(251, 248, 242, 0.82);
}

.home-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
}

.home-hero__stats {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--hairline-light);
  background: rgba(23, 20, 15, 0.42);
}

.home-hero__stats-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.home-hero__stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1.6rem 0;
  border-right: 1px solid var(--hairline-light);
  text-align: center;

  &:last-child {
    border-right: 0;
  }

  strong {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    color: #d3b98a;
  }

  span {
    font-size: 0.78rem;
    letter-spacing: 0.24em;
    color: rgba(251, 248, 242, 0.65);
  }
}

.home-brand {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 5rem;
  align-items: center;
}

.home-brand__media {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  background: var(--sand-deep);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.home-brand__badge {
  position: absolute;
  right: 1.5rem;
  bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.1rem 1.5rem;
  background: var(--ivory);
  border: 1px solid var(--gold);

  strong {
    font-family: var(--font-serif);
    font-size: 1.7rem;
    color: var(--gold-deep);
  }

  span {
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: var(--text-secondary);
  }
}

.home-brand__list {
  margin: 2.2rem 0 2.6rem;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 1.15rem;
    padding-left: 6.5rem;
    color: var(--text-secondary);
    line-height: 1.8;
  }

  li span {
    position: absolute;
    top: 0;
    left: 0;
    padding-bottom: 0.2rem;
    font-size: 0.85rem;
    letter-spacing: 0.22em;
    color: var(--ink);
    border-bottom: 1px solid var(--gold);
  }
}

.home-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.home-products__more {
  margin-top: 3rem;
  text-align: center;
}

.home-advantages {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: 3.2rem;
}

.home-advantages__item {
  padding: 2.2rem 1.8rem;
  border: 1px solid var(--hairline-light);
  background: rgba(251, 248, 242, 0.03);

  h3 {
    margin: 0 0 1rem;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    letter-spacing: 0.12em;
    color: #d3b98a;
  }

  p {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.9;
    color: rgba(251, 248, 242, 0.72);
  }
}

.home-categories {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.home-category {
  background: var(--sand);
  border: 1px solid var(--hairline);
  transition: border-color 0.25s ease;

  &:hover {
    border-color: var(--gold);
  }
}

.home-category__media {
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: var(--sand-deep);

  .el-image {
    display: block;
    width: 100%;
    height: 100%;
    transition: opacity 0.35s ease;
  }

  &:hover .el-image {
    opacity: 0.88;
  }
}

.home-category__body {
  padding: 1.4rem 1.5rem 1.5rem;

  h3 {
    margin: 0 0 0.5rem;
    font-family: var(--font-serif);
    font-size: 1.12rem;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0 0 1rem;
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--text-secondary);
  }

  span {
    font-size: 0.78rem;
    letter-spacing: 0.28em;
    color: var(--gold-deep);
    border-bottom: 1px solid var(--gold);
    padding-bottom: 0.2rem;
  }
}

.home-promises {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2rem;
  margin-top: 3.2rem;
}

.home-promise {
  padding: 1.6rem 0 0;
  border-top: 1px solid var(--gold);

  h3 {
    margin: 0 0 0.7rem;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.1em;
    color: var(--gold-deep);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.home-testimonials {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
  margin-top: 3.2rem;
}

.home-testimonial {
  margin: 0;
  padding: 2.2rem 1.8rem;
  background: var(--sand);
  border: 1px solid var(--hairline);
  border-left: 2px solid var(--gold);

  blockquote {
    margin: 0 0 1.6rem;
    font-family: var(--font-serif);
    font-size: 1.02rem;
    line-height: 1.9;
    color: var(--ink-mute);
  }

  figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    strong {
      font-size: 0.95rem;
      letter-spacing: 0.14em;
      color: var(--ink);
    }

    span {
      font-size: 0.78rem;
      letter-spacing: 0.12em;
      color: var(--text-secondary);
    }
  }
}

.home-partners {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8rem 2.4rem;
  margin-top: 3.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--hairline);

  span {
    font-family: var(--font-serif);
    font-size: 1rem;
    letter-spacing: 0.18em;
    color: var(--text-secondary);
  }
}

.home-custom {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 5rem;
  align-items: center;
}

.home-custom__content .btn {
  margin-top: 2rem;
}

.home-custom__media {
  overflow: hidden;
  aspect-ratio: 5 / 4;
  background: var(--sand-deep);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.home-cta {
  background: var(--gold-deep);
  color: var(--ivory);
}

.home-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3.4rem 0;
}

.home-cta__kicker {
  margin: 0 0 0.5rem;
  font-size: 0.78rem;
  letter-spacing: 0.36em;
  color: rgba(251, 248, 242, 0.7);
}

.home-cta h2 {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 2.6vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
}

.home-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 960px) {
  .home-brand,
  .home-custom {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .home-products {
    grid-template-columns: repeat(2, 1fr);
  }

  .home-advantages,
  .home-categories,
  .home-promises {
    grid-template-columns: repeat(2, 1fr);
  }

  .home-testimonials {
    grid-template-columns: 1fr;
  }

  .home-cta__inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .home-hero {
    min-height: 88vh;
  }

  .home-hero__stats-inner {
    grid-template-columns: 1fr;
  }

  .home-hero__stat {
    border-right: 0;
    border-bottom: 1px solid var(--hairline-light);

    &:last-child {
      border-bottom: 0;
    }
  }

  .home-products,
  .home-advantages,
  .home-categories,
  .home-promises {
    grid-template-columns: 1fr;
  }
}
</style>
