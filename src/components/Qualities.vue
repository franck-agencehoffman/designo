<template>
  <div class="qualities">
    <div class="quality" v-for="(quality, index) in qualities" :key="index">
      <div class="image-wrapper" :style="{ 'background-image': `url(/img/${quality.image})`}">
        <img class="image" src="/img/bg-pattern-hero-home.svg" :alt="`Quality ${index + 1}`">
      </div>
      <div class="content">
        <h3>{{ quality.title }}</h3>

        <p>{{ quality.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Qualities",
  props: {
    qualities: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

.qualities {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }

  @media (max-width: 675px) {
    row-gap: 80px;
    padding: 0 24px;
  }

  .quality {
    width: 100%;

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 202px 1fr;
      align-items: center;
      column-gap: 28px;
    }

    @media (max-width: 675px) {
      grid-template-columns: 1fr;
    }

    &:nth-child(1) {
      .image-wrapper {
        .image {
          transform: rotate(-90deg);
        }
      }
    }

    &:nth-child(2) {
      .image-wrapper {
        .image {
          transform: rotate(-180deg);
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

      @media (max-width: 768px) {
        margin: 0 auto;
      }

      @media (max-width: 675px) {
        margin: 0 auto 48px;
      }

      .image {
        position: relative;
        z-index: 1;
        width: 100%;
      }
    }

    .content {
      text-align: center;

      @media (max-width: 768px) {
        text-align: left;
      }

      @media (max-width: 675px) {
        text-align: center;
      }
    }

    h3 {
      margin-bottom: 32px;
      color: $darkGrey;

      @media (max-width: 768px) {
        margin-bottom: 16px;
      }

      @media (max-width: 675px) {
        margin-bottom: 32px;
      }
    }

    p {
      color: $darkGrey;
    }
  }
}
</style>
