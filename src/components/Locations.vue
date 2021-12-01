<template>
  <div class="locations">
    <div class="location" v-for="(location, index) in locations" :key="index" :id="location.slug">
      <div class="details">
        <h2>{{ location.country }}</h2>

        <div class="content">
          <div class="col">
            <p v-html="location.address" />
          </div>

          <div class="col">
            <p>
              <strong>Contact</strong><br>
              P : {{ location.phone }}<br>
              M : {{ location.mail }}
            </p>
          </div>
        </div>
      </div>

      <div class="image" :style="{ 'background-image': `url(/img/${location.image})` }" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Locations",
  data() {
    return {
      locations: [
        {
          image: 'locations/image-map-canada.png',
          slug: 'canada',
          country: 'Canada',
          address: '<strong>Designo Central Office</strong><br>3886 Wellington Street<br>Toronto, Ontario M9C 3J5',
          phone: '+1 253-863-8967',
          mail: 'contact@designo.co'
        },
        {
          image: 'locations/image-map-australia.png',
          slug: 'australia',
          country: 'Australia',
          address: '<strong>Designo AU Office</strong><br>19 Balonne Street<br>New South Wales 2443',
          phone: '(02) 6720 9092',
          mail: 'contact@designo.au'
        },
        {
          image: 'locations/image-map-united-kingdom.png',
          slug: 'united-kingdom',
          country: 'United Kingdom',
          address: '<strong>Designo UK Office</strong><br>13  Colorado Way13  Colorado Way<br>Rhyd-y-fro SA8 9GA',
          phone: '078 3115 1400',
          mail: 'contact@designo.uk'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../theme/variables';
@import '../theme/typography';

.locations {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 32px;

  @media (max-width: 768px) {
    row-gap: 120px;
  }

  @media (max-width: 675px) {
    row-gap: 40px;
  }

  .location {
    display: flex;
    align-items: stretch;
    width: 100%;

    &:nth-child(even) {
      flex-direction: row-reverse;

      .details {
        margin-right: 0;
        margin-left: 30px;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;

      &:nth-child(even) {
        flex-direction: column-reverse;

        .details {
          margin-left: 0;
        }
      }
    }

    .details {
      width: calc(100% - 380px);
      margin-right: 30px;
      padding: 88px 95px;
      border-radius: 15px;
      background-color: $light;
      background-image: url('../assets/img/image-locations-background.svg');
      background-repeat: no-repeat;
      background-position: left bottom;
      background-size: auto auto;

      @media (max-width: 768px) {
        width: 100%;
        margin-right: 0;
      }

      @media (max-width: 675px) {
        padding: 80px 24px;
        border-radius: 0;
      }

      h2 {
        margin-bottom: 24px;
        color: $peach;

        @media (max-width: 768px) {
          text-align: left;
        }

        @media (max-width: 675px) {
          text-align: center;
        }
      }

      .content {
        display: flex;
        color: $darkGrey;

        @media (max-width: 675px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      }

      .col {
        width: 50%;

        &:first-of-type {
          margin-right: 30px;
        }

        @media (max-width: 675px) {
          width: 100%;

          &:first-of-type {
            margin-right: 0;
            margin-bottom: 24px;
          }
        }
      }
    }

    .image {
      position: relative;
      overflow: hidden;
      width: 350px;
      border-radius: 15px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      @media (max-width: 768px) {
        width: 100%;
        height: 326px;
        margin-bottom: 24px;
      }

      @media (max-width: 675px) {
        margin-bottom: 0;
        border-radius: 0;
      }
    }
  }
}
</style>
