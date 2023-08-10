import React, {useState} from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 50px;
  color: dodgerblue;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

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

const TitleContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const Note = styled.Text`
  font-size: 30px;
  color: dodgerblue;
  padding-left: 30px;
`;

const AddNoteButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 5px;
  right: 5px;
  height: 100px;
  width: 100px;
  border-radius: 9999px;
  display: flex;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  background-color: dodgerblue;
`;

const MainScreen = () => {
  const [count, setCount] = useState(0);
  const test = () => {
    setCount(prevCount => prevCount + 1);
    console.log(count);
  };

  return (
    <MainView>
      <TitleContainer>
        <Title>Note Taking App</Title>
      </TitleContainer>
      <NotesContainer>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
        <Note>Note</Note>
      </NotesContainer>
      <AddNoteButton onPress={test}>
        <Text
          style={{
            fontSize: 50,
            textAlign: 'center',
            color: 'white',
          }}>
          +
        </Text>
      </AddNoteButton>
    </MainView>
  );
};
export default MainScreen;
