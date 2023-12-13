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
                    modify: false,
                },
                {
                    text:'comprare il collare per il cane',
                    done: false,
                    modify: false,
                },
                {
                    text:'portare a spasso il cane',
                    done: false,
                    modify: false,
                },
                {
                    text:'rincorrere il cane',
                    done: false,
                    modify: false,
                },
                {
                    text:'riportare il collare difettoso in negozio',
                    done: false,
                    modify: false,
                },
            ]
        }
    },
    methods:{
        add_task(){
            this.todoList.push({text:this.text_task, done:false})
            this.text_task= "";
        },
        modify_task(todo){
            todo.text = this.text_task;
            this.text_task= "";
            todo.modify = false;
        }
    }
}).mount('#app')