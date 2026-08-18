<script setup lang="ts">
import type { Product } from '@/data/site'

defineProps<{ product: Product }>()
</script>

<template>
  <article class="product-card">
    <RouterLink :to="'/contact'" class="product-card__media">
      <el-image
        class="product-card__image"
        :src="product.image"
        :alt="product.name"
        :preview-src-list="[product.image]"
        preview-teleported
        hide-on-click-modal
        fit="cover"
        loading="lazy"
      />
      <span class="product-card__tag">{{ product.category }}</span>
    </RouterLink>
    <div class="product-card__body">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__material">{{ product.material }}</p>
      <RouterLink class="product-card__link" to="/contact">源头直供 · 询价</RouterLink>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  background: var(--ivory);
  border: 1px solid var(--hairline);

  &:hover {
    border-color: var(--gold);
  }
}

.product-card__media {
  position: relative;
  display: block;
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

.product-card__tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.25rem 0.85rem;
  background: rgba(251, 248, 242, 0.92);
  color: var(--ink-mute);
  font-size: 0.75rem;
  letter-spacing: 0.3em;
}

.product-card__body {
  padding: 1.4rem 1.5rem 1.6rem;
}

.product-card__name {
  margin: 0 0 0.5rem;
  font-family: var(--font-serif);
  font-size: 1.12rem;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.product-card__material {
  margin: 0 0 1rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.product-card__link {
  display: inline-block;
  padding-bottom: 0.25rem;
  font-size: 0.8rem;
  letter-spacing: 0.28em;
  color: var(--gold-deep);
  border-bottom: 1px solid var(--gold);
  transition: color 0.2s ease;

  &:hover {
    color: var(--gold);
  }
}
</style>
