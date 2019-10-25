<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 10:25:32
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-10-18 10:47:31
 -->
### Notice
----
### 1.  Jquery-element  api 
``` js
    // Document References
    // Jquery https://github.com/Jqueryjs/Jquery
    // JQuery http://api.jquery.com

    [index: number]: JqueryElement;
    length: number;

    // Attributes

    attr(): {[attr: string]: string};
    attr(name: string): string;
    attr(name: string, value: AttrFunction): Jquery;
    // `value` *can* be `any` here but:
    // 1. That makes type-checking the function-type useless
    // 2. It's converted to a string anyways
    attr(name: string, value: string): Jquery;
    // The map's values *can* be `any` but they'll all be cast to strings
    // regardless.
    attr(map: {[key: string]: any}): Jquery;

    data(): any;
    data(name: string): any;
    data(name: string, value: any): any;

    val(): string;
    val(value: string): Jquery;

    removeAttr(name: string): Jquery;

    has(selector: string): Jquery;
    has(element: JqueryElement): Jquery;

    hasClass(className: string): boolean;
    addClass(classNames: string): Jquery;

    removeClass(): Jquery;
    removeClass(className: string): Jquery;
    removeClass(func: (index: number, className: string) => string): Jquery;

    toggleClass(className: string): Jquery;
    toggleClass(className: string, toggleSwitch: boolean): Jquery;
    toggleClass(toggleSwitch?: boolean): Jquery;
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Jquery;
    
    is(selector: string): boolean;
    is(element: JqueryElement): boolean;
    is(element: JqueryElement[]): boolean;
    is(selection: Jquery): boolean;
    is(func: (index: number, element: JqueryElement) => boolean): boolean;

    // Form Json
    serialize(): string;
    serializeArray(): {name: string, value: string}[];

    // Traversing
    
    find(selector: string): Jquery;
    find(element: Jquery): Jquery;
    //Direct parent
    parent(selector?: string): Jquery;
    //All parent
    parents(selector?: string): Jquery;
    parentsUntil(selector?: string, filter?: string): Jquery;
    parentsUntil(element: JqueryElement, filter?: string): Jquery;
    parentsUntil(element: Jquery, filter?: string): Jquery;
    // has property like type,id
    prop(name: string): any;
    prop(name: string, value: any): Jquery;

    closest(): Jquery;
    closest(selector: string): Jquery;

    next(selector?: string): Jquery;
    nextAll(): Jquery;
    nextAll(selector: string): Jquery;

    nextUntil(selector?: string, filter?: string): Jquery;
    nextUntil(element: JqueryElement, filter?: string): Jquery;
    nextUntil(element: Jquery, filter?: string): Jquery;

    prev(selector?: string): Jquery;
    prevAll(): Jquery;
    prevAll(selector: string): Jquery;

    prevUntil(selector?: string, filter?: string): Jquery;
    prevUntil(element: JqueryElement, filter?: string): Jquery;
    prevUntil(element: Jquery, filter?: string): Jquery;
    // Subtract collection
    slice(start: number, end?: number): Jquery;

    siblings(selector?: string): Jquery;

    children(selector?: string): Jquery;

    contents(): Jquery;
    // Should use $(el) or $(this) 
    each(func: (index: number, element: JqueryElement) => any): Jquery;
    map(func: (index: number, element: JqueryElement) => any): Jquery;
     
    filter(selector: string): Jquery;
    filter(selection: Jquery): Jquery;
    filter(element: JqueryElement): Jquery;
    filter(elements: JqueryElement[]): Jquery;
    filter(func: (index: number, element: JqueryElement) => boolean): Jquery;

    not(selector: string): Jquery;
    not(selection: Jquery): Jquery;
    not(element: JqueryElement): Jquery;
    not(func: (index: number, element: JqueryElement) => boolean): Jquery;
    //Single of collection
    first(): Jquery;
    last(): Jquery;

    eq(index: number): Jquery;
    // JqueryElement[]
    get(): any[];
    //JqueryElement
    get(index: number): any;

    index(): number;
    index(selector: string): number;
    index(selection: Jquery): number;

    end(): Jquery;

    add(selectorOrHtml: string): Jquery;
    add(selector: string, context: Document): Jquery;
    add(element: JqueryElement): Jquery;
    add(elements: JqueryElement[]): Jquery;
    add(selection: Jquery): Jquery;

    addBack():Jquery;
    addBack(filter: string):Jquery;

    // Manipulation
    appendTo(target: Jquery) : Jquery
    prependTo(target: Jquery) : Jquery

    append(content: string, ...contents: any[]): Jquery;
    append(content: Document, ...contents: any[]): Jquery;
    append(content: Document[], ...contents: any[]): Jquery;
    append(content: Jquery, ...contents: any[]): Jquery;

    prepend(content: string, ...contents: any[]): Jquery;
    prepend(content: Document, ...contents: any[]): Jquery;
    prepend(content: Document[], ...contents: any[]): Jquery;
    prepend(content: Jquery, ...contents: any[]): Jquery;

    after(content: string, ...contents: any[]): Jquery;
    after(content: Document, ...contents: any[]): Jquery;
    after(content: Document[], ...contents: any[]): Jquery;
    after(content: Jquery, ...contents: any[]): Jquery;

    insertAfter(content: string): Jquery;
    insertAfter(content: Document): Jquery;
    insertAfter(content: Jquery): Jquery;

    before(content: string, ...contents: any[]): Jquery;
    before(content: Document, ...contents: any[]): Jquery;
    before(content: Document[], ...contents: any[]): Jquery;
    before(content: Jquery, ...contents: any[]): Jquery;

    insertBefore(content: string): Jquery;
    insertBefore(content: Document): Jquery;
    insertBefore(content: Jquery): Jquery;

    remove(selector?: string): Jquery;

    replaceWith(content: string): Jquery;
    replaceWith(content: JqueryElement): Jquery;
    replaceWith(content: JqueryElement[]): Jquery;
    replaceWith(content: Jquery): Jquery;
    replaceWith(content: () => Jquery): Jquery;

    empty(): Jquery;

    html(): string | null;
    html(html: string): Jquery;

    text(): string;
    text(text: string): Jquery;

    wrap(content: string): Jquery;
    wrap(content: Document): Jquery;
    wrap(content: Jquery): Jquery;
    // like background
    css(propertyName: string): string;
    css(propertyNames: string[]): string[];
    css(propertyName: string, value: string): Jquery;
    css(propertyName: string, value: number): Jquery;
    css(propertyName: string, func: (index: number, value: string) => string): Jquery;
    css(propertyName: string, func: (index: number, value: string) => number): Jquery;
    css(properties: Object): Jquery;

    // Rendering

    // Miscellaneous

    clone(): Jquery;

    // Not Documented

    toArray(): JqueryElement[];
``` 
### 2. Selecctor
| 选择器 | 实例选取  
|-----------|--------------|
| * | 所有元素  |
| #id | id="lastname" 的元素  |
| .class | 所有 class="intro" 的元素  |
| element | 所有元素  |
| .class.class | 所有 class="intro" 且 class="demo" 的元素  |
| :first | 第一个元素  |
| :last | 最后一个元素  |
| :even | 所有偶数元素  |
| :odd | 所有奇数元素  |
| :eq(index) | ")列表中的第四个元素（index 从 0 开始）  |
| :gt(no) | ")列出 index 大于 3 的元素  |
| :lt(no) | ")列出 index 小于 3 的元素  |
| :not(selector) | "所有不为空的 input 元素  |
| :header | 所有标题元素 \<h1> - \<h6>  |
| :animated |  所有动画元素  |
| :contains(text) | "包含指定字符串的所有元素  |
| :empty | 无子（元素）节点的所有元素  |
| :hidden | 所有隐藏的 <p> 元素  |
| :visible | 所有可见的表格  |
| s1,s2,s3 | 所有带有匹配选择的元素  |
| [attribute] | 所有带有 href 属性的元素  |
| [attribute=value] | 所有 href 属性的值等于 "#" 的元素  |
| [attribute!=value] | 所有 href 属性的值不等于 "#" 的元素  |
| [attribute$=value] | 所有 href 属性的值包含以 ".jpg" 结尾的元素  |
| :input | 所有 \<input> 元素  |
| :text | 所有 type="text" 的 <input> 元素  |
| :password | 所有 type="password" 的 <input> 元素  |
| :radio | 所有 type="radio" 的 \<input> 元素  |
| :checkbox | 所有 type="checkbox" 的 \<input> 元素  |
| :submit | 所有 type="submit" 的 \<input> 元素  |
| :reset | 所有 type="reset" 的 \<input> 元素  |
| :button | 所有 type="button" 的 \<input> 元素  |
| :image | 所有 type="image" 的 \<input> 元素  |
| :file | 所有 type="file" 的 \<input> 元素  |
| :enabled | 所有激活的 input 元素  |
| :disabled | 所有禁用的 input 元素  |
| :selected | 所有被选取的 input 元素  |
| :checked | 所有被选中的 input 元素  |

-----------------------------------------------
jQuery.extend(object): c# 扩展方法
jQuery.fn.extend(object): 继承类型

----
### Ajax

- ***global setup***
```js
$.ajaxSetup({
    dataType : "json",
    contentType : "application/json",
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    error : function(jqXHR, textStatus, errorThrown) {
        switch (jqXHR.status) {
        case (500):
            layer.alert('服务器系统内部错误', {
                icon : 2
            });
            break;
        case (401):
            layer.alert('未登录', {
                icon : 2
            });
            break;
        case (403):
            layer.alert('无权限执行此操作', {
                icon : 2
            });
            break;
        case (408):
            layer.alert('请求超时', {
                icon : 2
            });
            break;
        default:
            layer.alert('未知错误,请联系管理员', {
                icon : 2
            });
        }
    },
    cache : false
});
```
- ***config***

|name|type|description|
|---|---|--|
|url|String|(默认: 当前页地址) 发送请求的地址。|
|type|String|(默认: "GET") 请求方式 ("POST" 或 "GET")， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。|
|timeout|Number|设置请求超时时间（毫秒）。此设置将覆盖全局设置。|
|async|Boolean|	(默认: true) 默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。|
|beforeSend|Function|发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数<br> js function (XMLHttpRequest) {this; /the options for this ajax request          } |
|cache|Boolean|	(默认: true) jQuery 1.2 新功能，设置为 false 将不会从浏览器缓存中加载请求信息。
|complete|Function|请求完成后回调函数 (请求成功或失败时均调用)。参数： XMLHttpRequest 对象，成功信息字符串。function (XMLHttpRequest, textStatus) {this; // the options for this ajax request          }
|contentType|String|(默认: "application/x-www-form-urlencoded") 发送信息至服务器时内容编码类型。默认值适合大多数应用场合。告诉服务器从浏览器提交过来的数据格式。例如：我们提交数据时假如使用了 JSON2.js 中方法 JSON.stringify(obj) 格式化为json字符串后，再默认提交就会报错。这个时候就需要指定提交的内容格式为："application/json"。
|data|Object|String	发送到服务器的数据。若data数据类型为JavaScript对象或数 组，Jquery在提交之前自动调用JQuery.param()方法把要发送的数据编码成为"application/x-www-form- urlencoded"格式的数据（即 name=value&name1=value1）；JavaScript对象必须为 Key/Value 格式；如果为数组，jQuery 将自动为不同值对应同一个名称。如 {foo:["bar1", "bar2"]} 转换为 '&foo=bar1&foo=bar2'；若data数据类型为String类型，则直接默认该数据已经按照"application/x-www-form-urlencoded"格式编码完成，不再转换。
|processData|选项可以控制是否进行转换。|该选项默认为true。
|dataType|String|预期服务器返回的数据类型。设定HttpHeader中“Accept”域的内容，告诉服务器浏览器可以想要返回的数据格式类型，同时JQuery也会根据该类型对返回的数据进行处理。如果不指定，jQuery 将自动根据 HTTP 包 MIME 信息返回 responseXML 或 responseText，并作为回调函数参数传递，可用值:<br>"xml": 返回 XML 文档，可用 jQuery 处理。"html": 返回纯文本 HTML 信息；包含 script 元素。<br>"script": 返回纯文本 JavaScript 代码。不会自动缓存结果<br>"json": 返回 JSON 数据 。JQuery将返回的字符串格式数据自动转化为Javascript对象，便于直接使用obj.property格式访问。若没有指定该选项，即使返回的是JSON格式的字符串，JQuery也不会自动转换。<br>"jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
|error|	Function|(默认: 自动判断 (xml 或 html)) 请求失败时将调用此方法。这个方法有三个参数：XMLHttpRequest 对象，错误信息，（可能）捕获的错误对象。function (XMLHttpRequest,textStatus, errorThrown) {          // 通常情况下textStatus和errorThown只有其中一个有值           this; // the options for this ajax request          }
|global|Boolean|(默认: true) 是否触发全局 AJAX 事件。设置为 false 将不会触发全局 AJAX 事件，如 ajaxStart 或 ajaxStop 。可用于控制不同的Ajax事件
|ifModified|Boolean|(默认: false) 仅在服务器数据改变时获取新数据。使用 HTTP 包 Last-Modified 头信息判断。
|processData|Boolean|(默认: true) 默认情况下，发送的数据将被转换为对象(技术上讲并非字符串) 以配合默认内容类型 "application/x-www-form-urlencoded"。如果要发送 DOM 树信息或其它不希望转换的信息，请设置为 false。
|success|Function|请求成功后回调函数。这个方法有两个参数：服务器返回数据，返回状态function (data, textStatus) {          // data could be xmlDoc, jsonObj, html, text, etc...          this; // the options for this ajax request          }
　　


 