var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Navigation = Router.Navigation;

var NavBar = React.createClass({
  mixins: [ Navigation, ParseReact.Mixin ],

  observe() {

  },

  _submit(e) {
    console.log(e, 'submit');
    e.preventDefault();
  },

  _keyDown(e) {
    var target = e.target.value;
    if (e.keyCode === 13) {
      // e.preventDefault();
      if (target.length > 30) {
        alert('tag to long!');
        target = '';
      }
      else {
        console.log('transitionTo',target);
        this.transitionTo('/'+target,{channel: target});
      }
    }
  },

  _change(e) {
    // console.log(e, 'change');
  },

  render: function() {
    return(

      <div className="theNavbar header">
        <div className="navbar navbar-inverse" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/#/">Cirqus</a>
            </div>
            <div className="collapse navbar-collapse" id="js-navbar-collapse">
            <form className="navbar-form navbar-right" role="search">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Channel Name"
                    refs="search"
                    submit={this._submit}
                    onChange={this._change}
                    onKeyDown={this._keyDown}
                    maxLength="30"
                    />
                  <span className="input-group-addon" id="basic-addon1">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"/>
                  </span>
                </div>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  },
});
module.exports = NavBar;
