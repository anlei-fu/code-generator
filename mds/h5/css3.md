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


