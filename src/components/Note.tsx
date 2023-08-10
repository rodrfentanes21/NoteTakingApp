import React from 'react';
import styled from 'styled-components/native';

const NoteComponent = styled.Text`
  font-size: 30px;
  color: dodgerblue;
  padding-left: 30px;
`;
const Note = ({noteTitle}) => {
  return <NoteComponent>{noteTitle}</NoteComponent>;
};

export default Note;
