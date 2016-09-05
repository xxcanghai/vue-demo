(function () {
    /**
     * 动态获取每个demo的实际执行的js代码
     */
    function setJs() {
        $("fieldset").each(function (i, field) {
            var $field = $(field);
            var code = window["demo_" + $field.attr("id")].toString();
            code = $.trim(code);
            code = code.replace(/function .*?\(.*?\{(\r\n|\r|\n)/, "")
                .replace(/\}$/, "")
                .replace(/^    |(\r\n|\r|\n)\s{4}/gi, "$1");
            var $pre = $("<pre>").append($("<code>").html(code).addClass("javascript")).addClass("javascript");
            $field.append($pre);
            hljs.highlightBlock($pre.get(0));
        });
    }
    /**
     * 将未编译前的HTML源码输出到dom
     */
    function setHtml() {
        $("fieldset").each(function (i, field) {
            var $field = $(field);
            var code = window["html_" + $field.attr("id")];
            if (code == undefined)
                return;
            var reg = new RegExp("(\\r\\n|\\r|\\n)\\s{0," + getTabLength(code) + "}", "gi");
            code = $.trim(code);
            code = code.replace(reg, "$1");
            var $pre = $("<pre>").append($("<code>").text(code).addClass("html")).addClass("html");
            $field.append($pre);
            hljs.highlightBlock($pre.get(0));
        });
    }
    /**
     * 动态获取每个demo的CSS样式
     */
    function setStyle() {
        $("fieldset").each(function (i, field) {
            var $field = $(field);
            var $style = $field.find("style");
            if ($style.length == 0)
                return;
            var code = $style.html();
            var reg = new RegExp("(\\r\\n|\\r|\\n)\\s{0," + getTabLength(code) + "}", "gi");
            code = $.trim(code);
            code = code.replace(reg, "$1");
            var $pre = $("<pre>").append($("<code>").html(code).addClass("css")).addClass("css");
            $field.append($pre);
            hljs.highlightBlock($pre.get(0));
        });
    }
    /**
     * 获取缩进长度
     *
     * @param {string} str
     * @returns {number}
     */
    function getTabLength(str) {
        return str.match(/^(\s*?)[^\s\r\n]/)[0].length;
    }
    /**
     * 在vue渲染后执行
     */
    function init() {
        setJs();
        setHtml();
        setStyle();
    }
    init();
}());
