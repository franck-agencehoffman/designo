<template>
  <div class="categories" :class="{ 'is-big': categories.length > 2 }" id="projects">
    <router-link :to="{ name: 'projects', params: { category: category.slug }}" class="category"
                 v-for="(category, index) in categories" :key="index" :style="{ 'background-image': 'url(/img/' + category.image + ')' }">
      <div class="content">
        <h2>{{ category.name }}</h2>

        <div class="subtitle">
          <p>View projects</p>
          <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L1 9" stroke="#E7816B" stroke-width="2"/>
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Categories",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 308px;
  row-gap: 24px;
  column-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px;
  }

  @media (max-width: 675px) {
    grid-template-rows: 250px 250px;
    padding: 0 24px;
  }

  &.is-big {
    grid-template-columns: calc(50% - 15px) calc(50% - 15px);
    grid-template-rows: 308px 308px;
    grid-auto-flow: column;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: 200px 200px 200px;
      row-gap: 25px;
    }

    @media (max-width: 675px) {
      grid-template-rows: 250px 250px 250px;
      padding: 0 24px;
    }

    .category {
      &:first-of-type {
        grid-row:1/span 2;
      }

      @media (max-width: 768px) {
        &:first-of-type {
          grid-row: 1;
        }
      }
    }
  }

  .category {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    text-decoration: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      inset: 0;
      background: #000000;
      mix-blend-mode: normal;
      opacity: 0.5;
      transition: all .4s ease-in-out;
    }

    &:hover {
      &:before {
        background: $peach;
        opacity: 0.8;
      }
    }

    .content {
      position: relative;
      z-index: 1;
      text-align: center;
    }

    h2 {
      margin-bottom: 24px;
      color: $white;
      text-transform: uppercase;
    }

    .subtitle {
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: $white;

      svg {
        margin-left: 21px
      }
    }
  }
}
</style>
