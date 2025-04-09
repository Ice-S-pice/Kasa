import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "@/components/Carrousel/Carrousel";
import Collapse from "@/components/Collapse/Collapse";
import Host from "@/components/Host/Host";
import Tarif from "@/components/Tarif/Tarif";
import Tag from "@/components/Tag/Tag";
import data from "@/data/logements.json";

export default function Appart() {
	const params = useParams();
	const navigate = useNavigate();
	const [pickedAppart, setPickedAppart] = useState();

	useEffect(() => {
		const getData = async () => {
			try {

				console.log("Données reçues :", data);


				const dataArray = Array.isArray(data)
					? data
					: data.logements ?? [];

				const picked = dataArray.find(({ id }) => id === params.id);
				if (!picked) {
					navigate("/404", { state: { message: "Appartement introuvable" } });
				} else {
					setPickedAppart(picked);
				}
			} catch (err) {
				console.error("Erreur de chargement :", err);
				navigate("/404", { state: { message: "Erreur de chargement" } });
			}
		};
		getData();
	}, [navigate, params.id]);

	const slidePics = pickedAppart?.pictures;
	const tags = pickedAppart?.tags;
	const equipments = pickedAppart?.equipments;
	const equip = equipments?.map((item, index) => (
		<li key={index} className="equipList">
			{item}
		</li>
	));

	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={pickedAppart.host.name}
								hostPic={pickedAppart.host.picture}
							/>
						</div>
						<div className="rate-container">
							<Tarif score={pickedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<Collapse aboutTitle="Description" aboutText={pickedAppart.description} />
					<Collapse aboutTitle="Équipements" aboutText={equip} />
				</div>
			</div>
		)
	);
}
