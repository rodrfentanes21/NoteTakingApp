import React, { useContext } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { notes } from '../../data/Notes';
import { Context } from './NoteProvider';

const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ButtonsContainer = styled.View`
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CloseTouchableOpacity = styled.TouchableOpacity`
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
`;

const AddNoteTouchableOpacity = styled.TouchableOpacity`
    background-color: dodgerblue;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
`;

const ModalContent = styled.View`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const CloseText = styled.Text`
    font-size: 20px;
    color: dodgerblue;
`;

const SaveText = styled.Text`
    font-size: 20px;
    color: white;
`;

const ModalText = styled.TextInput`
    font-size: 20px;
`;

const ModalTitle = styled.TextInput`
    font-size: 50px;
    color: dodgerblue;
`;

const NoteModal = () => {
    const { showPopup, noteValues, setShowPopup, setNoteValues, updateNotes } =
        useContext(Context);

    const noteEditHandler = () => {
        const updatedNotes = notes.map((note) => {
            if (note.id === noteValues.id) {
                return {
                    ...note,
                    title: noteValues.title,
                    body: noteValues.body,
                };
            }
            return note;
        });
        updateNotes(updatedNotes);
    };
    return (
        <Modal visible={showPopup} animationType="fade" transparent={true}>
            <ModalContainer>
                <ModalContent>
                    <ModalTitle
                        value={noteValues.title}
                        onChangeText={(text) =>
                            setNoteValues({
                                ...noteValues,
                                title: text,
                            })
                        }
                    />
                    <ModalText
                        value={noteValues.body}
                        multiline={true}
                        onChangeText={(text) =>
                            setNoteValues({
                                ...noteValues,
                                body: text,
                            })
                        }
                    />
                    <ButtonsContainer>
                        <CloseTouchableOpacity
                            onPress={() => {
                                setShowPopup(false);
                            }}>
                            <CloseText>Close</CloseText>
                        </CloseTouchableOpacity>
                        <AddNoteTouchableOpacity onPress={noteEditHandler}>
                            <SaveText>Save</SaveText>
                        </AddNoteTouchableOpacity>
                    </ButtonsContainer>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default NoteModal;
