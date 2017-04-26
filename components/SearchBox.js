import React from 'react';

class SearchBox extends React.Component{

	render(){
		return(
				<div>
					<input type="text" ref="search"/>
					<button onClick={(event) => this.props.getData(this.refs.search.value)}>Search!</button>
				</div>
			)
		}
		
	}
	

export default SearchBox;