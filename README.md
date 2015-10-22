# tingle-text-field [![npm version](https://badge.fury.io/js/tingle-text-field.svg)](http://badge.fury.io/js/tingle-text-field)

## TL;DR

单行文本输入框。

<img src="https://img.alicdn.com/tps/TB14TfJJpXXXXcWXVXXXXXXXXXX-750-1254.png" width="375"/>

## Simple Usage

```javascript
class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    handleTextChange(newValue) {
        this.setState({
            text: newValue
        });
    }

    render() {
        let t = this;
        return (
            <TextField label="俩字" placeholder="请输入"
             value={t.state.text}
             onChange={t.handleTextChange.bind(t)}/>
        );
    }
};

```

## 可用配置


| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className|optional|-|自定义的扩展样式名称|
|filter|optional|-|自定义的value过滤器，参数是用户输入的值，返回过滤后的值，默认不处理|
|label|optional|-|表单域label文字标签|
|onChange|required|-|当输入值时触发的回调，第一个参数是输入的新值，第二个参数是e|
|onFocus|optional|-|获取焦点时的回调，第一个参数是当前值，第二个参数是e|
|onBlur|optional|-|失去焦点时的回调，第一个参数是当前值，第二个参数是e|
|placeholder|optional|-|水印提示|
|readOnly|optional|false|布尔值，设置是否是只读状态|
|value|required|-|输入框的值|

> 所有props都是可选的。

> text-field组件本身是没有背景色的，通常会配合GroupList一起使用。

## 更新历史

v0.2.1 - 10月22日

* 删除`multiLine`的配置
* 删除`clear`功能
* 修复 [#9](https://github.com/tinglejs/tingle-text-field/issues/9)

## Links 相关链接

- [Fire a bug/Issues 提Bug](https://github.com/tinglejs/tingle-text-field/issues)