var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

Parse.initialize("DcSFCFl9R5SqfJhocbrClGDxbqRqCzbB4mQC9p2O", "ViXIhVjF30UpnOejq2CBwgURR7czw00MBszWDOd9");


var channelInquired = 'general';


var AppContainer = React.createClass({
  render: function() {
    return (
      <div className="AppContainer">
        <ChannelBar/>
        <CommentList/>
      </div>
    )
  }
})

var ChannelBar = React.createClass({
  render: function() {
    return (
      <div className="ChannelBar">
        <div className="HashTag">#</div>
        <input
          placeholder="channelname"
          onChange={this._onChange}
        />
      </div>
    )
  },


  _onChange: function(e) {
    console.log(e.target.value);
    var theChannel = e.target.value;
    channelInquired = theChannel;
    console.log(channelInquired);
  },

})

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <CommentList/>
      </div>
    );
  }
});

var CommentList = React.createClass({
  mixins: [ParseReact.Mixin],

  observe: function() {
    return {
      comments: (new Parse.Query('Comment').equalTo("channel", channelInquired  ).descending("createdAt"))
    };
  },

  render: function() {

    var commentNodes = this.data.comments.map(function (comment) {
      return (
        // <p key={comment.id}>{comment.info}</p>
        <Comment key={comment.id} info={comment.info}/>

      );
    });

    return (
      <div className="CommentList">
        <CommentInput/>
        {commentNodes}
      </div>
    )
  },

  componentDidMount: function() {
    var refresher = this.refreshQueries;
    var interval = setInterval( function() {
      console.log('refreshing');
      refresher();
    }, 3000)
  }

});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="Comment">
      {this.props.info}
      </div>
    )
  }
});

var CommentInput = React.createClass({
  render: function() {
    return (
        <input
          className="CommentInput"
          type="text"
          placeholder="Enter a comment..."
          submit={this.addComment}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          maxLength="80"
        />
    )
  },


  addComment: function() {
    // ParseReact.Mutation.Create("Coment")
    ParseReact.Mutation.Create('Comment', { info: this.state.value, channel:channelInquired }).dispatch()
    .then(function() {
        console.log('refreshing')
        // this.refreshQueries()
    }.bind(this));
  },

  onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  },

  onKeyDown: function(e) {
    if (e.keyCode === 13) {
      this.addComment();
      e.target.value = '';
    }
  },
})


React.render(
  <AppContainer/>,
  document.getElementById('app')
);
