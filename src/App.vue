<template>
  <div class="widget__container">
    <img v-show="allCountries.length !== 0 && currentSettingStatus !== 'hidden'" @click="toggleSettings"
      class="widget__button-settings" src="./assets/settings.svg">
    <Weather />
    <Settings v-show="allCountries.length === 0 || currentSettingStatus === 'hidden'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Settings from './components/Settings.vue';
import Weather from './components/Weather.vue'
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
  components: { Settings, Weather },
  computed: mapGetters(["allCountries", "currentSettingStatus"]),
  methods: mapActions(["toggleSettings"]),
})
</script>


<style scoped lang="sass">
body
  box-sizing: border-box
  padding: 0
  margin: 0
  outline: 0
  
.widget
  &__container
    width: 250px
    margin: 10px auto
    display: flex
    flex-wrap: wrap
    justify-content: center
    background-color: #e8e8e8
    position: relative
  &__button
    &-settings
      width: 25px
      height: 25px
      cursor: pointer
      position: absolute
      top: 10px
      right: 10px
</style>
