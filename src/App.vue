<template>
  <div id="app">
    <div class="main-wrapper">
      <svg v-if="$route.name !== 'locations'" class="background-leaf" width="1006" height="594" viewBox="0 0 1006 594" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.502255" d="M0 297C0 132.971 132.971 0 297 0H709C873.029 0 1006 132.971 1006 297C1006 461.029 873.029 594 709 594H0V297Z" fill="#F1F3F5"/>
      </svg>


      <nav-bar />

      <router-view />

      <foo-bar :is-expended="$route.name !== 'contact'" />

      <svg v-if="$route.name === 'home'" class="background-leaf-bottom" width="1006" height="594" viewBox="0 0 1006 594" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.502255" d="M1006 297C1006 461.029 873.029 594 709 594H297C132.971 594 0 461.029 0 297C0 132.971 132.971 0 297 0H1006V297Z" fill="#F1F3F5"/>
      </svg>
    </div>

    <new-content-available-toastr
      v-if="newContentAvailable"
      class="new-content-available-toastr"
      :refreshing-app="refreshingApp"
      @refresh="serviceWorkerSkipWaiting"
    ></new-content-available-toastr>
    <apple-add-to-home-screen-modal
      v-if="showAddToHomeScreenModalForApple"
      class="apple-add-to-home-screen-modal"
      @close="closeAddToHomeScreenModalForApple(false)"
    >
    </apple-add-to-home-screen-modal>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import FooBar from '@/components/FooBar'
import NewContentAvailableToastr from '@/components/NewContentAvailableToastr'
import AppleAddToHomeScreenModal from '@/components/AppleAddToHomeScreenModal'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { NavBar,FooBar, NewContentAvailableToastr, AppleAddToHomeScreenModal },
  computed: {
    ...mapGetters('app', ['newContentAvailable']),
    ...mapState('app', ['showAddToHomeScreenModalForApple', 'refreshingApp'])
  },
  methods: mapActions('app', [
    'closeAddToHomeScreenModalForApple',
    'serviceWorkerSkipWaiting'
  ])
}
</script>

<style lang="scss">
@import '@/theme/app';

body {
  height: 100%;

  main {
    height: 100%;
  }

  #app {
    .new-content-available-toastr {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }

    .apple-add-to-home-screen-modal {
      position: absolute;
      bottom: 0;
      right: 0;
      top: 0;
      left: 0;
      height: fit-content;
      width: fit-content;
      margin: auto;
      z-index: 1000;
    }

    .main-wrapper {
      height: 100%;
    }

    .background-leaf {
      position: absolute;
      top: 475px;
      left: 0;
    }

    .background-leaf-bottom {
      position: absolute;
      bottom: -85%;
      right: 0;
      z-index: -1;
    }
  }
}
</style>
