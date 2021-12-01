<template>
  <div class="page-wrapper">
    <home-hero />

    <categories :categories="categories"/>

    <qualities :qualities="qualities" />

    <contact />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHero from '@/components/HomeHero'
import Categories from '@/components/Categories'
import Qualities from '@/components/Qualities'
import Contact from '@/components/Contact'

export default {
  head() {
    return {
      title: {
        inner: 'Home'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} home page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { HomeHero, Categories, Qualities, Contact },
  computed: mapState('app', ['appTitle']),
  data() {
    return {
      categories: [
        {
          image: 'image-web-design-large.jpg',
          slug: 'web-design',
          name: 'Web design'
        },
        {
          image: 'image-app-design.jpg',
          slug: 'app-design',
          name: 'App design'
        },
        {
          image: 'image-graphic-design.jpg',
          slug: 'graphic-design',
          name: 'Graphic design'
        }
      ],
      qualities: [
        {
          image: 'illustration-passionate.svg',
          title: 'PASSIONATE',
          text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
        },
        {
          image: 'illustration-resourceful.svg',
          title: 'RESOURCEFUL',
          text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
        },
        {
          image: 'illustration-friendly.svg',
          title: 'FRIENDLY',
          text: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/variables';
@import '../theme/typography';

.page-wrapper {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 100%;
  row-gap: 160px;
  width: 100%;
  max-width: 1111px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1151px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    row-gap: 120px;
  }

  @media (max-width: 675px) {
    padding: 0;
  }
}
</style>
