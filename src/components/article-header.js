import React from "react";
import { blogpic } from "../img/blog-1.jpg";

const ArticleHeader = () => (
	<div className="article-header">
		<figure>
			<img src={blogpic} alt="Blogpic"/>
		</figure>
	</div>
)

export default ArticleHeader;
