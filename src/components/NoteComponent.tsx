import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Note } from '../../data/Notes';

interface NoteProps {
  noteTitle: string;
}

const NoteText = styled.Text`
  font-size: 30px;
  color: dodgerblue;
  padding-left: 30px;
`;
const NoteComponent = (props: Note) => {
  return (
    <TouchableOpacity onPress={() => {console.log('first')}}>
      <NoteText>{props.title}</NoteText>
    </TouchableOpacity>
  );
};

export default NoteComponent;
