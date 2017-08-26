var React     = require('react');
var ReactDOM  = require('react-dom');

class MyComponentClass extends React.Component {
  render() {
    return <h1>Welcome</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

module.exports = MyComponentClass;
