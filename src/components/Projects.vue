<template>
  <div class="projects">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <img class="image" :src="`/img/${project.image}`" :alt="project.title">

      <div class="content">
        <h3>{{ project.title }}</h3>

        <p>{{ project.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    projects: []
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 675px) {
    padding: 0 24px;
    row-gap: 40px;
  }

  .project {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    text-align: center;
    background: $light;
    transition: all .4s ease-in-out;
    cursor: pointer;

    @media (max-width: 768px) {
      display: flex;
      align-items: center;

      img,
      .content {
        width: 50%;
      }
    }

    @media (max-width: 675px) {
      display: block;

      img,
      .content {
        width: 100%;
      }
    }

    &:hover {
      .content {
        background: $peach;
      }

      h3 {
        color: $white;
      }

      p {
        color: $white;
      }
    }

    .content {
      padding: 32px;

      @media (max-width: 768px) {
        padding: 40px;
      }
    }

    h3 {
      margin-bottom: 16px;
      color: $peach;
      transition: all .4s ease-in-out;
    }

    p {
      color: $darkGrey;
      transition: all .3s ease-in-out;
    }
  }
}
</style>
