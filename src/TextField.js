import React from 'react';

class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        var t = this;
        var cls = React.addons.classSet;

        cls = cls({
            'tTextField tPR10 tFBH tFBAC': true,
            [t.props.className]: !!t.props.className
        });

        return (
            <div className={cls}>
                <div className="tMR10 tFieldLabel">{t.props.label}</div>
                <div className="tFB1">
                    <input className="tInput" placeholder={t.props.placeholder}
                     type="text" value={t.props.value} readOnly={t.props.readOnly}
                     onChange={t.handleChange.bind(this)}/>
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