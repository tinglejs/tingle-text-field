import React from 'react';

class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    handleFocus() {
        this.refs.placeholder.getDOMNode().style.display = 'none';
    }

    handleBlur() {
        if (this.props.value.length) return;
        this.refs.placeholder.getDOMNode().style.display = 'block';
    }

    render() {
        var t = this;
        var cls = React.addons.classSet;

        return (
            <div className={cls({
                'tTextField tPR10 tFBH tFBAC': true,
                [t.props.className]: !!t.props.className
            })}>
                <div className="tMR10 tFieldLabel">{t.props.label}</div>
                <div className="tFB1 tPR">
                    <div ref="placeholder" className={cls({
                        tFieldPlaceholder: true,
                        tDN: !!t.props.value
                    })}>{t.props.placeholder}</div>
                    <input className="tInput"
                     type="text" value={t.props.value} readOnly={t.props.readOnly}
                     onChange={t.handleChange.bind(this)}
                     onFocus={t.handleFocus.bind(this)}
                     onBlur={t.handleBlur.bind(this)}/>
                </div>
            </div>
        );
    }
}

TextField.defaultProps = {
    placeholder: '',
    value:       '',
    readOnly:    false
}

TextField.propTypes = {
    label:    React.PropTypes.string.isRequired,
    readOnly: React.PropTypes.bool,
    onChange: React.PropTypes.func
}

export {TextField};