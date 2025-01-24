<template>
  <LayoutComponent>
    <div class="home">
      <h1>欢迎来到 Miss Cloud Front</h1>
    </div>
  </LayoutComponent>
</template>

<script>
import LayoutComponent from '@/layout/LayoutComponent.vue';

export default {
  name: 'HomePage',
  components: {
    LayoutComponent,
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>