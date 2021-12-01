<template>
  <div class="split-text-image" :class="{ 'is-reverse': content.reverse }">
    <div class="col">
      <h1>{{ content.title }}</h1>
      <p v-html="content.text" />
    </div>
    <div class="col" :style="{ 'background-image': `url(/img/${content.image})` }" />
  </div>
</template>

<script>
export default {
  name: "SplitTextImage",
  props: {
    content: {}
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

  .split-text-image {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: stretch;
    border-radius: 15px;
    background-image: url('../assets/img/image-split-background.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    background-color: $light;

    &.is-reverse {
      flex-direction: row-reverse;
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;

      &.is-reverse {
        flex-direction: column-reverse;
      }
    }

    @media (max-width: 675px) {
      border-radius: 0;
    }

    .col {
      width: 50%;

      &:first-of-type {
        padding: 155px 95px;
      }

      &:last-of-type {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }

      @media (max-width: 768px) {
        width: 100%;
        text-align: center;

        &:first-of-type {
          padding: 68px 58px;
        }

        &:last-of-type {
          height: 320px;
        }
      }
    }

    h1 {
      margin-bottom: 32px;
      color: $peach;
    }

    p {
      color: $darkGrey;
    }
  }
</style>
