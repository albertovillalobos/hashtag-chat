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
            <h1 className="text-center">Welcome to Cirqus</h1>
            <h2 className="text-center">Channel Based Anonymous Chatrooms</h2>
            <h3 className="text-center">Type a channel name at the bar above to get started, or check the featured channels:</h3>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-6 col-sm-offset-3 text-center">
            <a className="navbar-brand text-center" href="/#/hackathonhackers">hackathonhackers</a>
            <a className="navbar-brand text-center" href="/#/hhcirquedutwerque">hhcirquedutwerque</a>
            <a className="navbar-brand text-center" href="/#/general">general</a>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Index;
