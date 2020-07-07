/**
 * @file 处理业务逻辑：根据需要调用service层的请求接口，并对接口返回的结果进行业务逻辑处理。
 */
define(['../service/index', '../common/index'], function (service, common) {
    console.log('In firstScript.js', {
        service,
        common
    });
    return {
        sayHello: function () {
            let span = common.createElement('span', 'Hello, I am the business logic processing layer.');
            document.getElementById('app').append(span);
            document.getElementById('app').append(common.createBr());
        },
        posts: async function () {
            document.getElementById('app').append(common.createBr());
            let res = await service.getPosts();

            // ...拿着接口返回的数据，处理大量的业务逻辑.......

            let span = common.createElement('span', JSON.stringify(res));
            document.getElementById('app').append(span);
        },
        useLodash: function () {
            let other = common.useLodash();
            document.write(`lodash方法输出结果：${JSON.stringify(other)}`);
        }
    }
});
