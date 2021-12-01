<template>
  <div class="home-hero">
    <svg class="background-shape" width="640" height="640" viewBox="0 0 640 640" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.308943" r="320" transform="matrix(0 -1 -1 0 320 320)" fill="url(#paint0_linear_0_10661)"/>
      <defs>
        <linearGradient id="paint0_linear_0_10661" x1="0" y1="640" x2="640" y2="640" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5D0202" stop-opacity="0.01"/>
          <stop offset="1" stop-color="#5D0202" stop-opacity="0.497569"/>
        </linearGradient>
      </defs>
    </svg>

    <div class="left">
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
      <a href="#" v-scroll-to="'#projects'" class="button">Learn more</a>
    </div>
    <div class="right">
      <img src="@/assets/img/image-hero-phone.png" alt="Phone" class="phone">
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHero"
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';
@import '../theme/buttons';

.home-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  width: 100%;
  min-height: 640px;
  border-radius: 15px;
  background: $peach;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 675px) {
    border-radius: 0;
  }

  .background-shape {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    @media (max-width: 768px) {
      right: -15%;
      top: 12.5%;
      bottom: auto;
      transform: rotate(-30deg);
    }
  }

  .left,
  .right {
    position: relative;
    z-index: 1;
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .left {
    padding: 145px 0 145px 95px;

    @media (max-width: 768px) {
      padding: 60px 60px 457px;
      text-align: center;
    }

    @media (max-width: 675px) {
      padding: 80px 24px 451px;
    }
  }

  .right {
    position: absolute;
    right: 0;
    bottom: -30%;

    @media (max-width: 768px) {
      right: -5%;
      bottom: -45%;
    }

    @media (max-width: 675px) {
      bottom: -32.5%;
    }
  }

  h1 {
    color: $white;
    margin-bottom: 11px;

    @media (max-width: 768px) {
      margin-bottom: 15px;
    }
  }

  p {
    color: $white;
    margin-bottom: 40px;

    @media (max-width: 768px) {
      max-width: 440px;
      margin: 0 auto 19px;
    }
  }
}
</style>
