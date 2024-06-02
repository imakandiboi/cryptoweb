<template>
  <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="images[0]" class="d-block w-100" alt="First slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>INVEST IN BITCOIN</h5>
            <p>First slide description.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="images[1]" class="d-block w-100" alt="Second slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second Slide Title</h5>
            <p>Second slide description.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img :src="images[2]" class="d-block w-100" alt="Third slide" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third Slide Title</h5>
            <p>Third slide description.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent',
  data() {
    return {
      images: [
        require('@/assets/images/banner1.jpg'),
      ]
    };
  }
};
</script>

<style>
/* Add any custom styles here */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap');

.carousel-caption {
  position: absolute;
  top: 30%;

  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.carousel-caption P {

  font-size: 10px;
  font-family: "Cinzel", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>