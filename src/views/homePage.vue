<template>
  <div>
    <section class="homepage-header container-fluid d-flex justify-content-end">
      <BannerComponent />
    </section>
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

<style>

.container-fluid {
  width: 80%;
  padding: 0;
  font-family: 'Poppins';
}
.homepage-head-title {
  margin-bottom: 76px;
  max-width: 740px;
  color: #16205F;
}
.homepage-head-title h2 {
  font-size: 46px;
  font-weight: 600;
  margin-bottom: 21px;
}
.homepage-head-title h5 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 19px;
}
.homepage-head-title p {
  font-size: 18px;
  margin: 0;
  max-width: 486px;
}
@media (max-width: 1025px) {
  .homepage-head-title {
    max-width: 500px;
  }
  .homepage-head-title h2 {
    font-size: 40px;
  }
  .homepage-head-title h5 {
    font-size: 20px;
  }
  .homepage-head-title p {
    font-size: 16px;
    max-width: 486px;
  }
}

.homepage-staff {
  margin-top: 166px;
}
.homepage-carousel .homepage-head-title h2 {
    max-width: 100%;
    margin-bottom: 90px;
}
.carousel__item img {
    max-width: 210px;
}
.carousel-wrapper {
    position: relative;
    padding-right: 80px;
}
.custom-navigation {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.custom-navigation img {
    cursor: pointer;
}
.homepage-carousel-client {
  background: #F8F8F8;
}
@media (max-width: 768px) {
  .homepage-carousel-client {
    background: #ffffff;
    padding: 0;
  }
}</style>
