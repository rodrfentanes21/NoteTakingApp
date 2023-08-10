import React from 'react';
import styled from 'styled-components/native';

interface NoteProps {
  noteTitle: string;
}

const NoteComponent = styled.Text`
  font-size: 30px;
  color: dodgerblue;
  padding-left: 30px;
`;
const Note = ({noteTitle}: NoteProps) => {
  return <NoteComponent>{noteTitle}</NoteComponent>;
};

export default Note;
