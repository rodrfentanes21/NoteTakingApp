import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { getNotes } from '../api/notes';
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

    const notesQuery = useQuery({
        queryKey: ['notes'],
        queryFn: getNotes,
        onError: (error) => {
            console.error(error);
        },
    });
    return (
        <MainView>
            <Title title="Note Taking App" />
            <NoteProvider notes={notesQuery.data} />
            <AddNoteButton setAddNoteModalView={setAddNoteModalView} />
            <AddNoteModal
                addNoteModalView={addNoteModalView}
                setAddNoteModalView={setAddNoteModalView}
            />
        </MainView>
    );
};

function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}
export default MainScreen;
