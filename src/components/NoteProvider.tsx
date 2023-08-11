import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Note } from '../../data/Notes';
import NoteComponent from './NoteComponent';

interface NoteProviderProps {
    notes: Note[];
  }

const NotesContainer = styled.View`
  display: flex;
  justify-content: start;
  flex-grow: 1;
  gap: 10px;
`;

const NoteProvider = ({ notes }: NoteProviderProps) => {
  return (
    <NotesContainer>
        <FlatList
          data={notes}
          renderItem={({ item }) => (
              <NoteComponent id={item.id} title={item.title} body={item.body} />
          )}
          keyExtractor={item => item.id}
      />
      </NotesContainer>
  )
}

export default NoteProvider