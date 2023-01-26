import Logo from "../assets/logo-desktop.svg";
import { Container, Image, Ul } from "../styles/Header";
import "../styles/Header";

export function Header() {
  return (
    <Container>
      <Image src={Logo} alt="Logo" />

      <Ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Recompensas</li>
        <li>GiftCards</li>
        <li>Lojas</li>
      </Ul>

      <button>PEGAR MEU CAFÉ</button>
    </Container>
  );
}
