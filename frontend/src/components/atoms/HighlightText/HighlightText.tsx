import React from 'react';
import styled from 'styled-components';

interface HighlightTextProps {
  text: string;
  query: string;
}

const HighlightTextContainer = styled.span`
  strong {
    font-weight: bold;
    color: #4CAF50;
  }
`;

const HighlightText = ({ text, query }: HighlightTextProps) => {
  if (!query) return <>{text}</>;

  const index = text.toLowerCase().indexOf(query.toLowerCase());
  if (index === -1) return <>{text}</>;

  return (
    <HighlightTextContainer>
      {text.substring(0, index)}
      <strong>{text.substring(index, index + query.length)}</strong>
      {text.substring(index + query.length)}
    </HighlightTextContainer>
  );
};

export default HighlightText;
