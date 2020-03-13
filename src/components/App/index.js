import React from 'react';

import Header from "../Header/header.jsx";
import Nav from "../Navigation/navigation.jsx";
import Content from "../Content/Content.jsx";

class App extends React.Component {
	render() {

		return (<>
				<Header/>
	            <Nav/>
				<Content/>
			</>
		)
	}
}

export default App;