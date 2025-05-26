import Layout from "../components/Layout";
import styled from "styled-components";

const Container = styled.section`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(24,49,83,0.06);
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

export default function About() {
  return (
    <Layout>
      <Container>
        <Title>About Victor Charlie Trucking LLC</Title>
        <p>
          Based in Hinckley, OH, Victor Charlie Trucking LLC is a family-owned and operated business with a passion for excellence in the trucking industry.
        </p>
        <p>
          We believe in treating every customer’s freight as if it were our own. Our family-oriented approach fosters a culture where trust, reliability, and character are at the heart of everything we do.
        </p>
        <p>
          Our mission is to cultivate an atmosphere of character development within our team—empowering every member to do what it takes to get any project done, no matter how intricate. We take pride in going above and beyond for our clients, delivering peace of mind with every load.
        </p>
        <p>
          At Victor Charlie Trucking, you’re more than just a customer. You’re part of the family.
        </p>
      </Container>
    </Layout>
  );
}
