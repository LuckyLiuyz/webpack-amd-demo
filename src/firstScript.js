define(['./secondScript'], function (secondScript) {
  console.log('Color from secondScript', secondScript.color);

  return {
    hello: function () {
      let msg = 'Hello from firstScript';
      console.log(msg);
      document.write(msg);

    }
  }
});
