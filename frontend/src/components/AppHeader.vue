<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { useRoute } from 'vue-router'

import { navItems } from '@/data/site'

const route = useRoute()
const menuOpen = shallowRef(false)

const activePath = computed(() => route.path)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink to="/" class="brand" aria-label="源木家具 首页">
        <img class="brand__logo" src="/logo.jpg" alt="源木家具" />
        <span class="brand__text">
          <span class="brand__cn">源木家具</span>
          <span class="brand__en">YUANMU FURNITURE</span>
        </span>
      </RouterLink>

      <nav class="site-header__nav" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ 'nav-link--active': activePath === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <a class="site-header__phone" :href="'tel:+8675728886666'">0757-2888 6666</a>

      <button
        type="button"
        class="site-header__toggle"
        :aria-expanded="menuOpen"
        aria-label="打开导航菜单"
        @click="menuOpen = !menuOpen"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <div v-if="menuOpen" class="site-header__mobile">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-link"
        :class="{ 'nav-link--active': activePath === item.to }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.96);
  border-bottom: 1px solid var(--hairline);
}

.site-header__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: min(1280px, 94%);
  margin-inline: auto;
  min-height: 5.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-right: auto;
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
  color: var(--ink);
}

.brand__en {
  font-size: 0.6rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

.site-header__nav {
  display: flex;
  gap: 2.4rem;
}

.nav-link {
  padding: 0.4rem 0;
  font-size: 0.95rem;
  letter-spacing: 0.18em;
  color: var(--ink-mute);
  border-bottom: 1px solid transparent;
  transition:
    color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    color: var(--gold-deep);
  }
}

.nav-link--active {
  color: var(--gold-deep);
  border-bottom-color: var(--gold);
}

.site-header__phone {
  font-size: 0.9rem;
  letter-spacing: 0.08em;
  color: var(--ink);
  white-space: nowrap;
}

.site-header__toggle {
  display: none;
}

.site-header__mobile {
  display: none;
}

@media (max-width: 960px) {
  .site-header__nav,
  .site-header__phone {
    display: none;
  }

  .site-header__toggle {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 2.35rem;
    height: 2.35rem;
    border: 1px solid var(--hairline);
    background: transparent;
    cursor: pointer;

    span {
      width: 1.15rem;
      height: 1px;
      background: var(--ink);
    }
  }

  .site-header__mobile {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 3% 1rem;
    border-top: 1px solid var(--hairline);
    background: var(--ivory);

    .nav-link {
      padding: 0.9rem 0;
      border-bottom: 0;
    }
  }
}
</style>
