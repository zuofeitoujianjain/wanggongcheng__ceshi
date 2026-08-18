<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="site">
      <AppHeader />

      <main>
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </main>

      <AppFooter />
    </div>

    <el-backtop :right="28" :bottom="48" />
  </el-config-provider>
</template>

<style scoped lang="scss">
.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  main {
    flex: 1;
  }
}
</style>
