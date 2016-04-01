const GroupList = require('tingle-group-list');
const TextField = require('../src');

const numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            number: ''
        }
    }

    handleTextChange(newValue) {
        this.setState({
            text: newValue
        });
    }

    handleNumberChange(newValue) {
        this.setState({
            number: newValue
        });
    }

    numberFilter(originValue) {
        let matches = originValue.match(numberRegExp);
        let number = '';
        if (matches) {
            number = matches[0];
        }
        return number;
    }

    handleNumberBlur(originValue) {
        this.setState({
            number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1')
        });
    }

    render() {
        let t = this;
        return (
            <div>
                <GroupList title="Label文字长度测试">
                    <TextField label="标题标题" placeholder="请输入"
                        value={t.state.text}
                        onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="标题文案" placeholder="请输入"
                        value={t.state.text}
                        onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="标题文字" placeholder="请输入"
                        value={t.state.text}
                        onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="标题标题" placeholder="请输入"
                        value={t.state.text}
                        onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="仅限数字" placeholder="请输入"
                        filter={t.numberFilter.bind(t)}
                        value={t.state.number}
                        onBlur={t.handleNumberBlur.bind(t)}
                        onChange={t.handleNumberChange.bind(t)}/>
                </GroupList>
                <GroupList title="不可修改">
                    <TextField label="只读"
                        value="不能更改\n不能更改" readOnly={true}/>
                </GroupList>
                <GroupList title="只读没有placeholder">
                    <TextField label="不可修改"
                               value="" readOnly={true}/>
                </GroupList>
                <GroupList title="上下结构">
                    <TextField placeholder="请输入"
                        value={t.state.text}
                        onChange={t.handleTextChange.bind(t)}/>
                </GroupList>
            </div>
        );
    }
}
module.exports = Demo;