import React from 'react';
import styled from 'styled-components/native';

const TitleText = styled.Text`
  font-size: 50px;
  color: dodgerblue;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const TitleContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const Title = ({title}) => {
  return (
    <TitleContainer>
      <TitleText>{title}</TitleText>
    </TitleContainer>
  );
};

export default Title;
