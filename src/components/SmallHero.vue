<template>
  <div v-if="content" class="small-hero" :style="{ 'background-image': `url(/img/${content.background})`, 'background-position': `${content.backgroundPosition} center` }">
      <h1>{{ content.title }}</h1>
      <p v-html="content.subtitle" />
  </div>
</template>

<script>
export default {
  name: "SmallHero",
  props: {
    content: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

.small-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 0;
  border-radius: 15px;
  text-align: center;
  background-color: $peach;
  background-repeat: no-repeat;
  background-size: auto 100%;

  @media (max-width: 768px) {
    background-size: 125% 100%;
    background-position: -50% -25%;
  }

  @media (max-width: 675px) {
    padding: 105px 24px;
    border-radius: 0;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
    color: $white;
  }

  p {
    color: $white;
  }
}
</style>
