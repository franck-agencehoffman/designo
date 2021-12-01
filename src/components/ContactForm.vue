<template>
  <div class="contact-form">
    <div class="col">
      <h1>Contact Us</h1>
      <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
    </div>
    <div class="col">
      <form class="form" action="" method="post" charset="UTF-8">
        <div class="input-wrapper">
          <input class="input" type="text" v-model.trim="$v.formData.name.$model" placeholder="Name" @focus="onFocus($event)" @blur="onBlur($event)">
          <div class="error" v-if="$v.formData.name.$error && !$v.formData.name.required">
            <span>Can't be empty</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z" fill="#E7816B"/>
            </svg>
          </div>
        </div>
        <div class="input-wrapper">
          <input class="input" type="email" v-model.trim="$v.formData.email.$model" placeholder="Email" @focus="onFocus($event)" @blur="onBlur($event)">
          <div class="error" v-if="$v.formData.email.$error && !$v.formData.email.required">
            <span>Can't be empty</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z" fill="#E7816B"/>
            </svg>
          </div>
          <div class="error" v-if="$v.formData.email.$error && !$v.formData.email.email">
            <span>Must be valid</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z" fill="#E7816B"/>
            </svg>
          </div>
        </div>
        <div class="input-wrapper">
          <input class="input" type="text" v-model.trim="$v.formData.phone.$model" placeholder="Phone" @focus="onFocus($event)" @blur="onBlur($event)">
          <div class="error" v-if="$v.formData.phone.$error && !$v.formData.phone.required">
            <span>Can't be empty</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z" fill="#E7816B"/>
            </svg>
          </div>
        </div>

        <div class="input-wrapper">
          <textarea class="input" v-model.trim="$v.formData.message.$model" rows="4" placeholder="Your message" @focus="onFocus($event)" @blur="onBlur($event)"></textarea>
          <div class="error" v-if="$v.formData.message.$error && !$v.formData.message.required">
            <span>Can't be empty</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 5H9V12H11V5ZM11 14H9V16H11V14Z" fill="#E7816B"/>
            </svg>
          </div>
        </div>

        <button class="button" type="button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: "ContactForm",
  data() {
    return {
      formData: {
        name: null,
        email: null,
        phone: null,
        message: null
      }
    }
  },
  validations: {
    formData: {
      name: {
        required,
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      message: {
        required
      }
    }
  },
  methods: {
    onFocus(e) {
      const target = e.currentTarget
      const parent = target.parentElement

      parent.classList.add('is-active')
    },
    onBlur(e) {
      const target = e.currentTarget
      const parent = target.parentElement

      parent.classList.remove('is-active')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';
@import '../theme/buttons';
@import '../theme/forms';

  .contact-form {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 55px 95px;
    border-radius: 15px;
    background-image: url('../assets/img/image-form-background.svg');
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
    background-color: $peach;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 71px 58px;
      border-radius: 0;
    }

    @media (max-width: 675px) {
      padding: 72px 24px;
    }

    .col {
      width: 50%;

      @media (max-width: 768px) {
        width: 100%;
      }

      &:first-of-type {
        padding-right: 95px;

        @media (max-width: 768px) {
          padding-right: 0;
          padding-bottom: 40px;
        }
        @media (max-width: 675px) {
          padding-bottom: 48px;
        }
      }

      &:last-of-type {
        text-align: right;
      }
    }

    h1 {
      margin-bottom: 32px;
      color: $white;
    }

    p {
      color: $white;
    }

    .input-wrapper {
      margin-bottom: 24px;
    }

    .button {
      padding-left: 45px;
      padding-right: 45px;
    }
  }
</style>
