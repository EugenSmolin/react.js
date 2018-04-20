import React from 'react';
import Article from './Article';
import articles from '../fixtures';
import ResponsiveMenu from './ResponsiveMenu';
import Counter from './Counter';
import NewList from './NewList';

function App() {
	return (
    	<div>
        	<h1>title</h1>
        	<Article article={articles[0]} foo="bar" flag />
        	<hr/>
        	<ResponsiveMenu />
        	<hr/>
        	<Counter />
        	<hr/>
        	<NewList />
    	</div>
    )
}

export default App;