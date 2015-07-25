var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');


var Messages = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function(props, state) {
    console.log('observe params: ', props);
    return {
      messages: (new Parse.Query('Message').equalTo('channel',props.channel).descending("createdAt"))
    };
  },

  componentDidMount() {
    var refresh = this.refreshQueries;
    var interval = setInterval( function() {
      console.log('refreshing');
      refresh();
    }, 3000)
  },

  render() {
    // console.log('onRender: ',this.data.messages);
    var messageNodes = this.data.messages.map(function (message) {
      return (
        <p className='ChatMessage' key={message.id}>{message.info}</p>
      );
    });

    return (
      <div>
        {messageNodes}
      </div>
    )
  }
});




module.exports = Messages;
