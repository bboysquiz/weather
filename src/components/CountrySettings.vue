<template>
    <ul class="widget__settings-countries">
        <li v-for="country in countries" :key="country.id" class="widget__settings-country">
            <div class="widget__settings-country-block">
                <img src="../assets/hamburger.svg" alt="hamburger" class="widget__settings-hamburger">
                <span class="widget__settings-country-name">{{ country.name }} , {{ country.sys.country }}</span>
            </div>
            <img @click='deleteItem(country.id)' src="../assets/trash.svg" alt="trash" class="widget__settings-trash">
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex'

export default defineComponent({
    props: ['countries'],
    methods: {
        ...mapActions(['deleteCountry']),
        deleteItem(id) {
            this.deleteCountry(id)
        },
    }
})
</script>

<style scoped lang="sass">
.widget
    &__settings
        &-countries
            width: 100% 
            display: flex
            justify-content: flex-start
            flex-wrap: wrap
            margin-top: 5px
            list-style-type: none
            padding-left: 0
        &-country
            display: flex
            flex-wrap: wrap
            width: 100%
            justify-content: space-between
            border: 1px solid #000
            background-color: #fff
            margin-bottom: 7px
            &-block
                display: flex
                align-items: center
                justify-content: space-between
            &-name
                font-size: 12px
                font-weight: 700
                margin-left: 5px
                color: #080808
        &-hamburger
            width: 25px
            height: 25px
            cursor: pointer
        &-trash
            width: 25px
            height: 25px
            cursor: pointer
</style>