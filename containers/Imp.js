import React from 'react';
import SearchBox from '../components/SearchBox';
import Videos from '../components/Videos';
import {getVideos} from '../actions/searchActions';
import {connect} from 'react-redux';


class Main extends React.Component{

	componentWillMount(){

	}
	componentDidMount(){
		this.props.getVideos('react.js');
	}
	
	render(){
		console.log('mad', this.props.video);
		return(
				<div>
					<SearchBox getData={(q) => this.props.getVideos(q)}/>
					<Videos allVideos={this.props.video.data}/>
						
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		video: state.videoReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		getVideos: (q) => {
			console.log(q);
			dispatch(getVideos(q));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
