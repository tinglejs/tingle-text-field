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
        var value = this.props.filter(e.target.value);
        this.props.onChange(value);
    }

    handleFocus(e) {
        var t = this;
        t.props.onFocus(t.props.value);

        // 处理placeholder
        if (t.props.value.length) return;
        t.refs.placeholder.getDOMNode().style.display = 'none';
    }

    handleBlur(e) {
        var t = this;
        t.props.onBlur(t.props.value);

        // 处理placeholder
        if (t.props.value.length) return;
        t.refs.placeholder.getDOMNode().style.display = 'block';
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
    filter:      function (v) {return v;},
    onChange:    Context.noop,
    onFocus:     Context.noop,
    onBlur:      Context.noop,
    readOnly:    false,
    placeholder: '',
    value:       ''
}

TextField.propTypes = {
    filter:      React.PropTypes.func,
    label:       React.PropTypes.string.isRequired,
    onChange:    React.PropTypes.func,
    onFocus:     React.PropTypes.func,
    onBlur:      React.PropTypes.func,
    readOnly:    React.PropTypes.bool,
    placeholder: React.PropTypes.string
}

module.exports = TextField;