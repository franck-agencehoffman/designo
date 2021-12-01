<template>
  <div class="page-wrapper">
    <about-hero />

    <split-text-image :content="splitContent[0]" />

    <small-locations />

    <split-text-image :content="splitContent[1]" />

    <contact />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import AboutHero from '@/components/AboutHero'
import SmallLocations from '@/components/SmallLocations'
import Contact from '@/components/Contact'
import SplitTextImage from '@/components/SplitTextImage'

export default {
  head() {
    return {
      title: {
        inner: 'About'
      },
      meta: [
        {
          name: 'description',
          content: `${this.appTitle} about page`,
          id: 'desc'
        }
      ]
    }
  },
  components: { AboutHero, SmallLocations, SplitTextImage, Contact },
  computed: {
    ...mapState('app', ['appTitle', 'projectsContent'])
  },
  data() {
    return {
      splitContent: [
        {
          image: 'image-world-class-talent.jpg',
          title: 'World-class talent',
          text: 'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.<br><br>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
          reverse: true
        },
        {
          image: 'image-real-deal.jpg',
          title: 'The real deal',
          text: 'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.<br><br>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
          reverse: false
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
