<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

import PageHero from '@/components/PageHero.vue'
import ProductCard from '@/components/ProductCard.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import { categories, products, productsFaq, purchaseSteps } from '@/data/site'

const filterOptions = ['全部', ...categories]
const route = useRoute()
const initialCategory =
  typeof route.query.category === 'string' && filterOptions.includes(route.query.category)
    ? route.query.category
    : '全部'
const activeCategory = shallowRef(initialCategory)

const visibleProducts = computed(() =>
  activeCategory.value === '全部'
    ? products
    : products.filter((product) => product.category === activeCategory.value),
)

const notes = [
  { title: '工厂价直供', desc: '同一件产品，省去卖场与经销溢价，源头价格更透明。' },
  { title: '支持打样', desc: '批量采购前可先打样，确认材质、颜色与工艺。' },
  { title: '一件起订', desc: '零售一件同样按出厂价供货，批发价格另议。' },
]

const heroImage =
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80'
</script>

<template>
  <div class="products">
    <PageHero
      kicker="产品中心 · COLLECTION"
      title="产品中心"
      subtitle="从沙发到书桌，八大系列源头直供。所有产品均可在厂看样，支持按需询价与定制。"
      :image="heroImage"
    />

    <section class="section section--ivory">
      <div class="container">
        <div class="products__filter" role="tablist" aria-label="产品分类">
          <button
            v-for="option in filterOptions"
            :key="option"
            type="button"
            class="products__filter-btn"
            :class="{ 'products__filter-btn--active': activeCategory === option }"
            @click="activeCategory = option"
          >
            {{ option }}
          </button>
        </div>

        <div class="products__grid">
          <ProductCard
            v-for="product in visibleProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="采购流程 · PROCESS"
          title="五步完成采购"
          description="从看样到交付，每一步都可以确认，全程透明。"
        />

        <div class="products__steps">
          <div v-for="step in purchaseSteps" :key="step.step" class="products__step">
            <span class="products__step-num">{{ step.step }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--ivory">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="常见问题 · FAQ"
          title="您可能关心的问题"
        />

        <div class="products__faq">
          <div v-for="item in productsFaq" :key="item.q" class="products__faq-item">
            <h3>{{ item.q }}</h3>
            <p>{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--sand">
      <div class="container">
        <SectionTitle
          align="center"
          kicker="源头直供 · DIRECT"
          title="没有中间商，只有出厂价"
          description="我们是制造者，不是经销商。所有产品均支持工厂价直供、看样下单与批量供货。"
        />

        <div class="products__notes">
          <div v-for="note in notes" :key="note.title" class="products__note">
            <h3>{{ note.title }}</h3>
            <p>{{ note.desc }}</p>
          </div>
        </div>

        <div class="products__cta">
          <RouterLink class="btn btn--solid" to="/custom">需要定制？提交需求</RouterLink>
          <RouterLink class="btn" to="/contact">询价与到厂看样</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.products__filter {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 2.6rem;
  margin-bottom: 3.2rem;
}

.products__filter-btn {
  padding: 0.45rem 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid transparent;
  font-size: 0.95rem;
  letter-spacing: 0.22em;
  color: var(--text-secondary);
  cursor: pointer;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--gold-deep);
  }
}

.products__filter-btn--active {
  color: var(--gold-deep);
  border-bottom-color: var(--gold);
}

.products__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
}

.products__notes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3.2rem;
}

.products__note {
  padding: 2.2rem 1.8rem;
  background: var(--ivory);
  border: 1px solid var(--hairline);

  h3 {
    margin: 0 0 0.8rem;
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

.products__steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 3.2rem;
}

.products__step {
  padding-top: 1.4rem;
  border-top: 1px solid var(--gold);

  .products__step-num {
    font-family: var(--font-serif);
    font-size: 1.6rem;
    color: var(--gold);
  }

  h3 {
    margin: 0.7rem 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.15rem;
    letter-spacing: 0.08em;
  }

  p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.products__faq {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 3.2rem;
}

.products__faq-item {
  padding: 1.6rem 1.7rem;
  background: var(--sand);
  border: 1px solid var(--hairline);
  border-left: 2px solid var(--gold);

  h3 {
    margin: 0 0 0.6rem;
    font-family: var(--font-serif);
    font-size: 1.05rem;
    letter-spacing: 0.06em;
    color: var(--ink);
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
  }
}

.products__cta {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-top: 3rem;
}

@media (max-width: 960px) {
  .products__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .products__steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .products__grid,
  .products__notes,
  .products__steps,
  .products__faq {
    grid-template-columns: 1fr;
  }
}
</style>
