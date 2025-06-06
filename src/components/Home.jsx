import Banner from "@/components/Banner/Banner.jsx";
import Card from "@/components/Card/Card.jsx";

import { Link } from "react-router-dom";
import data from "@/data/logements.json";

export default function Home() {
	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}
