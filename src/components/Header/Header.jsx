import logo from "@/assets/images/LOGO.svg";
import Nav from "@/components/Nav/Nav";
import './style.css'
export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence kasa" />
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
