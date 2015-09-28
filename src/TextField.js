/**
 * Field Component for tingle
 * @author gnosaij
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
let Context = require('tingle-context');
let Field = require('tingle-field');
let Icon = require('tingle-icon');
let classnames = require('classnames');

class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        let value = this.props.filter(e.target.value);
        this.props.onChange(value,e);
    }

    handleFocus(e) {
        let t = this;
        t.props.onFocus(t.props.value);

        // 处理placeholder
        if (t.props.value.length) {
            return;
        }
        React.findDOMNode(t.refs.placeholder).style.display = 'none';
    }

    handleBlur(e) {
        let t = this;
        t.props.onBlur(t.props.value,e);

        // 处理placeholder
        if (t.props.value.length) {
            return;
        }
        React.findDOMNode(t.refs.placeholder).style.display = 'block';
    }

    handleClear(e) {

        let t = this;

        // TODO fix iOS blur bug
        //setTimeout(()=> {
        React.findDOMNode(t.refs.input).focus();
        //}, 40);

        this.props.onChange('');
    }

    render() {
        let t = this;

        return <Field {...t.props} className={classnames('tTextField', t.props.className, {
            'multiline': t.props.multiLine,
            'readOnly': t.props.readOnly
        })}>
            <div ref="placeholder" className={classnames('tOmit tTextFieldPlaceholder', {
                tDN: !!t.props.value
            })}>{t.props.placeholder}</div>
            {
                t.props.multiLine ?
                    <textarea ref="input" className="tTextFieldInput" value={t.props.value} readOnly={t.props.readOnly}
                        onChange={t.handleChange.bind(t)}
                        onFocus={t.handleFocus.bind(t)}
                        onBlur={t.handleBlur.bind(t)}/>
                    :
                    <input ref="input" className="tTextFieldInput"
                        type={t.props.type} value={t.props.value} readOnly={t.props.readOnly}
                        onChange={t.handleChange.bind(t)}
                        onFocus={t.handleFocus.bind(t)}
                        onBlur={t.handleBlur.bind(t)}/>
                }

            {
                !t.props.readOnly ?
                    <span className={classnames('tTextFieldIcon', {
                        tDN: !t.props.value
                    })} onClick={t.handleClear.bind(t)}>
                        <Icon id="tingle-text-field-clear"/>
                    </span> : ''
                }
        </Field>
    }
}

TextField.defaultProps = {
    className: '',
    filter: (v) => {
        return v;
    },
    label: '',
    onChange: Context.noop,
    onFocus: Context.noop,
    onBlur: Context.noop,
    placeholder: '',
    readOnly: false,
    multiLine: false,
    type: 'text',
    value: ''
};

TextField.propTypes = {
    className: React.PropTypes.string,
    filter: React.PropTypes.func,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    readOnly: React.PropTypes.bool,
    multiLine: React.PropTypes.bool,
    type: React.PropTypes.string,
};

TextField.displayName = 'TextField';

module.exports = TextField;