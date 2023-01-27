import { Container, ImageCoffe } from "../styles/Home";
import image from "../assets/rocket-coffee.png";

import "../styles/Header";

export function Home() {
  return (
    <Container>
      <h1 className="title">Great Coffe</h1>
      <h1 className="subtitle">&lt; Great Code/&gt;</h1>
      <ImageCoffe src={image} />
    </Container>
  );
}
