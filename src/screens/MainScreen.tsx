import React, {useState} from 'react';
import styled from 'styled-components/native';
import Note from '../components/Note';
import Title from '../components/Title';
import { Text } from 'react-native';

const MainView = styled.View`
  display: flex;
  justify-content: start;
  gap: 30px;
  flex: 1;
`;

const NotesContainer = styled.View`
  display: flex;
  justify-content: start;
  flex-grow: 1;
  gap: 10px;
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
      <NotesContainer>
        <Note noteTitle="note 1" />
        <Note noteTitle="note 2" />
        <Note noteTitle="note 3" />
        <Note noteTitle="note 4" />
        <Note noteTitle="note 5" />
        <Note noteTitle="note 6" />
        <Note noteTitle="note 7" />
        <Note noteTitle="note 8" />
        <Note noteTitle="note 9" />
      </NotesContainer>
      <AddNoteButton onPress={test}>
        <AddNoteButtonText>+</AddNoteButtonText>
      </AddNoteButton>
    </MainView>
  );
};
export default MainScreen;
