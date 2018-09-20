import React from "react";
import { blogpic } from "../img/blog-1.jpg";

const WideTeaser = ({wideprops}) => (
	<div className="wide-teaser">
		<div className="container">
			<div className="row">
				<div className="text-area">
					<h2 className="mb-4">{wideprops.headline}</h2>
					<p>{wideprops.description}</p>
				</div>
			</div>
		</div>
	</div>
)

export default WideTeaser;