const { createApp } = Vue
const apiUrl = "https://mindhub-xj03.onrender.com/api/amazing"
createApp({
    data() {
        return {
            eventos: [],
            checkbox: [],
            inputCheck: [],
            eventosFiltrados: [],
            texto:""
            

        }
    },

    created() {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                this.eventos = data.events
                console.log(this.eventos);
                this.checkbox = [...new Set(data.events.map(evento=>evento.category))]
                console.log(this.checkbox);

            })

            .catch(err => console.log(err))

    },
    methods: {

    },
    computed: {
        fitrosCruzados:function(){
            let arregloFiltrado = this.inputCheck.length>0? this.eventos.filter(evento => this.inputCheck.includes(evento.category)):this.eventos
            this.eventosFiltrados = this.texto ==""? arregloFiltrado: arregloFiltrado.filter(evento => evento.name.toLowerCase().includes(this.texto.toLowerCase().trim()))
        }

    }
}).mount("#app")