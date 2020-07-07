/**
 * @file 接口调用层，只处理接口请求，返回结果。不处理逻辑。
 */
define(['axios', '../constant/index'], function (axios, constant) {
    return {
        /**
         * @function 请求获取posts，不处理数据！
         */
        getPosts: async function () {
            return await axios.get(constant.GET_POSTS, {
                params: {
                    test: 12345
                }
            });
        }
    }
});
