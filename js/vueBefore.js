(function () {
    /**
     * 动态获取demo的HTML未编译前的源码
     */
    function setHtml() {
        $("fieldset").each(function (i, field) {
            var $field = $(field);
            var code = $field.find(".bs-example").html();
            var id = $field.attr("id");
            window["html_" + id] = code;
            // code = htmlEncode(code)
            //     .replace(/\{/g, "[")
            //     .replace(/\}/g, "]");
            // var $pre = $("<pre>").html(code);
            // $field.append($pre);
            // hljs.highlightBlock($pre.get(0));
        });
    }
    /**
     * 用正则表达式实现html转码
     * @param {string = ""} str 要编码的字符串
     */
    function htmlEncode(str) {
        if (str === void 0) { str = ""; }
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&/g, "&amp;");
        s = s.replace(/</g, "&lt;");
        s = s.replace(/>/g, "&gt;");
        s = s.replace(/ /g, "&nbsp;");
        s = s.replace(/\'/g, "&#39;");
        s = s.replace(/\"/g, "&quot;");
        return s;
    }
    ;
    /**
     * 用正则表达式实现html解码
     * @param {string = ""} str 要解码的字符串
     */
    function htmlDecode(str) {
        if (str === void 0) { str = ""; }
        var s = "";
        if (str.length == 0)
            return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");
        return s;
    }
    ;
    function init() {
        setHtml();
    }
    init();
}());
