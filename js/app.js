var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var config = require('./config.js');

Parse.initialize(config.appkey, config.jskey);

var Index = require('./Index.react.js');
var NotFound = require('./NotFound.react.js');
var ChatBox = require('./ChatBox.react.js');
var NavBar = require('./NavBar.react.js');
// var AnalyticsContainer = require('./AnalyticsContainer.react.js');
// var CampaignContainer = require('./CampaignContainer.react.js');
// var LoginContainer = require('./LoginContainer.react.js');
// var Simulator = require('./Simulator.react.js');

var RoutedApp = React.createClass({
  render(){
    return(
      <div>
      <NavBar/>
        <RouteHandler/>
      </div>
    )
  }
})

var routes = (
  <Route handler={RoutedApp}>
    <Route path="/" handler={Index}/>
    <Route path="/:id" handler={ChatBox}/>
    <Route path="/*" handler={NotFound}/>
  </Route>
);


Router.run(routes, function (Handler) {

  React.render(<Handler/>, document.getElementById('app'));

});
