<template>
  <header class="navbar" :class="{ 'is-active': openMobileNav }">
    <div class="content">
      <div class="left">
        <router-link class="logo" to="/">
          <img src="/img/image-logo-designo.png" alt="Designo">
        </router-link>
      </div>
      <div class="burger-btn" :class="{ 'is-active': openMobileNav }" @click="onOpenMobileNav">
        <div class="menu-btn__burger" />
      </div>
      <div class="right" :class="{ 'is-active': openMobileNav }">
        <a class="link" href="/our-company" @click.prevent="onNavigate('our-company')">Our company</a>
        <a class="link" href="/locations" @click.prevent="onNavigate('locations')">Locations</a>
        <a class="link" href="/contact" @click.prevent="onNavigate('contact')">Contact</a>
      </div>
    </div>
  </header>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: "NavBar",
  computed: mapState('app', ['openMobileNav']),
  methods: {
    ...mapMutations('app', ['setOpenMobileNav']),
    onOpenMobileNav() {
      this.setOpenMobileNav(!this.openMobileNav)

      document.body.style.overflow = this.openMobileNav ? 'hidden' : 'auto'
    },
    onNavigate(routeName) {
      this.setOpenMobileNav(false)

      document.body.style.overflow = this.openMobileNav ? 'hidden' : 'auto'

      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  padding: 64px 0;
  background: $white;

  &:before {
    content: '';
    position: fixed;
    top: 155px;
    lef: 0;
    right: 0;
    z-index: 40;
    display: none;
    width: 100%;
    height: calc(100vh - 96px);
    background: rgba($black, .5);
  }

  &.is-active {
    &:before {
      display: block;
    }
  }

  @media (max-width: 1151px) {
    padding: 64px 40px;
  }

  @media (max-width: 675px) {
    padding: 35px 24px;

    &:before {
      top: 96px;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1111px;
    margin: 0 auto;
  }

  .burger-btn {
    width: 24px;
    height: 24px;
    position: relative;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &.is-active {
      .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;

        &::before {
          transform: rotate(45deg) translate(35px, -35px);
        }

        &::after {
          transform: rotate(-45deg) translate(35px, 35px);
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
    }

    .menu-btn__burger {
      width: 24px;
      height: 4px;
      background: $black;
      border-radius: 5px;
      transition: all .2s ease-in-out;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 4px;
        background: $black;
        border-radius: 5px;
        transition: all .2s ease-in-out;
      }

      &::before {
        transform: translateY(-8px);
      }

      &::after {
        transform: translateY(8px);
      }
    }
  }

  .right {
    @media (max-width: 768px) {
      position: fixed;
      top: 155px;
      lef: 0;
      right: 0;
      z-index: 50;
      display: none;
      width: 100%;
      padding: 48px 24px;
      background: $black;

      &.is-active {
        display: block;
      }
    }

    @media (max-width: 675px) {
      top: 96px;
    }
  }

  .link {
    margin-right: 42px;
    font-family: $fontJost;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 2px;
    color: $darkGrey;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .4s ease-in-out;

    &:hover,
    .is-active {
      text-decoration: underline;
    }

    &:last-of-type {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      display: block;
      margin-right: 0;
      margin-bottom: 32px;
      color: $white;
      font-size: 24px;
      line-height: 25px;
    }
  }
}
</style>
