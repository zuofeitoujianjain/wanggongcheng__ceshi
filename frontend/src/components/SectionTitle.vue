<script setup lang="ts">
withDefaults(
  defineProps<{
    kicker: string
    title: string
    description?: string
    align?: 'left' | 'center'
    tone?: 'light' | 'dark'
  }>(),
  { align: 'left', tone: 'light' },
)
</script>

<template>
  <div
    class="section-title"
    :class="[`section-title--${align}`, `section-title--${tone}`]"
  >
    <p class="kicker">{{ kicker }}</p>
    <h2 class="section-title__heading">{{ title }}</h2>
    <div class="section-title__rule"><i /></div>
    <p v-if="description" class="section-title__description">{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
.section-title {
  &__heading {
    margin: 0.9rem 0 1.1rem;
    font-family: var(--font-serif);
    font-weight: 600;
    font-size: clamp(1.7rem, 3.2vw, 2.4rem);
    line-height: 1.35;
    letter-spacing: 0.04em;
  }

  &__rule {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    width: 11rem;

    &::before,
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--hairline);
    }

    i {
      display: block;
      width: 0.45rem;
      height: 0.45rem;
      border: 1px solid var(--gold);
      transform: rotate(45deg);
    }
  }

  &__description {
    max-width: 40rem;
    margin: 1.3rem 0 0;
    color: var(--text-secondary);
    line-height: 1.9;
  }

  &--dark {
    .section-title__heading {
      color: var(--ivory);
    }

    .section-title__description {
      color: rgba(251, 248, 242, 0.72);
    }

    .section-title__rule::before,
    .section-title__rule::after {
      background: var(--hairline-light);
    }
  }

  &--center {
    text-align: center;

    .section-title__rule {
      margin-inline: auto;
    }

    .section-title__description {
      margin-inline: auto;
    }
  }
}
</style>
