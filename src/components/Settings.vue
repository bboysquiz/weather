<template>
    <div v-show="allCountries !== 0" class="widget__settings">
        <div class="widget__settings-header">
            <h2 v-show="allCountries.length !== 0" class="widget__settings-title">Settings</h2>
            <h2 v-show="allCountries.length === 0" class="widget__settings-title">Find out about a weather in your city
            </h2>
            <img @click="toggleSettings" v-show="allCountries.length !== 0" class="widget__settings-close"
                src="../assets/close.svg" alt="close">
        </div>
        <CountrySettings :countries="allCountries" />
        <div class="widget__settings-input-block">
            <h2 class="widget__settings-title">Add Location:</h2>
            <form class="widget__settings-form" @submit.prevent="addCountry">
                <p v-if="cityError" class="widget__settings-validation">This city is not found. Try again.</p>
                <input type="text" class="widget__settings-input" placeholder="Enter city..." v-model="inputValue">
                <input class="widget__settings-enter" type="submit" value=" ">
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CountrySettings from './CountrySettings.vue';
import { mapGetters, mapActions } from 'vuex'

export default defineComponent({
    data() {
        return {
            inputValue: "",
            status: "waiting",
        };
    },
    computed: mapGetters(["allCountries", "cityError"]),
    methods: {
        ...mapActions(['axiosCountries', 'toggleSettings', 'toggleCityError','toggleSameCityError']),
        addCountry() {
                this.axiosCountries(this.inputValue)
                this.inputValue = ''
        },
    },
    components: { CountrySettings }
})

</script>


<style scoped lang="sass">
.widget
    &__settings
        display: flex
        justify-content: flex-start
        flex-wrap: wrap
        width: 100%
        background-color: #e8e8e8
        padding: 15px
        &-header
            display: flex
            justify-content: space-between
            width: 100%
            align-items: center
        &-title
            font-size: 14px
            font-weight: 700
            color: #080808  
        &-close
            width: 25px
            height: 25px
            cursor: pointer  
        &-input
            width: 180px
            padding-left: 5px
            font-size: 12px
            font-weight: 700
            height: 20px
            &-block
                display: flex
                margin-top: 10px
                justify-content: flex-start
                flex-wrap: wrap
                align-items: center
        &-enter
            width: 25px
            height: 25px
            cursor: pointer
            background-image: url(../../src/assets/ok.svg)
            background-size: contain
            border: none
            background-color: transparent
        &-form
            width: 100%
            display: flex
            justify-content: space-between
        
</style>
