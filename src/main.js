
/**
 * 通过 `npm inistall lodash --save` 安装lodash依赖后，便可在此处使用该依赖。  
 */
define(['./firstScript', 'lodash'], function (firstScript, _) {
  firstScript.hello();

  let array = [1];
  let other = _.concat(array, 2, [3], [[4]]);
  document.write(`<br/>`);
  document.write(`\n lodash方法输出结果：${JSON.stringify(other)}`);
});
