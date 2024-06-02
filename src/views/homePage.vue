<template>
  <div>
    <BannerComponent />
    <ProductComponent/>
  </div>
</template>

<script>
import BannerComponent from "@/components/HomeComponents/BannerComponent.vue";
import ProductComponent from '@/components/HomeComponents/ProductComponent.vue';


export default {
  components: {
    BannerComponent,
    ProductComponent,
  },
};
</script>

<style></style>
