const baseVM = {
    window: window,
    console: console,
    JSON: JSON
}

function demo_radio_1() {
    var vmData = {
        radioData1: 1,
        radioData2: 2
    };
    var vm = new Vue({
        el: $('#radio_1 .bs-example').get(0),
        data: vmData
    });
}
demo_radio_1();

function demo_radio_2() {
    var vmData = {
        radioDataArr: [
            { text: "选项0", id: 0 },
            { text: "选项1", id: 1 },
            { text: "选项2", id: 2 },
        ],
        radioChecked: 1//默认-1为均不选中
    };
    var vm = new Vue({
        el: '#radio_2',
        data: vmData
    });
}
demo_radio_2();

function demo_checkbox_1() {
    var vmData = {
        dataArr: [
            { text: "选项0", id: 0 },
            { text: "选项1", id: 1 },
            { text: "选项2", id: 2 },
            { text: "选项3", id: 3 },
        ],
        checkedArr: [3, 2]
    };
    var vm = new Vue({
        el: '#checkbox_1',
        data: vmData
    });

}
demo_checkbox_1();

function demo_checkbox_2() {
    var vmData = {
        dataArr: [
            { text: "选项0", id: 0 },
            { text: "选项1", id: 1 },
            { text: "选项2", id: 2 },
            { text: "选项3", id: 3 },
        ],
        checked: true,
    };
    var vm = new Vue({
        el: '#checkbox_2',
        data: vmData
    });

}
demo_checkbox_2();

function demo_checkbox_3() {
    var vmData = {
        checkedArr: [true, true, false, false],
    };
    var vm = new Vue({
        el: '#checkbox_3',
        data: vmData
    });
}
demo_checkbox_3();

function demo_checkbox_4() {
    var vm: typeof vmData & typeof vmMethods & vuejs.Vue;
    var vmData = {
        dataArr: [
            { text: "选项0", id: 0 },
            { text: "选项1", id: 1 },
            { text: "选项2", id: 2 },
            { text: "选项3", id: 3 },
        ],
        checkedArr: [0, 1]
    };
    var vmMethods = {
        //也可使用此函数更换
        onchange: function (e, i, id) {
            if (e.target.checked) {
                vm.checkedArr.push(id);
            } else {
                var idx = vm.checkedArr.indexOf(id);
                if (idx != -1) {
                    vm.checkedArr.splice(idx, 1);
                }
            }
        }
    };
    vm = <any>new Vue({
        el: '#checkbox_4',
        data: vmData,
        methods: <any>vmMethods
    });
};
demo_checkbox_4();

function demo_checkbox_5() {
    var vm: typeof vmData & typeof vmMethods & vuejs.Vue;
    var vmData = {
        dataArr: [
            { text: "选项0", id: 0 },
            { text: "选项1", id: 1 },
            { text: "选项2", id: 2 },
            { text: "选项3", id: 3 },
        ],
        checkedArr: [0, 1],
        isCheckall: false,//全选框是否选中
    };
    var vmMethods = {
        /**
         * 全选
         */
        checkall: function () {
            if (vm.isCheckall) {
                vm.checkedArr = vm.dataArr.map(o => o.id);
            } else {
                vm.checkedArr = [];
            }
        },
        /**
         * 反选
         */
        reverse: function () {
            vm.dataArr.forEach(data => {
                var idx = vm.checkedArr.indexOf(data.id);
                if (idx >= 0) {
                    vm.checkedArr.splice(idx, 1);
                } else {
                    vm.checkedArr.push(data.id);
                }
            });
            vm.checkIsCheckall();
        },
        /**
         * 检查“全选”框是否该选中
         */
        checkIsCheckall: function () {
            var checkedLen = vm.checkedArr.length;
            var dataLen = vm.dataArr.length;
            if (checkedLen == dataLen) {
                vm.isCheckall = true;
            } else {
                vm.isCheckall = false;
            }
        }
    };
    vm = <any>new Vue({
        el: '#checkbox_5',
        data: vmData,
        methods: <any>vmMethods
    });
};
demo_checkbox_5();

function demo_trans_1() {
    var vm: typeof vmData & typeof vmMethods & vuejs.Vue;
    var vmData = {
        isShow: true
    };
    var vmMethods = {
    };
    vm = <any>new Vue({
        el: '#trans_1',
        data: vmData,
        methods: <any>vmMethods
    });
}
demo_trans_1();