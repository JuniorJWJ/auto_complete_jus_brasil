import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(0,0,0,0.1);
  border-radius: 50%;
  border-top: 3px solid #4CAF50;
  animation: ${spin} 1s linear infinite;
  margin-left: 10px;
`;

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: #666;
  font-size: 14px;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer />
      <span>Carregando...</span>
    </LoaderWrapper>
  );
};

export default Loader;
