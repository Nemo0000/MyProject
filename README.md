# CityPicker | 省市区三级联动选择器

CityPicker is a lightweight jQuery + Bootstrap plugin for selecting a province, city, and district with a cascading location picker.

This repository was originally published in 2018 and is being maintained again with a focus on compatibility, documentation, accessibility, and a clearer data API.

> This project is independent and is not affiliated with OpenAI, Bootstrap, or the original CityPicker author.

## Features

- Cascading province, city, and district selection.
- Keeps the selected path in the original input value for form submission.
- Supports initial values and reset/destroy lifecycle methods.
- Exposes the selected address and administrative codes through `getData`.
- Supports keyboard focus, Enter/Space to open, and Escape to close.
- Works with the bundled Bootstrap 3 and jQuery 1.x assets.
- Includes a no-build browser demo in [`Demo.html`](./Demo.html).

## Quick start

Open [`Demo.html`](./Demo.html) directly in a browser, or serve the repository from a local web server:

```html
<input id="city-picker" type="text" readonly data-toggle="city-picker">

<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/city-picker.data.js"></script>
<script src="js/city-picker.js"></script>
```

The `data-toggle="city-picker"` attribute initializes the picker automatically after the document is ready. You can also initialize it explicitly:

```js
$('#city-picker').citypicker({
  province: '江苏省',
  city: '常州市',
  district: '溧阳市'
});
```

## Reading the selected data

`getVal` returns the selected path as a slash-separated string:

```js
var value = $('#city-picker').citypicker('getVal');
// 江苏省/常州市/溧阳市
```

`getData` returns the path together with the selected administrative codes:

```js
var data = $('#city-picker').citypicker('getData');
console.log(data);
```

Example:

```json
{
  "value": "江苏省/常州市/溧阳市",
  "province": { "code": "320000", "address": "江苏省" },
  "city": { "code": "320400", "address": "常州市" },
  "district": { "code": "320481", "address": "溧阳市" }
}
```

## API

| Method | Description |
| --- | --- |
| `citypicker(options)` | Initialize or update a picker. |
| `citypicker('getVal')` | Return the selected path string. |
| `citypicker('getData')` | Return the selected path and code objects. |
| `citypicker('reset')` | Clear the selection. |
| `citypicker('destroy')` | Remove the generated UI and event handlers. |

Supported options include `province`, `city`, `district`, `level`, `placeholder`, `simple`, and `responsive`. See the constructor defaults in [`js/city-picker.js`](./js/city-picker.js) for the complete list.

## Development and validation

This is a no-build browser plugin. Open [`Demo.html`](./Demo.html) directly to try it. Before submitting changes, check the two project scripts with:

```powershell
node --check js/city-picker.js
node --check js/main.js
```

## Compatibility notes

The repository intentionally keeps its bundled jQuery 1.11.3 and Bootstrap 3.3.6 assets for compatibility with existing integrations. New applications should evaluate whether their own dependency policy requires newer, separately managed versions.

The location data is a static snapshot. A future version may make the data source configurable and add support for additional administrative levels.

## License and attribution

Original project code is released under the [MIT License](./LICENSE). Bundled third-party source files retain their original license headers.

See [`CHANGELOG.md`](./CHANGELOG.md) for the maintenance history.

## 中文说明

CityPicker 是一个基于 jQuery 和 Bootstrap 的省市区三级联动选择器，适合中国地区的地址选择场景。项目最初发布于 2018 年，本次维护重点是兼容现有集成、补充中英文文档、改善键盘操作，并提供更清晰的选中数据 API。

### 快速使用

直接打开 [`Demo.html`](./Demo.html) 查看中英双语示例，也可以把以下文件按顺序引入页面：

```html
<input id="city-picker" type="text" readonly data-toggle="city-picker">

<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/city-picker.data.js"></script>
<script src="js/city-picker.js"></script>
```

### 获取选中的省市区数据

获取拼接后的地址字符串：

```js
var value = $('#city-picker').citypicker('getVal');
// 江苏省/常州市/溧阳市
```

获取地址名称和行政区划代码：

```js
var data = $('#city-picker').citypicker('getData');
console.log(data.value);
console.log(data.province, data.city, data.district);
```

### API 方法

| 方法 | 说明 |
| --- | --- |
| `citypicker(options)` | 初始化或更新选择器。 |
| `citypicker('getVal')` | 获取省/市/区县拼接字符串。 |
| `citypicker('getData')` | 获取选中地址及行政区划代码。 |
| `citypicker('reset')` | 重置选择。 |
| `citypicker('destroy')` | 销毁选择器生成的界面和事件。 |

### 兼容性说明

项目保留了仓库内的 jQuery 1.11.3 和 Bootstrap 3.3.6，以兼容已有项目。新项目可以根据自己的依赖安全策略，单独管理更高版本的 jQuery 和 Bootstrap。

如需修改省市区数据，请编辑 `js/city-picker.data.js`；当前数据是静态快照，后续可以扩展为可配置数据源或增加更多行政层级。
