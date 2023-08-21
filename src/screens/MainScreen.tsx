import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Note, notes } from '../../data/Notes';
import AddNoteButton from '../components/AddNoteButton';
import AddNoteModal from '../components/AddNoteModal';
import NoteProvider from '../components/NoteProvider';
import Title from '../components/Title';

const MainView = styled.View`
    display: flex;
    justify-content: start;
    gap: 30px;
    flex: 1;
`;

const MainScreen = () => {
    const [addNoteModalView, setAddNoteModalView] = useState(false);
    const [notesState, setNotesState] = useState(notes);
    return (
        <MainView>
            <Title title="Note Taking App" />
            <NoteProvider
                notes={notesState as Note[]}
                setNotesState={setNotesState}
            />
            <AddNoteButton setAddNoteModalView={setAddNoteModalView} />
            <AddNoteModal
                addNoteModalView={addNoteModalView}
                setAddNoteModalView={setAddNoteModalView}
            />
        </MainView>
    );
};
export default MainScreen;
