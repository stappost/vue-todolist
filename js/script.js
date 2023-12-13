const { createApp } = Vue;

createApp({
    data(){
        return{
            text_task: "",
            descr_task: "",
            checked: 0,
            // TO DO LIST 
            todoList:[
                {
                    text:'fare la spesa',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis quia. Magnam odio debitis unde eius, quo numquam dolores cupiditate esse non, minima, repellendus fuga harum ipsam sint perspiciatis. Ipsam?",
                    done: false,
                    modify: false,
                    modify_descr: false,
                    read: false,
                    show: true,
                    
                },
                {
                    text:'comprare il collare per il cane',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis quia. Magnam odio debitis unde eius, quo numquam dolores cupiditate esse non, minima, repellendus fuga harum ipsam sint perspiciatis. Ipsam?",
                    done: false,
                    modify: false,
                    modify_descr: false,
                    read: false,
                    show: true,
                },
                {
                    text:'portare a spasso il cane',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis quia. Magnam odio debitis unde eius, quo numquam dolores cupiditate esse non, minima, repellendus fuga harum ipsam sint perspiciatis. Ipsam?",
                    done: false,
                    modify: false,
                    modify_descr: false,
                    read: false,
                    show: true,
                },
                {
                    text:'rincorrere il cane',
                    description: "gLorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis quia. Magnam odio debitis unde eius, quo numquam dolores cupiditate esse non, minima, repellendus fuga harum ipsam sint perspiciatis. Ipsam?",
                    done: false,
                    modify: false,
                    modify_descr: false,
                    read: false,
                    show: true,
                },
                {
                    text:'riportare il collare difettoso in negozio',
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, veritatis quia. Magnam odio debitis unde eius, quo numquam dolores cupiditate esse non, minima, repellendus fuga harum ipsam sint perspiciatis. Ipsam?",
                    done: false,
                    modify: false,
                    modify_descr: false,
                    read: false,
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
        },
        modify_descr(todo){
            todo.description = this.descr_task;
            this.descr_task= "";
            todo.modify_descr = false;
        },
    }
}).mount('#app')