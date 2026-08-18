<script setup lang="ts">
defineProps<{
  kicker: string
  title: string
  subtitle?: string
  image: string
}>()
</script>

<template>
  <section class="page-hero">
    <img class="page-hero__image" :src="image" alt="" />
    <div class="page-hero__veil" />
    <div class="container page-hero__inner">
      <p class="page-hero__kicker">{{ kicker }}</p>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p v-if="subtitle" class="page-hero__subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.page-hero {
  position: relative;
  display: flex;
  align-items: flex-end;
  min-height: 48vh;
  overflow: hidden;
  background: var(--ink);
}

.page-hero__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.page-hero__veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(23, 20, 15, 0.35) 0%, rgba(23, 20, 15, 0.72) 100%);
}

.page-hero__inner {
  position: relative;
  padding: 4.5rem 0;
  color: var(--ivory);
}

.page-hero__kicker {
  margin: 0 0 1rem;
  font-size: 0.78rem;
  letter-spacing: 0.46em;
  text-transform: uppercase;
  color: #d3b98a;
}

.page-hero__title {
  margin: 0 0 1.1rem;
  font-family: var(--font-serif);
  font-weight: 600;
  font-size: clamp(2rem, 4.6vw, 3.2rem);
  letter-spacing: 0.06em;
}

.page-hero__subtitle {
  max-width: 38rem;
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.9;
  color: rgba(251, 248, 242, 0.8);
}

@media (max-width: 560px) {
  .page-hero {
    min-height: 58vh;
  }
}
</style>
