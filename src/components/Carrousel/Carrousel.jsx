import { useState } from "react";
import left from "@/assets/images/arrow-left-bold-box.svg";
import right from "@/assets/images/arrow-right-bold-box.svg";

import './style.css'
export default function Carrousel({ slides }) {
	const [current, setCurrent] = useState(0); //je définis l'index du premier slide à 0
	const length = slides.length; // longueur du tableau de slides

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
	};

	return (
		<section id="carrousel-container" aria-hidden="true">
			{length > 1 && (
				<img
					src={left} 
					alt=""
					title="Afficher l'image précédente"
					role="button"
					onClick={prevSlide}
					className="leftArrow carrouselArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt=""
					title="Afficher l'image suivante"
					role="button"
					onClick={nextSlide}
					className="rightArrow carrouselArrow"
				/>
			)}
			{slides.map((slide, index) => (
				<div
					key={index} 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}
