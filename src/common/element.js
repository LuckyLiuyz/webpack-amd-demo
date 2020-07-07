/**
 * @file 统一提供DOM操作的公共方法，创建DOM等
 */
define(function () {
    return {
        /**
         * @function 创建DOM元素
         * @param {string} type 要创建的DOM类型
         * @param {string} content 要创建的DOM的内容
         */
        createElement: function (type, content) {
            let node = document.createElement(type);
            node.innerHTML = JSON.stringify(content);
            return node;
        },
    }
});
