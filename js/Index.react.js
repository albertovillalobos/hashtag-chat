var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var Index = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
		return {
			user: ParseReact.currentUser
		};
	},

  render() {

    var welcomeMessage = {};
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Welcome</h1>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Index;
