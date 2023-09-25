import React, { useState } from 'react';
import { FlatList } from 'react-native';
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
const NoteProvider = ({ notes }: any) => {
    const [showPopup, setShowPopup] = useState(false);
    const [noteValues, setNoteValues] = useState<Note>({
        id: '',
        title: '',
        body: '',
    });

    return (
        <Context.Provider
            value={{
                showPopup,
                setShowPopup,
                noteValues,
                setNoteValues,
            }}>
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
            <NoteModal />
        </Context.Provider>
    );
};

export default NoteProvider;
