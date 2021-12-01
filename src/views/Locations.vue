<template>
  <div class="page-wrapper">
    <locations />

    <contact />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'

export default {
  head() {
    return {
      title: {
        inner: 'Locations'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} locations page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { Locations, Contact },
  computed: {
    ...mapState('app', ['appTitle', 'projectsContent']),
    currentCategory() {
      return this.projectsContent.find(element => element.slug === this.$route.params.category)
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
