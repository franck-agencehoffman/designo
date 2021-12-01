<template>
  <div class="contact">
    <div class="left">
      <h2>Let’s talk about<br>your project</h2>
      <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
    </div>
    <div class="right">
      <router-link :to="{ name: 'contact' }" class="button">
        Get in touch
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';
@import '../theme/buttons';

.contact {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 72px 95px;
  border-radius: 15px;
  background-color: $peach;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-image: url('../assets/img/image-contact-background.svg');

  @media (max-width: 768px) {
    flex-direction: column;
    background-size: 120% 100%;
    background-position: -5% center;
  }

  @media (max-width: 675px) {
    max-width: calc(100% - 48px);
    margin: 0 auto;
    padding: 64px 24px;
  }

  .left,
  .right {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;

    @media (max-width: 768px) {
      margin-top: 32px;
      justify-content: center;
    }
  }

  h2 {
    margin-bottom: 10px;
    color: $white;
  }

  p {
    color: $white;
  }
}
</style>
