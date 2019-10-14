<!--
 * @Descripttion: 
 * @version: 
 * @Author: fuanlei
 * @Date: 2019-09-30 10:25:32
 * @LastEditors: fuanlei
 * @LastEditTime: 2019-09-30 11:36:33
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

 