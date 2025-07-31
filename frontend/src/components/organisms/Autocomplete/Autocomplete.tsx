import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/input/Input';
import SuggestionItem from '../../molecules/SuggestionItem/SuggestionItem';
import Loader from '../../atoms/Loader/Loader';
import { useAutocomplete } from './useAutocomplete';
import ClearButton from '../../atoms/ClearButton/ClearButton';

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SuggestionsContainer = styled.div`
  position: absolute;
  width: 100%;
  border: 2px solid #ddd;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 468px;
  overflow-y: auto;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
  max-height: 396px;
  }
`;

const ErrorMessage = styled.div`
  padding: 10px;
  margin-top: 5px;
  border-radius: 4px;
  background-color: #ffebee;
  color: #c62828;
  font-size: 14px;
`;

const Autocomplete = () => {
  const {
    searchTerm,
    setSearchTerm,
    suggestions,
    loading,
    error,
    handleInputChange,
    handleSelectSuggestion
  } = useAutocomplete();

  return (
    <AutocompleteContainer>
      <Input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Digite pelo menos 4 caracteres para buscar..."
        hasSuggestions={suggestions.length > 0}
        aria-label="Campo de busca"
      />
      <ClearButton onClick={() => setSearchTerm('')} aria-label="Limpar busca" />

      {loading && <Loader />}
      {error && <ErrorMessage>Erro: {error}</ErrorMessage>}

      {searchTerm.length >= 4 && suggestions.length > 0 && (
        <SuggestionsContainer>
          {suggestions.slice(0, 20).map((suggestion, index) => (
            <SuggestionItem
              key={`${suggestion}-${index}`}
              suggestion={suggestion}
              query={searchTerm}
              onClick={() => handleSelectSuggestion(suggestion)}
            />
          ))}
        </SuggestionsContainer>
      )}
    </AutocompleteContainer>
  );
};

export default Autocomplete;
