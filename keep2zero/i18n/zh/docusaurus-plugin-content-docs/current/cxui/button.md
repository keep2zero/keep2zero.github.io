---
sidebar_position: 8
---
 
# Button

## API

### 属性

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
|disabled|bool|false|按钮的禁止状态|
|width| double ||宽度|
|height|double|| 高度|
|shadow|bool|true|是否开启阴影|
|padding|EdgeInsetsGeometry|8|内间距|
|radius|double|20|圆角|
|text|String||文本|
|icon|IconData||图标|
|iconSize|double|16|图标大小|
|textSize|double|12|文本大小|
|type|CxButtonType|solid|按钮类型. `fill`, `solid`, `text` 是按钮的类型|
|color|Color|blue|按钮颜色 |
|textColor|Color|white| 文本颜色 |
|iconColor|Color|white | 图标颜色 |

### 方法

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| onTap | void Function |  | 点击事件 |
