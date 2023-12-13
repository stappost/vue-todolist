const { createApp } = Vue;

createApp({
    data(){
        return{
            text_task: "",
            checked: 0,
            // TO DO LIST 
            todoList:[
                {
                    text:'fare la spesa',
                    done: false,
                    modify: false,
                    show: true,
                    
                },
                {
                    text:'comprare il collare per il cane',
                    done: false,
                    modify: false,
                    show: true,
                },
                {
                    text:'portare a spasso il cane',
                    done: false,
                    modify: false,
                    show: true,
                },
                {
                    text:'rincorrere il cane',
                    done: false,
                    modify: false,
                    show: true,
                },
                {
                    text:'riportare il collare difettoso in negozio',
                    done: false,
                    modify: false,
                    show: true,
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
        },
        filtro(){
            this.todoList.forEach(todo => {
                if(!todo.done && this.checked == 1 || todo.done && this.checked == 2){
                    todo.show = false
                    console.log(todo.show)
                }
                else{
                    todo.show = true
                }
            });
        }
    }
}).mount('#app')