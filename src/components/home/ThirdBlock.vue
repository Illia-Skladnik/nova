<style scoped lang="scss">
  @import '@/assets/styles/_mixins.scss';
  @import '@/assets/styles/variables.scss';

  .third {
    background-color: $dark-navy-blue-color;
    height: 1099px;
    padding: 40px 11px;


    @include onDesktop {
      height: 732px;
      padding: 80px 0;
      display: flex;
      width: 1240px;
      margin: 0 auto;
    }

    &__map {
      display: block;
      height: 358px;
      width: 352px;
      margin: 0 auto;

      @include onDesktop {
        height: 572px;
        width: 563px;
      }
    }
      &__title {
        color: $white-color;
        font-family: 'Poppins', sans-serif;
        font-size: 32px;
        font-weight: 600;
        line-height: 41px;
        margin-bottom: 30px;

        @include onDesktop {
          font-size: 56px;
          line-height: 68px;
          margin-bottom: 40px;
        }
      }

      &__description {
        display: block;
        color: #E6E6E6;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 30px;

        @include onDesktop {
          color: white;
          margin-bottom: 35px;
        }
      }

      &__item {
        color: #E6E6E6;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;


        @include onDesktop {
          margin-bottom: 15px;
        }
      }

      &__circle {
        margin-right: 10px;
        margin-bottom: 2px;
      }

      &__text-wrapper {
        width: 351px;
        margin: 0 auto;

        @include onDesktop {
          width: 525px;
          margin-right: 125px;
        }
      }

      &__list-item {
        list-style-type: none;
        margin-bottom: 20px;
      }

      .third__list-item:last-of-type {
        margin-bottom: 40px;
      }

      &__wrapper {
        width: 100%;
        background-color: $dark-navy-blue-color;
      }
  }
</style>

<template>
  <div class="third__wrapper">
  <div class="third">
    <div class="third__text-wrapper">
      <h2 class="third__title">Jakość doceniona w Europie</h2>
      <span class="third__description">Polibutylen został wprowadzony na rynek na początku lat 70. W roku 1982 powstał system rur i kształtek do ciepłej i zimnej wody oraz ogrzewania pod nazwą  Terrain SDP. System zdominował rynek hiszpański, aktualnie zdobywa kolejne rynki europejskie w tym Polskę. W ciągu 40 lat marka stworzyła imponującą infrastrukturę:</span>
      <ul>
        <li class="third__list-item">
          <svg class="third__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="third__item">4 zakłady produkcyjne w Hiszpanii oraz produkcja maszyn wtryskowych</span>
        </li>
        <li class="third__list-item">
          <svg class="third__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="third__item">2 nowoczesne laboratoria</span>
        </li>
        <li class="third__list-item">
          <svg class="third__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="third__item">20 własnych magazynów oraz sieć wyłącznych dystrybutorów</span>
        </li>
        <li class="third__list-item">
          <svg class="third__circle" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="4" fill="#FFCC00"/>
          </svg>
          <span class="third__item">Rozwijająca się sieć handlowa z kilkudziesięcioma profesjonalistami do Twojej dyspozycji</span>
        </li>
      </ul>
    </div>

    <img class="third__map" :src="map" alt="map">
  </div>
</div>

</template>


<script setup>
  const map = new URL('@/assets/images/mapka.png', import.meta.url);
</script>
