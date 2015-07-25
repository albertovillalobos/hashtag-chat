var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var Messages = require('./Messages.react.js');
var MessageInput = require('./MessageInput.react.js');

var ChatBox = React.createClass({

  render() {
    console.log('ChatBox params:',this.props.params.id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">Welcome to #{this.props.params.id}</h1>
            <div className="MessageContainer">
              <MessageInput channel={this.props.params.id}/>
              <Messages channel={this.props.params.id}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = ChatBox;
