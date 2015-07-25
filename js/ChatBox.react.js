var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var ChatBox = React.createClass({
  // mixins: [ParseReact.Mixin],

  // observe: function() {
	// 	return {
	// 		user: ParseReact.currentUser
	// 	};
	// },

  render() {
    console.log(this.props.params);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Welcome to {this.props.params.id}</h1>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = ChatBox;
