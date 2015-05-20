import React from 'react';
import {TextField} from '../src';

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
                <TextField label="工号" placeholder="请输入"
                 value={t.state.t1}
                 onChange={t.handleChangeT1.bind(this)}/>
            </div>
        );
    }
};

React.render(<Demo/>, document.getElementById('TingleDemo'));