---
sidebar_position: 8
---

# Slider View

## API

### 属性

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| objects | List< SliderObject > | | 元素列表 |
| height | double | 180 | 高度 |
| titleColor | Color | Colors.white | 标题颜色 |
| titleSize | double | 12 | 标题大小 |

```Dart
class SliderObject {
  String objName; //标题
  String objCover; //图片
  SliderObject(this.objName, this.objCover);
}
```

### 方法

| 属性名 | 类型| 默认 | 说明|
| ------  | ---- | --- | --- |
| onTap | void Function(SliderObject, int) | | 点击事件 |
