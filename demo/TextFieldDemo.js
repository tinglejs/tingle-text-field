var TextField = require('../src');
var GroupList = require('tingle-group-list');

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            t1: ''
        }
    }

    handleChangeT1(newValue) {
        this.setState({
            t1: newValue
        });
    }

    render() {
        var t = this;
        return (
            <div>
                <GroupList>
                    <TextField label="俩字" placeholder="请输入"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(t)}/>
                    <TextField label="三个字" placeholder="请输入"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(t)}/>
                    <TextField label="四个文字" placeholder="请输入"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(t)}/>
                    <TextField label="很多个文字" placeholder="请输入"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(t)}/>
                    <TextField label="只读"
                     value="不能更改" readOnly={true}/>
                </GroupList>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));