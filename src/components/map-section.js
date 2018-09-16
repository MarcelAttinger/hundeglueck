import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{ text }</div>;


export default class Map extends React.Component {
	static defaultProps = {
		center: {lat: 48.6318216, lng: 8.9948263},
		zoom: 15
	}

	render() {
		return (
			<section>
				<div className='google-map'>
					<GoogleMapReact
						bootstrapURLKeys={{key: 'AIzaSyAii57AthWshkQxfng2tiSQt1jR2to1Zy8'}}
						defaultCenter={ this.props.center }
						defaultZoom={ this.props.zoom }>
						<AnyReactComponent
							lat={ 48.6318216 }
							lng={ 8.9948263 }
							text={ 'Birkenstraße 2, 71155 Altdorf' }
						/>
					</GoogleMapReact>
				</div>
			</section>
		)
	}
}
