<script setup lang="ts">
import { categories, contact, navItems, siteName, siteNameEn } from '@/data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__grid">
      <div class="site-footer__col site-footer__col--brand">
        <RouterLink to="/" class="brand" aria-label="源木家具 首页">
          <img class="brand__logo" src="/logo.jpg" alt="源木家具" />
          <span class="brand__text">
            <span class="brand__cn">{{ siteName }}</span>
            <span class="brand__en">{{ siteNameEn }}</span>
          </span>
        </RouterLink>
        <p class="site-footer__about">
          始于森林，成于匠心。源木家具专注高端实木家具制造二十年，自有工厂直供，
          支持 OEM / ODM 与柔性定制。
        </p>
      </div>

      <div class="site-footer__col">
        <h4>快速导航</h4>
        <RouterLink v-for="item in navItems" :key="item.to" :to="item.to">
          {{ item.label }}
        </RouterLink>
      </div>

      <div class="site-footer__col">
        <h4>产品系列</h4>
        <span v-for="category in categories" :key="category">{{ category }}家具</span>
      </div>

      <div class="site-footer__col">
        <h4>联系我们</h4>
        <p>{{ contact.address }}</p>
        <p>{{ contact.phone }}</p>
        <p>{{ contact.email }}</p>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="container site-footer__bottom-inner">
        <p>© 2026 {{ siteName }} {{ siteNameEn }} · 家具源头工厂</p>
        <p>粤ICP备00000000号（示例）</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  background: var(--ink-soft);
  color: var(--ivory);
}

.site-footer__grid {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1.4fr;
  gap: 3.5rem;
  padding: 4.5rem 0 3.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.brand__logo {
  display: block;
  flex: none;
  width: 2.5rem;
  height: 2.5rem;
  padding: 2px;
  object-fit: contain;
  background: #fff;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.3;
}

.brand__cn {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  letter-spacing: 0.18em;
}

.brand__en {
  font-size: 0.6rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: rgba(251, 248, 242, 0.55);
}

.site-footer__about {
  margin: 1.4rem 0 0;
  max-width: 30rem;
  font-size: 0.9rem;
  line-height: 1.9;
  color: rgba(251, 248, 242, 0.68);
}

.site-footer__col {
  h4 {
    margin: 0 0 1.2rem;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.32em;
    color: var(--gold);
  }

  a,
  span,
  p {
    display: block;
    margin: 0 0 0.75rem;
    font-size: 0.9rem;
    color: rgba(251, 248, 242, 0.72);
  }

  a:hover {
    color: var(--ivory);
  }
}

.site-footer__bottom {
  border-top: 1px solid var(--hairline-light);
}

.site-footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.4rem 0;
  font-size: 0.8rem;
  color: rgba(251, 248, 242, 0.45);

  p {
    margin: 0;
  }
}

@media (max-width: 960px) {
  .site-footer__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 560px) {
  .site-footer__grid {
    grid-template-columns: 1fr;
  }
}
</style>
