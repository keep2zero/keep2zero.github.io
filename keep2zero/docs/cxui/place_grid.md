---
sidebar_position: 7
---

# Place Grid

<img src="/place_grid.png" width="300" alt="Place Grid" />

## API

### Properties

| Property | Type | Default | Description |
| ------  | ---- | --- | --- |
| items | List< PlaceGridItem > | | data list |
| cols | int | 1 | show columns |
| space | double | 8 | space |
| height | double | 80 | height |
| ratio | double | 1 | item ratio |
| bgColor | Color | transparent | background color |

 ```Dart
class PlaceGridItem {
  IconData? icon; //icon data
  String? title; // title
  double? titleSize; // title size 
  Color? color; // font color
  Color? iconColor; //icon color
  double? iconSize; //icon size
  PlaceGridItem({
    this.title,
    this.titleSize,
    this.color,
    this.iconSize,
    this.iconColor,
  });
}
 ```

### Methods

| Property | Type | Default | Description|
| ------  | ---- | --- | --- |
| | | | |
