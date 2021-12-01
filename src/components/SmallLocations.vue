<template>
  <div class="locations">
    <div class="location" v-for="(location, index) in locations" :key="index">
      <div class="image-wrapper" :style="{ 'background-image': `url(/img/${location.image})`}">
        <img class="image" src="/img/bg-pattern-hero-home.svg" :alt="`Quality ${index + 1}`">
      </div>
      <div class="content">
        <h3>{{ location.country }}</h3>

        <router-link :to="{ name: 'locations', hash: `#${location.slug}` }" class="button dark">See location</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmallLocations",
  data() {
    return {
      locations: [
        {
          image: 'illustration-canada.svg',
          country: 'Canada',
          slug: 'canada'
        },
        {
          image: 'illustration-australia.svg',
          country: 'Australia',
          slug: 'australia'
        },
        {
          image: 'illustration-united-kingdom.svg',
          country: 'United Kingdom',
          slug: 'united-kingdom'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';
@import '../theme/buttons';

.locations {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 80px;
  }

  @media (max-width: 675px) {
    row-gap: 48px;
  }

  .location {
    width: 100%;

    &:nth-child(1) {
      .image-wrapper {
        .image {
          transform: rotate(0deg);
        }
      }
    }

    &:nth-child(2) {
      .image-wrapper {
        .image {
          transform: rotate(-90deg);
        }
      }
    }

    .image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 202px;
      height: 202px;
      margin: 0 auto 48px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      .image {
        position: relative;
        z-index: 1;
        width: 100%;
        transform: rotate(-180deg);
      }
    }

    .content {
      text-align: center;
    }

    h3 {
      margin-bottom: 32px;
      color: $darkGrey;
      text-transform: uppercase;
    }
  }
}
</style>
