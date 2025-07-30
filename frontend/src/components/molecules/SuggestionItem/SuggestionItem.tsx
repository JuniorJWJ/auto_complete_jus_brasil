import React from 'react';
import styled from 'styled-components';
import HighlightText from '../../atoms/HighlightText/HighlightText';

interface SuggestionItemProps {
  suggestion: string;
  query: string;
  onClick: () => void;
}

const SuggestionItemContainer = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f8f8;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;

const SuggestionItem = ({ suggestion, query, onClick }: SuggestionItemProps) => {
  return (
    <SuggestionItemContainer onClick={onClick}>
      <HighlightText text={suggestion} query={query} />
    </SuggestionItemContainer>
  );
};

export default SuggestionItem;
