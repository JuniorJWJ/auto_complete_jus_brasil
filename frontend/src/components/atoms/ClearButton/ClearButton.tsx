import React from 'react';
import styled from 'styled-components';

interface ClearButtonProps {
  onClick: () => void;
  'aria-label'?: string;
}

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: #888;
  font-size: 18px;
  padding: 0;

  &:hover {
    color: #333;
  }
`;

const ClearButton = ({ onClick, ...props }: ClearButtonProps) => {
  return (
    <Button onClick={onClick} {...props}>
      ×
    </Button>
  );
};

export default ClearButton;
