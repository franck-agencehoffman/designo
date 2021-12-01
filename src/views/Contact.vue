<template>
  <div class="page-wrapper">
    <contact-form />

    <small-locations />

    <div />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SmallLocations from '@/components/SmallLocations'
import ContactForm from '@/components/ContactForm'

export default {
  head() {
    return {
      title: {
        inner: 'Contact'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} contact page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { ContactForm, SmallLocations },
  computed: {
    ...mapState('app', ['appTitle', 'projectsContent'])
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
