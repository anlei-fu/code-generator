# css3
----

### animation

- ***@keyframes***

``` css
    @keyframes ${name}{
      {percent}:{attr:{key,value}}
    }
```

----

#### transform
|name|description|
|---|--|
|none|	定义不进行转换。|	
|matrix(n,n,n,n,n,n)|	定义 2D 转换，使用六个值的矩阵。|	
|matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)|	定义 3D 转换，使用 16 个值的 4x4 矩阵。|	
|translate(x,y)|	定义 2D 转换。	|
|translate3d(x,y,z)	|定义 3D 转换。	|
|translateX(x)|	定义转换，只是用 X 轴的值。|	
|translateY(y)	|定义转换，只是用 Y 轴的值。|	
|translateZ(z)|	定义 3D 转换，只是用 Z 轴的值|
|scale(x,y)|	定义 2D 缩放转换。	|
|scale3d(x,y,z)|	定义 3D 缩放转换。|	
|scaleX(x)	|通过设置 X 轴的值来定义缩放转换。|	
|scaleY(y)	|通过设置 Y 轴的值来定义缩放转换。|	
|scaleZ(z)	|通过设置 Z 轴的值来定义 3D 缩放转换。|	
|rotate(angle)	|定义 2D 旋转，在参数中规定角度。|	
|rotate3d(x,y,z,angle)|	定义 3D 旋转。	|
|rotateX(angle)	|定义沿着 X 轴的 3D 旋转。|	
|rotateY(angle)	|定义沿着 Y 轴的 3D 旋转。|	
|rotateZ(angle)	|定义沿着 Z 轴的 3D 旋转。|	
|skew(x-angle,y-angle)|	定义沿着 X 和 Y 轴的 2D 倾斜转换。|
|skewX(angle)	|定义沿着 X 轴的 2D 倾斜转换。|	
|skewY(angle)	|定义沿着 Y 轴的 2D 倾斜转换。|	
|perspective(n)	|为 3D 转换元素定义透视视图。|	

------

### aria-label aria-labelledbym aria-hidde

```html
<form role = "form">
  <div class="form-group col-lg-3 form-horizontal"> 
    <input type = "text" id = "idCard" class="form-control" aria-label = "身份证号"> 
  </div>
</form>

```
----

### display

- display
- block
- inline
- inline-block
- none

----

### float

- left
- right
- none

-----

### position

- absolute
- relative
- fixed
- static

----

### justify-content

|name|description|
|---|---|
|flex-start|	默认值。项目位于容器的开头。|	
|flex-end|	项目位于容器的结尾。|	
|center	|项目位于容器的中心。|	
|space-between|	项目位于各行之间留有空白的容器内。|	
|space-around|	项目位于各行之前、之间、之后都留有空白的容器内。|
|initial|	设置该属性为它的默认值。请参阅 initial。|
|inherit	|从父元素继承该属性。请参阅 inherit。|

-------

### flex-direction

|name|description|
|---|---|
row|	默认值。灵活的项目将水平显示，正如一个行一样。
row-reverse|	与 row 相同，但是以相反的顺序。	
column|	灵活的项目将垂直显示，正如一个列一样。
column-reverse|	与 column 相同，但是以相反的顺序。	
initial	|设置该属性为它的默认值。请参阅 initial。	
inherit	|从父元素继承该属性。请参阅 inherit。

------

### flex-wrap

|name|description|
|---|---|
nowrap|	默认值。规定灵活的项目不拆行或不拆列。
wrap	|规定灵活的项目在必要的时候拆行或拆列。
wrap-reverse|	规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序。
initial|	设置该属性为它的默认值。请参阅 initial。
inherit	|从父元素继承该属性。请参阅 inherit。

----

### box-sizing

|name|description|
|---|---|
content-box|	这是由 CSS2.1 规定的宽度高度行为。宽度和高度分别应用到元素的容框。在宽度和高度之外绘制元素的内边距和边框。
border-box|	为元素设定的宽度和高度决定了元素的边框盒。就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。
inherit	|规定应从父元素继承 box-sizing 属性的值。

---------

### Svg

- ***path***

|name|description|
|---|---|
|M | moveto|
|L | lineto|
|H | horizontal lineto|
|V | vertical lineto|
|C | curveto|
|S | smooth curveto|
|Q | quadratic Belzier curve|
|T | smooth quadratic Belzier curveto|
|A | elliptical Arc|
|Z | closepath|

--------
- ***keyword***

|元素|描述|
|---|---|
|a|定义超链接|
|altGlyph|允许对象性文字进行控制，来呈现特殊的字符数据（例如，音乐符号或亚洲的文字）|
|altGlyphDef|定义一系列象性符号的替换（例如，音乐符号或者亚洲文字）|
|altGlyphItem|定义一系列候选的象性符号的替换|
|animate|随时间动态改变属性|
|animateColor|规定随时间进行的颜色转换|
|animateMotion|使元素沿着动作路径移动|
|animateTransform|对元素进行动态的属性转换|
|circle|定义圆|
|clipPath||
|color-profile|规定颜色配置描述|
|cursor|定义独立于平台的光标|
|definition-src|定义单独的字体定义源|
|defs|被引用元素的容器|
|desc|对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示。|
|ellipse|定义椭圆|
|feBlend|SVG 滤镜。使用不同的混合模式把两个对象合成在一起。|
|feColorMatrix|SVG 滤镜。应用matrix转换。|
|feComponentTransfer|SVG 滤镜。执行数据的 component-wise 重映射。|
|feComposite|SVG 滤镜。|
|feConvolveMatrix|SVG 滤镜。|
|feDiffuseLighting|SVG 滤镜。|
|feDisplacementMap|SVG 滤镜。|
|feDistantLight|SVG 滤镜。 Defines a light source|
|feFlood|SVG 滤镜。|
|feFuncA|SVG 滤镜。feComponentTransfer 的子元素。|
|feFuncB|SVG 滤镜。feComponentTransfer 的子元素。|
|feFuncG|SVG 滤镜。feComponentTransfer 的子元素。|
|feFuncR|SVG 滤镜。feComponentTransfer 的子元素。|
|feGaussianBlur|SVG 滤镜。对图像执行高斯模糊。|
|feImage|SVG 滤镜。|
|feMerge|SVG 滤镜。创建累积而上的图像。|
|feMergeNode|SVG 滤镜。feMerge的子元素。|
|feMorphology|SVG 滤镜。 对源图形执行"fattening" 或者 "thinning"。|
|feOffset|SVG 滤镜。相对与图形的当前位置来移动图像。|
|fePointLight|SVG 滤镜。|
|feSpecularLighting|SVG 滤镜。|
|feSpotLight|SVG 滤镜。|
|feTile|SVG 滤镜。|
|feTurbulence|SVG 滤镜。|
|filter|滤镜效果的容器。|
|font|定义字体。|
|font-face|描述某字体的特点。|
|font-face-format||
|font-face-name||
|font-face-src||
|font-face-uri||
|foreignObject||
|g|用于把相关元素进行组合的容器元素。|
|glyph|为给定的象形符号定义图形。|
|glyphRef|定义要使用的可能的象形符号。|
|hkern||
|image||
|line|定义线条。|
|linearGradient|定义线性渐变。|
|marker||
|mask||
|metadata|规定元数据。|
|missing-glyph||
|mpath||
|path|定义路径。|
|pattern||
|polygon|定义由一系列连接的直线组成的封闭形状。|
|polyline|定义一系列连接的直线。|
|radialGradient|定义放射形的渐变。|
|rect|定义矩形。|
|script|脚本容器。（例如ECMAScript）|
|set|为指定持续时间的属性设置值|
|stop||
|style|可使样式表直接嵌入SVG内容内部。|
|svg|定义SVG文档片断。|
|switch||
|symbol||
|text||
|textPath||
|title|对 SVG 中的元素的纯文本描述 - 并不作为图形的一部分来显示。用户代理会将其显示为工具提示。|
|tref||
|tspan||
|use||
|view||
|vkern||



