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
    updateNotes: (value: Note[]) => {},
});

interface NoteProviderProps {
    notes: Note[];
    setNotesState: any
}

const NotesContainer = styled.View`
    display: flex;
    justify-content: start;
    flex-grow: 1;
    gap: 10px;
`;

const NoteProvider = ({ notes, setNotesState }: NoteProviderProps) => {
    const [showPopup, setShowPopup] = useState(false);
    const [noteValues, setNoteValues] = useState<Note>({
        id: '',
        title: '',
        body: '',
    });
    const updateNotes = (updatedNotes: Note[]) => {
        setNotesState(updatedNotes);
    };

    return (
        <Context.Provider
            value={{
                showPopup,
                setShowPopup,
                noteValues,
                setNoteValues,
                updateNotes,
            }}>
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
