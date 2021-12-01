<template>
  <div class="about-hero">
    <div class="col">
      <h1>About Us</h1>
      <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
    </div>
    <div class="col" />
  </div>
</template>

<script>
export default {
  name: "AboutHero"
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

  .about-hero {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    border-radius: 15px;
    background-image: url('../assets/img/image-form-background.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    background-color: $peach;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }

    @media (max-width: 675px) {
      border-radius: 0;
    }

    .col {
      width: 50%;

      &:first-of-type {
        padding: 135px 85px 135px 95px;
      }

      &:last-of-type {
        background-image: url('../assets/img/image-about-hero.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;

        &:first-of-type {
          padding: 64px 58px;
        }

        &:last-of-type {
          height: 320px;
        }
      }
    }

    h1 {
      margin-bottom: 32px;
      color: $white;
    }

    p {
      color: $white;
    }
  }
</style>
