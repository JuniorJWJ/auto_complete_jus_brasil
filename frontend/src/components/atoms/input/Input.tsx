import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasSuggestions?: boolean;
}

const InputContainer = styled.input<{ hasSuggestions?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: ${({ hasSuggestions }) =>
    hasSuggestions ? '4px 4px 0 0' : '4px'};
  border-bottom: ${({ hasSuggestions }) =>
    hasSuggestions ? 'none' : '2px solid #ddd'};
  box-sizing: border-box;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
  }
`;

const Input = ({ hasSuggestions, ...props }: InputProps) => {
  return <InputContainer hasSuggestions={hasSuggestions} {...props} />;
};

export default Input;
