var demo_1_todo;
(function (demo_1_todo) {
    Vue.config.debug = true;
    Vue.config.devtools = true;
    var vmData = {
        todoText: "todo xxxx",
        todos: [],
        arr: [6, 7, 8, 9, 0, 6, 7, 8, 10]
    };
    var vmMethods = {
        addTodo: function (text) {
            vm.todos.push({
                text: vm.todoText
            });
        }
    };
    var vm = new Vue({
        el: '#app',
        data: vmData,
        methods: vmMethods
    });
})(demo_1_todo || (demo_1_todo = {}));
