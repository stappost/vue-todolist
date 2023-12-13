const { createApp } = Vue;

createApp({
    data(){
        return{
            // TO DO LIST 
            todoList:[
                {
                    text:'fare la spesa',
                    done: false,
                },
                {
                    text:'comprare il collare per il cane',
                    done: false,
                },
                {
                    text:'portare a spasso il cane',
                    done: false,
                },
                {
                    text:'rincorrere il cane',
                    done: false,
                },
                {
                    text:'riportare il collare difettoso in negozio',
                    done: false,
                },
            ]
        }
    },
    methods:{

    }
}).mount('#app')