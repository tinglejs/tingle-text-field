var GroupList = require('tingle-group-list');
var TextField = require('../src');

var numberRegExp = /^(\d+\.\d*)|(\d+\.)|\d+/;

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
        var matches = originValue.match(numberRegExp);
        var number = '';
        if(matches) {
            number =  matches[0];
        }
        return number;
    }

    handleNumberBlur(originValue) {
        this.setState({
            number: originValue.replace(/\.$/, '').replace(/^0*([0-9]+)/, '$1')
        });
    }

    render() {
        var t = this;
        return (
            <div>
                <GroupList title="Label文字长度测试">
                    <TextField label="俩字" placeholder="请输入"
                     value={t.state.text}
                     onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="三个字" placeholder="请输入"
                     value={t.state.text}
                     onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="四个文字" placeholder="请输入"
                     value={t.state.text}
                     onChange={t.handleTextChange.bind(t)}/>
                    <TextField label="很多个文字" placeholder="请输入"
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
                     value="不能更改" readOnly={true}/>
                </GroupList>
            </div>
        );
    }
};

module.exports = Demo;