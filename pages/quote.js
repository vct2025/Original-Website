import Layout from "../components/Layout";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(24,49,83,0.06);
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.secondary};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  min-height: 90px;
`;

const Button = styled.button`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  padding: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #e6c200;
  }
`;

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <Container>
        <Title>Request a Quote</Title>
        <p>
          Get a fast, custom quote for your freight. Fill in the details below and our team will get back to you promptly.
        </p>
        {submitted ? (
          <p style={{color: "#183153", fontWeight: 600}}>Thank you! We’ll review your request and reach out with your quote.</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="tel" placeholder="Phone Number" required />
            <Select required>
              <option value="">Select Service</option>
              <option value="power only">Power Only</option>
              <option value="flatbed">Flatbed</option>
              <option value="step deck">Step Deck</option>
            </Select>
            <TextArea placeholder="Describe your freight, pickup & destination locations, dates, and any special needs" required />
            <Button type="submit">Request Quote</Button>
          </Form>
        )}
      </Container>
    </Layout>
  );
}
