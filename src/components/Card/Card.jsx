import './style.css'
export default function Card({ cover, title }) { //les cartes de locations prennent les images et titres en props depuis Home
	return (
		<article className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}
