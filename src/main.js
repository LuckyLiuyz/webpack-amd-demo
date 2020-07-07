/**
 * 通过 `npm inistall lodash --save` 安装lodash依赖后，便可在此处使用该依赖。  
 */
define(['./business/firstScript', './common/index'], function (firstScript, common) {
    console.log('In main.js', {
        firstScript,
        common
    });

    firstScript.sayHello();
    firstScript.posts();
    firstScript.useLodash();
});
