---
sidebar_position: 5
---

# Card

## API

### 属性

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
|radius | double | 0 | Card圆角属性, 圆角是控制四个角的，目前无法单独控制某个角 |
| margin | EdgeInsetsGeometry | | 外边距的控制，类型[EdgeInsetsGeometry], 通过调用该类的方法来控制其外边距 |
| boxShadow| BoxShadow | | 盒子阴影。这个属性是由用户自己设置阴影。它与默认阴影控制，只能二选一。 |
| shadowColor | Color | Colors.grey.withAlpha(160) | 默认盒子阴影颜色。 |
| shadow | bool | null | 是否开启盒子阴影。 |
| body | Widget | 必须设置 | Card的主区域部分 |
| foot | Widget | | Card的尾部组件 |
| hdBgColor | Color | 透明色 | Card的头部组件的背景色 |
| hdPadding | EdgeInsetsGeometry | 8 | Card的头部组件的内间隙 |
| titleWidget | Widget | | Card头部组件。 如果设置了titleWidget, 则默认的头部组件将被覆盖。头部由用户自己控制。 |
| title | String | | Card的标题 |
| subtitle | String | | Card的子标题 |
| titleSize | double | 14 | 标题的大小 |
| subtitleSize | double | 12 | 子标题大小 |
| minHeight | double | 80 | 盒子的最小高度 |
| bgColor | Color | Theme.of(context).colorScheme.background |  盒子背景色 |
| titleColor | Color | Theme.of(context).cardTheme.color | 标题颜色 |
| subtitleColor | Color | Theme.of(context).hintColor | 子标题颜色 |
| actions | List< Widget > | | 默认头部组件的右边元素项 |
| footWidget | Widget | | footWidget与foot二选一。footWidget优先。 |
| hdSplitWidget | Widget | | 头部组件的底部分割组件。这个和默认分割组件，二选一. |
| hdSplit | bool | | 是否显示分割组件. 默认不显示。 |
| hdSplitHeight | double | 1 | 默认分割组件的高度 |
| hdSplitMargin | EdgeInsetsGeometry | | 默认分割组件的外边距. |
| hdSplitColor | Color | Colors.grey[100] | 分割组件的颜色 |

### 方法

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| | | | |
