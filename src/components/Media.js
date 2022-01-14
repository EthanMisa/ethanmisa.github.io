import React from "react";
import "../styles/Media.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import prmi from "../img/pr-mi.png";
import algo from "../img/algo-gen.png";
import sd from "../img/sd.png";

function Media() {
	return (
		<a id="media">
			<div className="m">
				<Carousel infinityLoop autoPlay>
					<div className="image">
						<img src={prmi} alt="" />
					</div>
					<div className="image">
						<img src={algo} alt="" />
					</div>
					<div className="image">
						<img src={sd} alt="" />
					</div>
				</Carousel>
			</div>
		</a>
	);
}

export default Media;
