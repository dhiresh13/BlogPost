import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/style.scss";
import Main from "./views/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./views/posts";

function App() {
	return (
		<div className="ui container">
			<Router>
				<div>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/posts/:id" exact component={Posts} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
