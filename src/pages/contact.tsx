import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8f6f3 0%, #fdfbf7 100%);
  padding: 100px 1.5rem 3rem;
  
  @media (max-width: 768px) {
    padding: 80px 1rem 1.5rem;
  }
`;

const ContactContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2.5rem;
    font-weight: 700;
    color: #8B4513;
    margin-bottom: 0.75rem;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const ContactIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
`;

const ContactText = styled.div`
  h3 {
    font-weight: 600;
    color: #8B4513;
    margin-bottom: 0.125rem;
    font-size: 0.9rem;
  }
  
  p {
    color: #666;
    margin: 0;
    font-size: 0.85rem;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem 1.25rem;
  }
`;

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.375rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8B4513;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.9rem;
  background-color: white;
  transition: border-color 0.2s ease;
  cursor: pointer;
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
  
  &:focus {
    outline: none;
    border-color: #8B4513;
  }
  
  option {
    padding: 0.5rem;
    background-color: white;
    color: #333;
  }
  
  &:hover {
    border-color: #8B4513;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #8B4513;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: linear-gradient(135deg, #8B4513, #A0522D);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #A0522D, #CD853F);
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(139, 69, 19, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function ContactUsPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <ContactContainer>
      <ContactContent>
        <ContactInfo>
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Whether you have a question about our restaurants, 
            want to make a reservation, or just want to say hello, we're here to help.
          </p>
          
          <ContactDetails>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <h3>Address</h3>
                <p>Yerevan, Armenia</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactText>
                <h3>Phone</h3>
                <p>+374 10 123 456</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>✉️</ContactIcon>
              <ContactText>
                <h3>Email</h3>
                <p>info@fabricagroup.am</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>🕒</ContactIcon>
              <ContactText>
                <h3>Hours</h3>
                <p>Mon-Sun: 10:00 AM - 11:00 PM</p>
              </ContactText>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="restaurant">Restaurant</Label>
            <Select id="restaurant" name="restaurant" required>
              <option value="">Select a restaurant</option>
              <option value="general">General Inquiry</option>
              <option value="fabrica">Fabrica - Brunchy Loft Vibes</option>
              <option value="zanzibar">Zanzibar - Jungle Cocktail Bar</option>
              <option value="eltorro">El Torro - Spanish Steakhouse</option>
              <option value="babylon">Babylon - Exotic Arabesque</option>
              <option value="antar">Antar - Arctic Elegance</option>
            </Select>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" name="subject" required />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" name="message" required />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
} 