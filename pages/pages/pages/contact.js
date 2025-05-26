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
  gap: 1.2rem;
`;

const Input = styled.input`
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
  min-height: 110px;
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      <Container>
        <Title>Contact Us</Title>
        <p>
          Questions? Ready to move your freight? Reach out below or email <a href="mailto:info@victorcharlietrucking.com">info@victorcharlietrucking.com</a>
        </p>
        {submitted ? (
          <p style={{color: "#183153", fontWeight: 600}}>Thank you for reaching out! We’ll get back to you soon.</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <TextArea placeholder="How can we help you?" required />
            <Button type="submit">Send Message</Button>
          </Form>
        )}
        <p style={{marginTop:"1.5rem", fontSize:"1.05rem"}}>
          <b>Address:</b> Hinckley, OH<br/>
        </p>
      </Container>
    </Layout>
  );
}
