const { createApp } = Vue
const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
createApp({
    data() {
        return {
            eventos: []

        }
    },

    created() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                this.eventos = data.events
                console.log(this.eventos);
            })
            .catch(err => console.log(err))
    },
    methods: {

    },
    computed: {

    }
}).mount("#app")