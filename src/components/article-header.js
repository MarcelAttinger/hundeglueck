import React from "react";
import blogpic from "../img/blog-1.jpg";

const ArticleHeader = () => (
	<div className="article-header">
		<figure>
			<img src={blogpic} alt="Blogpic"/>
		</figure>
		<div className="container">
			<div className="row">
				<div className="col article-header-content">
					<h1>Entdecken Sie meinen Blog</h1>
					<div className="subheadline">
						In meiner langjährigen Erfahrung als Hundehalterin und Trainerin habe ich selbst viel im Internet recherchiert und gestöbert.
						Heute möchte ich mein Wissen teilen und lade gerne zum Austausch ein.
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default ArticleHeader;
