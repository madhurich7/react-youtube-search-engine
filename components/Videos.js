import React from 'react';

class Videos extends React.Component{

	render(){
		if(this.props.allVideos) {

		console.log('madhuri', this.props.allVideos.items);
		}
		return(
				<div>
					{this.props.allVideos ? (
							
							<div>
								<ul>{
									this.props.allVideos.items.map((video, index) => {
									return (<li key={index}>
											{index == 0 ? (
											<div>
												<iframe src={'https://www.youtube.com/embed/' + video.id.videoId} width="600" height="400"></iframe>
											</div>) : (

											<div>
												<div className="thumbnail">
													<a href="#">
														<img src={video.snippet.thumbnails.high.url} width="150" height="100"/>
													</a>
												</div>
												<div className="thumbnail">
													<h3>{video.snippet.title}</h3>
												</div>
											</div>
											)} 
										</li>)
								})
								}</ul>
							</div>
						) : (
							<strong>Not yet!</strong>
						)}
				</div>
			)
		}
		
	}
	

export default Videos;
