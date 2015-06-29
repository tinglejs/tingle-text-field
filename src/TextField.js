var Context = require('tingle-context');
var classnames = require('classnames');

/**
 * TextField Component for Tingle
 */
class TextField extends React.Component {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    handleFocus(e) {
        if (this.props.value.length) return;
        this.refs.placeholder.getDOMNode().style.display = 'none';
        this.props.onFocus();
    }

    handleBlur(e) {
        if (this.props.value.length) return;
        this.refs.placeholder.getDOMNode().style.display = 'block';
        this.props.onBlur();
    }

    render() {
        var t = this;

        return (
            <div className={classnames({
                'tPL10 tPR10 tFBH tFBAC tFS14 tTextField ': true,
                [t.props.className]: !!t.props.className
            })}>
                <div className="tMR10 tLH1_3 tFC6 tFieldLabel">{t.props.label}</div>
                <div className="tFB1 tPR tFC9">
                    <div ref="placeholder" className={classnames({
                        'tOmit tFieldPlaceholder': true,
                        tDN: !!t.props.value
                    })}>{t.props.placeholder}</div>
                    <input className="tInput tFC9"
                     type="text" value={t.props.value} readOnly={t.props.readOnly}
                     onChange={t.handleChange.bind(t)}
                     onFocus={t.handleFocus.bind(t)}
                     onBlur={t.handleBlur.bind(t)}/>
                </div>
            </div>
        );
    }
}

TextField.defaultProps = {
    onChange:    Context.noop,
    onFocus:     Context.noop,
    onBlur:      Context.noop,
    readOnly:    false,
    placeholder: '',
    value:       ''
}

TextField.propTypes = {
    label:       React.PropTypes.string.isRequired,
    onChange:    React.PropTypes.func,
    onFocus:     React.PropTypes.func,
    onBlur:      React.PropTypes.func,
    readOnly:    React.PropTypes.bool,
    placeholder: React.PropTypes.string
}

module.exports = TextField;