import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

const Hero = styled.section`
  background: linear-gradient(120deg, #183153 60%, #FFD700 100%);
  color: ${props => props.theme.colors.white};
  padding: 4rem 2rem 3rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  color: ${props => props.theme.colors.secondary};
`;

const Sub = styled.p`
  font-size: 1.3rem;
  margin: 1rem auto 2rem auto;
  max-width: 600px;
`;

const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin: 2rem 0;
`;

const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(24,49,83,0.08);
  padding: 2rem;
  max-width: 320px;
  min-width: 240px;
  text-align: left;
  border-top: 4px solid ${props => props.theme.colors.secondary};
`;

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Title>Trucking Excellence, Delivered.</Title>
        <Sub>
          Serving Hinckley, OH and beyond with <b>top-notch power only, flatbed, and step deck services</b>.
          We treat your freight like family, every mile, every time.
        </Sub>
        <Link href="/quote">
          <a style={{
            background: "#FFD700",
            color: "#183153",
            padding: "0.9rem 2rem",
            borderRadius: "6px",
            fontWeight: 700,
            fontSize: "1.1rem",
            textDecoration: "none"
          }}>Request a Quote</a>
        </Link>
      </Hero>
      <Services>
        <Card>
          <h3>Power Only</h3>
          <p>Flexible, on-demand power only trucking for your trailers. Reliable drivers and well-maintained equipment to move your loads seamlessly.</p>
        </Card>
        <Card>
          <h3>Flatbed</h3>
          <p>Our flatbed service handles everything from building materials to large equipment, with safety and speed.</p>
        </Card>
        <Card>
          <h3>Step Deck</h3>
          <p>Perfect for oversize or tall loads, our step deck solutions ensure your freight arrives safely and on schedule.</p>
        </Card>
      </Services>
    </Layout>
  );
}
