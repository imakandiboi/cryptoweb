<template>
  <div>
    <img :src="images[0]" class="d-block w-100" alt="First slide" />

    <div class="homepage-card-content">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Invest in Bitcoin</h1>
          <p class="card-text">
            We are the leading stock & cyrpto brokers in helping you invest in
            crypto assetsand have guaranteed ROI We are setup to help our
            investors scale and maximse profits .
          </p>
          <button class="arrow-button">
            Get started
            <span class="arrow"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  data() {
    return {
      images: [require("@/assets/images/header-homepage.png")],
    };
  },
};
</script>

<style>
/* Add any custom styles here */
@import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap");

/* .carousel-caption {
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
} */

.homepage-header {
  position: relative;
  margin-top: 30px;
}
.homepage-header .card {
  max-width: 730px;
  max-height: 584px;
  border: none;
  outline: none;
  border-radius: 0px 100px 0px 0px;
  color: #16205f;
  padding: 50px 105px 40px 0px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
}
.homepage-header .card-body {
  padding: 0;
}
.homepage-header .card-title {
  font-weight: 600;
  font-size: 64px;
  /* line-height: 78px; */
}
.homepage-header .card-text {
  font-size: 24px;
  /* line-height: 36px; */
}
@media screen and (max-width: 1400px) {
  .homepage-header img {
    width: 85%;
  }

  .homepage-header .card {
    max-width: 630px;
    max-height: 484px;
    padding: 50px 95px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 50px;
  }

  .homepage-header .card-text {
    font-size: 20px;
  }
}
@media screen and (max-width: 1250px) {
  .homepage-header img {
    width: 80%;
  }

  .homepage-header .card {
    max-width: 630px;
    max-height: 384px;
    padding: 40px 95px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 45px;
  }

  .homepage-header .card-text {
    font-size: 20px;
  }

  .homepage-header .card .arrow-button {
    font-size: 12px;
    padding: 10px 25px;
  }
}
@media screen and (max-width: 1100px) {
  .homepage-header img {
    width: 80%;
  }

  .homepage-header .card {
    max-width: 530px;
    max-height: 384px;
    padding: 30px 85px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 40px;
  }

  .homepage-header .card-text {
    font-size: 16px;
  }
}
@media screen and (max-width: 1050px) {
  .homepage-header img {
    width: 75%;
  }

  .homepage-header .card {
    max-width: 460px;
    max-height: 384px;
    padding: 30px 85px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 30px;
  }

  .homepage-header .card-text {
    font-size: 14px;
  }
}
@media screen and (max-width: 960px) {
  .homepage-header img {
    width: 75%;
  }

  .homepage-header .card {
    max-width: 430px;
    max-height: 284px;
    padding: 30px 75px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 30px;
  }

  .homepage-header .card-text {
    font-size: 14px;
  }

  .homepage-header .card .arrow-button {
    font-size: 12px;
    padding: 10px 25px;
  }
}
@media screen and (max-width: 880px) {
  .homepage-header img {
    width: 75%;
  }

  .homepage-header .card {
    max-width: 350px;
    max-height: 224px;
    padding: 30px 75px 40px 0px;
  }

  .homepage-header .card-title {
    font-size: 24px;
  }

  .homepage-header .card-text {
    font-size: 12px;
  }

  .homepage-header .card .arrow-button {
    font-size: 12px;
    padding: 5px 10px;
  }
}
/* Arrow button */
.homepage-header .arrow-button {
  display: flex;
  color: #ffffff;
  background: linear-gradient(90deg, #ff9900 0%, #f2cb00 100%);
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  border: none;
  outline: none;
  transition: all 0.3s ease;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  font-size: 16px;
  padding: 15px 30px;
}
.homepage-header .arrow-button .arrow {
  width: 10px;
  height: 10px;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  position: relative;
  transform: rotate(-45deg);
  margin: 0 10px;
  transition: all 0.3s ease;
}
.homepage-header .arrow-button .arrow::before {
  display: block;
  background-color: currentColor;
  width: 3px;
  transform-origin: bottom right;
  height: 2px;
  position: absolute;
  opacity: 0;
  bottom: calc(-2px / 2);
  transform: rotate(45deg);
  transition: all 0.3s ease;
  content: "";
  right: 0;
}
.homepage-header .arrow-button:hover .arrow {
  transform: rotate(-45deg) translate(4px, 4px);
  border-color: text-hover-color;
}
.homepage-header .arrow-button:hover .arrow::before {
  opacity: 1;
  width: 16px;
}

/* MOBILE */
@media (max-width: 768px) {
  .homepage-header {
    position: static;
  }
  .homepage-header.container-fluid {
    width: 100%;
    margin: 0;
    position: static;
    flex-direction: column;
  }
  .homepage-header img {
    position: static;
    width: 100%;
    border-radius: 0px 0px 0px 100px;
  }
  .homepage-card-content {
    width: 100%;
    padding: 0 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
  }
  .homepage-header .card {
    max-width: none;
    background: none;
    position: static;
    transform: none;
    padding: 0;
    margin-bottom: 68px;
  }
  .homepage-header .card-title {
    font-size: 36px;
    margin-bottom: 21px;
  }
  .homepage-header .card-text {
    font-size: 20px;
    margin-bottom: 28px;
  }
  .homepage-header .card .arrow-button {
    font-size: 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 15px;
  }
}
</style> 