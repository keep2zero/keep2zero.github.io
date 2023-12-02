---
sidebar_position: 8
---

# Slider View

<img src="/slider.jpg" width="300" alt="Slider View" />

## API

### Properties

| Property | Type | Default | Description|
| ------  | ---- | --- | --- |
| objects | List< SliderObject > | |  data list |
| height | double | 180 | height |
| titleColor | Color | Colors.white | title color |
| titleSize | double | 12 | the font size  of title|

```Dart
class SliderObject {
  String objName; //title
  String objCover; //image
  SliderObject(this.objName, this.objCover);
}
```

### Methods

| Property | Type | Default | Description |
| ------  | ---- | --- | --- |
| onTap | void Function(SliderObject, int) | | click event |
