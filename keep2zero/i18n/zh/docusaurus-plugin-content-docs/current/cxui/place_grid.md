---
sidebar_position: 7
---

# Place Grid

<img src="/place_grid.png" width="300" alt="Place Grid" />

## API

### 属性

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| items | List< PlaceGridItem > | | 元素列表 |
| cols | int | 1 | 显示几列 |
| space | double | 8 | 元素间隙 |
| height | double | 80 | 高度 |
| ratio | double | 1 | 显示比例 |
| bgColor | Color | 透明色 | 背景色 |

 ```Dart
class PlaceGridItem {
  IconData? icon; //图标
  String? title; //标题
  double? titleSize; //标题大小
  Color? color; //颜色
  Color? iconColor; //图标颜色
  double? iconSize; //图标大小
  PlaceGridItem({
    this.icon,
    this.title,
    this.titleSize,
    this.color,
    this.iconSize,
    this.iconColor,
  });
}
 ```

### 方法

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| | | | |
