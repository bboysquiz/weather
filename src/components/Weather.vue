<template>
    <ul v-show="currentSettingStatus === 'showed'" v-for="country in allCountries" :key="country.id" class="widget__list">
        <li class="widget__list-item">
            <div class="widget__header">
              <h2 class="widget__location">{{ country.name }} , {{ country.sys.country }}</h2>
            </div>
            <div class="widget__main-info">
              <img class="widget__img" src="https://img.icons8.com/emoji/48/null/sun-behind-small-cloud.png" />
              <span class="widget__degree">{{ country.main.temp }}</span>
            </div>
            <div class="widget__data">
              <p class="widget__descr">Feels like {{ country.main.feels_like }}, {{ country.weather[0].description }}. Light breeze</p>
              <p class="widget__wind"><img src="../assets/nav.svg" alt="nav" class="widget__nav-icon"> {{ country.wind.speed }}m/s SSE</p>
              <p class="widget__pressure">{{ country.main.pressure }}hPa</p>
              <p class="widget__humidity">Humidity: {{ country.main.humidity }}%</p>
              <p class="widget__visibility">Visibility: {{ country.visibility }}m</p>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
    computed: mapGetters(["allCountries", "currentSettingStatus"]),
})
</script>

<style lang="sass">
.widget
    &__list
        padding: 15px
        width: 100%
        display: flex
        flex-wrap: wrap
        color: #080808
        &-item
            list-style-type: none
    &__header
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
    &__location
        font-size: 14px
        font-weight: 700
        color: #080808
    &__main-info
        display: flex
        justify-content: flex-start
        align-items: center
    &__img
        width: 70px
        height: 70px
    &__degree
        font-size: 40px
        margin-left: 20px
    &__data
        display: flex
        justify-content: space-between
        width: 100%
        flex-wrap: wrap
        font-size: 12px
    &__descr
        text-align: left
        font-size: 12px
    &__wind
        display: flex
        align-items: center
        justify-content: space-between
        width: 90px
    &__nav-icon
        width: 23px
        height: 23px
    &__pressure
        display: flex
        align-items: center
        justify-content: flex-start
        width: 100px
    &__humidity
        width: 100px
        text-align: left
    &__dew
        text-align: left
        width: 100px
    &__visability
        text-align: left
</style>