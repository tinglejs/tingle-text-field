import React from 'react';
import {TextField} from '../src';
import {GroupList} from 'tingle-group-list';

// TODO: move the line to tingle-env
React.initializeTouchEvents(true);

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            t1: ''
        }
    }

    componentDidMount() {
    }

    handleChangeT1(newValue) {
        console.log(newValue);
        this.setState({
            t1: newValue
        });
    }

    render() {
        var t = this;
        return (
            <div>
                <GroupList className="tInputTAR">
                    <TextField label="工号" placeholder="请输入工号请输入工号请输入工号"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(this)}/>
                    <TextField label="工号"
                     value="只读工号" readOnly={true}/>
                </GroupList>
                <GroupList>
                    <TextField label="工号" placeholder="请输入工号请输入工号请输入工号"
                     value={t.state.t1}
                     onChange={t.handleChangeT1.bind(this)}/>
                    <TextField label="工号"
                     value="只读工号" readOnly={true}/>
                </GroupList>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));