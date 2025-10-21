import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  h1 {
    color: #495E57;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  label {
    color: #333;
    font-weight: 500;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  input, select {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #e1e5e9;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    box-sizing: border-box;
    
    &:focus {
      outline: none;
      border-color: #F4CE14;
    }
  }
  
  input[type="submit"] {
    background-color: #495E57;
    color: #fff;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;
    
    &:hover {
      background-color: #333;
    }
  }
`;

export const FormMessageError = styled.div`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  min-height: 1.2rem;
`;
