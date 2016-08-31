namespace demo_1_todo {
    declare var VM: typeof vmData & typeof vmMethods & vuejs.Vue;
    Vue.config.debug = true;
    Vue.config.devtools = true;
    var vmData = {
        todoText: "todo xxxx",
        todos: [],
        arr: [6, 7, 8, 9, 0, 6, 7, 8, 10],

    };
    var vmMethods = {
        addTodo: function (text) {
            vm.todos.push({
                text: vm.todoText
            });
        }
    }
    var vm: typeof VM = <any>new Vue({
        el: '#app',
        data: vmData,
        methods: <any>vmMethods
    });
    
}

