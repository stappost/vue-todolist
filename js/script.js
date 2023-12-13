const { createApp } = Vue;

createApp({
    data(){
        return{
            text_task: "",
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
        add_task(){
            this.todoList.push({text:this.text_task, done:false})
            this.text_task= "";
        }
    }
}).mount('#app')