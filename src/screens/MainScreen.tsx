import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Note, notes } from '../../data/Notes';
import NoteProvider from '../components/NoteProvider';
import Title from '../components/Title';

notes

const MainView = styled.View`
  display: flex;
  justify-content: start;
  gap: 30px;
  flex: 1;
`;



const AddNoteButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 80px;
  width: 80px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dodgerblue;
`;

const AddNoteButtonText = styled.Text`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
  color: white;
  line-height: 60px;
`;


const MainScreen = () => {
  const [count, setCount] = useState(0);
  const test = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count);
  };

  return (
    <MainView>
      <Title title="Note Taking App" />
      <NoteProvider notes={notes as Note[]} />
      <AddNoteButton onPress={test}>
        <AddNoteButtonText>+</AddNoteButtonText>
      </AddNoteButton>
    </MainView>
  );
};
export default MainScreen;
