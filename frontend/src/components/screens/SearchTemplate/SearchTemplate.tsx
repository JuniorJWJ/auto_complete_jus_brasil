import React from 'react';
import styled from 'styled-components';
import Autocomplete from '../../organisms/Autocomplete/Autocomplete';

const SearchTemplateContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  
  h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
    
    h1 {
      font-size: 24px;
    }
  }
`;

const SearchTemplate = () => {
  return (
    <SearchTemplateContainer>
      <h1>Busca JusBrasil</h1>
      <Autocomplete />
    </SearchTemplateContainer>
  );
};

export default SearchTemplate;
