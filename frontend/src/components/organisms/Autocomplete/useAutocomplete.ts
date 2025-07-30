import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_SUGGESTIONS = gql`
  query GetSuggestions($term: String!) {
    suggestions(term: $term) {
      id
      term
    }
  }
`;

export const useAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [getSuggestions, { data, loading, error }] = useLazyQuery(GET_SUGGESTIONS);
  
  useEffect(() => {
    if (searchTerm.length < 4) {
      setSuggestions([]);
      return;
    }
    
    const handler = setTimeout(() => {
      getSuggestions({ variables: { term: searchTerm } });
    }, 300);
    
    return () => clearTimeout(handler);
  }, [searchTerm, getSuggestions]);

  useEffect(() => {
    if (data?.suggestions) {
      setSuggestions(data.suggestions.map((item: any) => item.term));
    }
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectSuggestion = (term: string) => {
    setSearchTerm(term);
    setSuggestions([]);
  };

  return {
    searchTerm,
    suggestions,
    loading,
    error: error?.message,
    handleInputChange,
    handleSelectSuggestion
  };
};