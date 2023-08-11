import React, { useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Note } from '../../data/Notes';
import NoteComponent from './NoteComponent';
import NoteModal from './NoteModal';

export const Context = React.createContext({
    showPopup: false,
    setShowPopup: (value: boolean) => {},
    noteValues: {
        id: '',
        title: '',
        body: '',
    },
    setNoteValues: (value: Note) => {},
});

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
    const [showPopup, setShowPopup] = useState(false);
    const [noteValues, setNoteValues] = useState<Note>({
        id: '',
        title: 'teste',
        body: '',
    });

    return (
        <Context.Provider
            value={{ showPopup, setShowPopup, noteValues, setNoteValues }}>
            <NotesContainer>
                <FlatList
                    data={notes}
                    renderItem={({ item }) => (
                        <NoteComponent
                            id={item.id}
                            title={item.title}
                            body={item.body}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </NotesContainer>
            <NoteModal />
        </Context.Provider>
    );
};

export default NoteProvider;
