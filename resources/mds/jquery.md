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
### 1.  jquery-elemnet   
``` js
    // Document References
    // Cheerio https://github.com/cheeriojs/cheerio
    // JQuery http://api.jquery.com

    [index: number]: CheerioElement;
    length: number;

    // Attributes

    attr(): {[attr: string]: string};
    attr(name: string): string;
    attr(name: string, value: AttrFunction): Cheerio;
    // `value` *can* be `any` here but:
    // 1. That makes type-checking the function-type useless
    // 2. It's converted to a string anyways
    attr(name: string, value: string): Cheerio;
    // The map's values *can* be `any` but they'll all be cast to strings
    // regardless.
    attr(map: {[key: string]: any}): Cheerio;

    data(): any;
    data(name: string): any;
    data(name: string, value: any): any;

    val(): string;
    val(value: string): Cheerio;

    removeAttr(name: string): Cheerio;

    has(selector: string): Cheerio;
    has(element: CheerioElement): Cheerio;

    hasClass(className: string): boolean;
    addClass(classNames: string): Cheerio;

    removeClass(): Cheerio;
    removeClass(className: string): Cheerio;
    removeClass(func: (index: number, className: string) => string): Cheerio;

    toggleClass(className: string): Cheerio;
    toggleClass(className: string, toggleSwitch: boolean): Cheerio;
    toggleClass(toggleSwitch?: boolean): Cheerio;
    toggleClass(func: (index: number, className: string, toggleSwitch: boolean) => string, toggleSwitch?: boolean): Cheerio;

    is(selector: string): boolean;
    is(element: CheerioElement): boolean;
    is(element: CheerioElement[]): boolean;
    is(selection: Cheerio): boolean;
    is(func: (index: number, element: CheerioElement) => boolean): boolean;

    // Form
    serialize(): string;
    serializeArray(): {name: string, value: string}[];

    // Traversing
    
    find(selector: string): Cheerio;
    find(element: Cheerio): Cheerio;

    parent(selector?: string): Cheerio;
    parents(selector?: string): Cheerio;
    parentsUntil(selector?: string, filter?: string): Cheerio;
    parentsUntil(element: CheerioElement, filter?: string): Cheerio;
    parentsUntil(element: Cheerio, filter?: string): Cheerio;

    prop(name: string): any;
    prop(name: string, value: any): Cheerio;

    closest(): Cheerio;
    closest(selector: string): Cheerio;

    next(selector?: string): Cheerio;
    nextAll(): Cheerio;
    nextAll(selector: string): Cheerio;

    nextUntil(selector?: string, filter?: string): Cheerio;
    nextUntil(element: CheerioElement, filter?: string): Cheerio;
    nextUntil(element: Cheerio, filter?: string): Cheerio;

    prev(selector?: string): Cheerio;
    prevAll(): Cheerio;
    prevAll(selector: string): Cheerio;

    prevUntil(selector?: string, filter?: string): Cheerio;
    prevUntil(element: CheerioElement, filter?: string): Cheerio;
    prevUntil(element: Cheerio, filter?: string): Cheerio;

    slice(start: number, end?: number): Cheerio;

    siblings(selector?: string): Cheerio;

    children(selector?: string): Cheerio;

    contents(): Cheerio;

    each(func: (index: number, element: CheerioElement) => any): Cheerio;
    map(func: (index: number, element: CheerioElement) => any): Cheerio;

    filter(selector: string): Cheerio;
    filter(selection: Cheerio): Cheerio;
    filter(element: CheerioElement): Cheerio;
    filter(elements: CheerioElement[]): Cheerio;
    filter(func: (index: number, element: CheerioElement) => boolean): Cheerio;

    not(selector: string): Cheerio;
    not(selection: Cheerio): Cheerio;
    not(element: CheerioElement): Cheerio;
    not(func: (index: number, element: CheerioElement) => boolean): Cheerio;

    first(): Cheerio;
    last(): Cheerio;

    eq(index: number): Cheerio;

    get(): any[];
    get(index: number): any;

    index(): number;
    index(selector: string): number;
    index(selection: Cheerio): number;

    end(): Cheerio;

    add(selectorOrHtml: string): Cheerio;
    add(selector: string, context: Document): Cheerio;
    add(element: CheerioElement): Cheerio;
    add(elements: CheerioElement[]): Cheerio;
    add(selection: Cheerio): Cheerio;

    addBack():Cheerio;
    addBack(filter: string):Cheerio;

    // Manipulation
    appendTo(target: Cheerio) : Cheerio
    prependTo(target: Cheerio) : Cheerio

    append(content: string, ...contents: any[]): Cheerio;
    append(content: Document, ...contents: any[]): Cheerio;
    append(content: Document[], ...contents: any[]): Cheerio;
    append(content: Cheerio, ...contents: any[]): Cheerio;

    prepend(content: string, ...contents: any[]): Cheerio;
    prepend(content: Document, ...contents: any[]): Cheerio;
    prepend(content: Document[], ...contents: any[]): Cheerio;
    prepend(content: Cheerio, ...contents: any[]): Cheerio;

    after(content: string, ...contents: any[]): Cheerio;
    after(content: Document, ...contents: any[]): Cheerio;
    after(content: Document[], ...contents: any[]): Cheerio;
    after(content: Cheerio, ...contents: any[]): Cheerio;

    insertAfter(content: string): Cheerio;
    insertAfter(content: Document): Cheerio;
    insertAfter(content: Cheerio): Cheerio;

    before(content: string, ...contents: any[]): Cheerio;
    before(content: Document, ...contents: any[]): Cheerio;
    before(content: Document[], ...contents: any[]): Cheerio;
    before(content: Cheerio, ...contents: any[]): Cheerio;

    insertBefore(content: string): Cheerio;
    insertBefore(content: Document): Cheerio;
    insertBefore(content: Cheerio): Cheerio;

    remove(selector?: string): Cheerio;

    replaceWith(content: string): Cheerio;
    replaceWith(content: CheerioElement): Cheerio;
    replaceWith(content: CheerioElement[]): Cheerio;
    replaceWith(content: Cheerio): Cheerio;
    replaceWith(content: () => Cheerio): Cheerio;

    empty(): Cheerio;

    html(): string | null;
    html(html: string): Cheerio;

    text(): string;
    text(text: string): Cheerio;

    wrap(content: string): Cheerio;
    wrap(content: Document): Cheerio;
    wrap(content: Cheerio): Cheerio;

    css(propertyName: string): string;
    css(propertyNames: string[]): string[];
    css(propertyName: string, value: string): Cheerio;
    css(propertyName: string, value: number): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => string): Cheerio;
    css(propertyName: string, func: (index: number, value: string) => number): Cheerio;
    css(properties: Object): Cheerio;

    // Rendering

    // Miscellaneous

    clone(): Cheerio;

    // Not Documented

    toArray(): CheerioElement[];
``` 
### 2. element
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

 