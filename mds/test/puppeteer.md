### Apis
---------

``` js
page.type(); // 获取输入框焦点并输入文字
page.keyboard.press(); //模拟键盘按下某个按键，目前mac上组合键无效为已知bug
page.waitFor((); // 页面等待，可以是时间、某个元素、某个函数
page.frames();  // 获取当前页面所有的 iframe，然后根据 iframe 的名字精确获取某个想要的 iframe
iframe.$('.srchsongst'); //获取 iframe 中的某个元素
iframe.evaluate(); // 在浏览器中执行函数，相当于在控制台中执行函数，返回一个 Promise
Array.from(); 将类数组对象转化为对象
page.click(); 点击一个元素
iframe.$eval(); // 相当于在 iframe 中运行 document.queryselector 获取指定元素，并将其作为第一个参数传递
iframe.$$eval();  //相当于在 iframe 中运行 document.querySelectorAll 获取指定元素数组，并将其作为第一个参数传递
```

### Configs
----

-  使用Headless模式
```js
const browser = await puppeteer.launch({headless: false}); // default is true
```
-  使执行本地版本的Chrome或者Chromium
```js
const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
```
-  延迟执行Puppeteer
```js
 const browser = await puppeteer.launch({
   headless: false,
   slowMo: 250 // slow down by 250ms
 });
 ```
-  获取控制台输出
可以监听console的事件，也可以通过evaluate来执行console
```js
 page.on('console', msg => console.log('PAGE LOG:', msg.text()));
 await page.evaluate(() => console.log(`url is ${location.href}`));
```

-  设置页面视窗大小
``` js
await page.setViewport({
        width: 1366,
        height: 768 * 2
    });
```