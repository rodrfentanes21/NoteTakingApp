import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { notes } from '../../data/Notes';
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
    const notesQuery = useQuery({
        queryKey: ['notes'],
        queryFn: () => wait(1000).then(() => [...notes]),
    });
    // console.log(notesQuery.data);
    const [addNoteModalView, setAddNoteModalView] = useState(false);
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
