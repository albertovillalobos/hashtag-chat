var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var cooldown = 0;
var previewsComment = '';
var coolDownInterval = setInterval(function() {
  if (cooldown>0) {
    cooldown--;

  }
  // console.log(cooldown)
}, 1000);


var MessageInput = React.createClass({

  _onKeyDown: function(e) {

    var chatMessage = e.target.value;
    if (e.keyCode === 13) {

      console.log('words:',chatMessage.trim().replace(' ','').length, chatMessage);
      if (chatMessage.length > 100) {
        alert('Comment too long');
         e.target.value = '';
      }
      else if (cooldown>0) {
        alert('wait '+cooldown+' seconds to post again');
      }
      else if (chatMessage == previewsComment) {
        alert('Dont double post');
         e.target.value = '';
      }
      else if (chatMessage.trim().replace(' ','').length < 1) {
        alert('Invalid message');
         e.target.value = '';
      }
      else {
        previewsComment = chatMessage;

        console.log('Adding message')

        cooldown  = 5;

        ParseReact.Mutation.Create('Message', { info: chatMessage, channel: this.props.channel.toLowerCase() }).dispatch()
         e.target.value = '';

      }
    }
  },

  render: function() {
    return (
        <input
          className="MessageInput form-control"
          type="text"
          placeholder="Enter a comment..."
          submit={this._addComment}
          onChange={this.onChange}
          onKeyDown={this._onKeyDown}
          maxLength="80"
        />
    )
  },

})

module.exports = MessageInput;
