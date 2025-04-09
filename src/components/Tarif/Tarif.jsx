import emptyStar from "@/assets/images/emptyStar.svg";
import fullStar from "@/assets/images/star-rate.svg";
import './style.css'
export default function tarif({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="tarif-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( //affichage les étoiles du score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
