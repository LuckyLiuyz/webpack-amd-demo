/**
 * @file 统一提供lodash的公共方法
 */
define(['lodash'], function (secondScript) {
    return {
        useLodash: function () {
            let array = [1];
            let other = _.concat(array, 2, [3], [[4]]);
            document.write(`<br/>`);
            document.write(`lodash方法输出结果：${JSON.stringify(other)}`);
        }
    }
});
