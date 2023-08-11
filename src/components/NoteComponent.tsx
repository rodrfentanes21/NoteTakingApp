import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Note } from '../../data/Notes';
import { Context } from './NoteProvider';

interface NoteProps {
  noteTitle: string;
}

const NoteText = styled.Text`
  font-size: 30px;
  color: dodgerblue;
  padding-left: 30px;
`;
const NoteComponent = (props: Note) => {
  const { noteValues } = useContext(Context);
  return (
    <TouchableOpacity onPress={() => {console.log(noteValues.title)}}>
      <NoteText>{props.title}</NoteText>
    </TouchableOpacity>
  );
};

export default NoteComponent;
