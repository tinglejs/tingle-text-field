/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(3);
	
	// TODO: move the line to tingle-env
	_react2['default'].initializeTouchEvents(true);
	
	var Demo = (function (_React$Component) {
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            t1: ''
	        };
	    }
	
	    _inherits(Demo, _React$Component);
	
	    _createClass(Demo, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'handleChangeT1',
	        value: function handleChangeT1(newValue) {
	            console.log(newValue);
	            this.setState({
	                t1: newValue
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var t = this;
	            return _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(_src.TextField, { label: '工号', placeholder: '请输入',
	                    value: t.state.t1,
	                    onChange: t.handleChangeT1.bind(this) })
	            );
	        }
	    }]);
	
	    return Demo;
	})(_react2['default'].Component);
	
	;
	
	_react2['default'].render(_react2['default'].createElement(Demo, null), document.getElementById('TingleDemo'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var TextField = (function (_React$Component) {
	    function TextField(props) {
	        _classCallCheck(this, TextField);
	
	        _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this, props);
	    }
	
	    _inherits(TextField, _React$Component);
	
	    _createClass(TextField, [{
	        key: 'handleChange',
	        value: function handleChange(e) {
	            this.props.onChange(e.target.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var t = this;
	            var cls = _react2['default'].addons.classSet;
	
	            cls = cls(_defineProperty({
	                'tTextField tPR10 tFBH tFBAC': true }, t.props.className, !!t.props.className));
	
	            return _react2['default'].createElement(
	                'div',
	                { className: cls },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tMR10 tFieldLabel' },
	                    t.props.label
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'tFB1' },
	                    _react2['default'].createElement('input', { className: 'tInput', placeholder: t.props.placeholder,
	                        type: 'text', value: t.props.value, readOnly: t.props.readOnly,
	                        onChange: t.handleChange.bind(this) })
	                )
	            );
	        }
	    }]);
	
	    return TextField;
	})(_react2['default'].Component);
	
	TextField.defaultProps = {
	    placeholder: '',
	    value: '',
	    readOnly: false
	};
	
	TextField.propTypes = {
	    label: _react2['default'].PropTypes.string.isRequired,
	    readOnly: _react2['default'].PropTypes.bool,
	    onChange: _react2['default'].PropTypes.func
	};
	
	exports.TextField = TextField;

/***/ }
/******/ ])
//# sourceMappingURL=demo.js.map