let FastClick = require('fastclick');

FastClick.attach(document.body);

let Context = require('tingle-context');
let Demo = require('./TextFieldDemo');

React.render(<Demo/>, document.getElementById('TingleDemo'));
