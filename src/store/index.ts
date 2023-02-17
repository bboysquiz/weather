import { createStore } from 'vuex'
import axios from 'axios'

// https://api.openweathermap.org/data/2.5/weather?lat=41.678009&lon=44.8325333&appid=67c859d5010465976e7b3e885122af9a
const store = createStore({
    actions: {
        axiosCountries(ctx, country) {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=67c859d5010465976e7b3e885122af9a&units=metric`)
                .then((response) => {
                    const country = response.data
                    ctx.commit('updateCountries', country)
                    if (this.state.cityError === true) {
                        ctx.commit('toggleCityError')
                    }
                })
                .catch((error) => {
                    if (this.state.cityError === false) {
                        ctx.commit('toggleCityError')
                    }
                });
        },
        deleteCountry(ctx, country) {
            ctx.commit('trimCountries', country)
        },
        toggleSettings(ctx) {
            ctx.commit('toggleStatusSettings')
        },
    },
    mutations: {
        updateCountries(state, country) {
            state.countries.push(country)
        },
        trimCountries(state, country) {
            console.log(country)
            state.countries = state.countries.filter(el => el.id != country)
        },
        toggleStatusSettings(state) {
            if (state.settingStatus === 'showed') {
                state.settingStatus = 'hidden'
            } else {
                state.settingStatus = 'showed'
            }
        },
        toggleCityError(state) {
            if (state.cityError === false) {
                state.cityError = true
            } else {
                state.cityError = false
            }
        },
    },
    state: {
        countries: [],
        settingStatus: 'showed',
        cityError: false,
    },
    getters: {
        allCountries(state) {
            return state.countries
        },
        currentSettingStatus(state) {
            return state.settingStatus
        },
        cityError(state) {
            return state.cityError
        },
    },
})

export default store;
