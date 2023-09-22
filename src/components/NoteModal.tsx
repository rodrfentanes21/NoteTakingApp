import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { notes } from '../../data/Notes';
import { Context } from './NoteProvider';

const ModalContainer = styled.KeyboardAvoidingView`
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
    font-size: 30px;
    color: dodgerblue;
`;

const ModalComponent = styled.Modal`
    height: 50vh;
    width: 95vw;
`;

const NoteModal = () => {
    const { showPopup, noteValues, setShowPopup, setNoteValues, updateNotes } =
        useContext(Context);

    const queryClient = useQueryClient();

    const editNoteMutation = useMutation({
        mutationFn: () =>
            wait(1000).then(() =>
                notes.push({
                    title: noteValues.title,
                    body: noteValues.body,
                }),
            ),
        onSuccess: () => {
            console.log('oi2');
            queryClient.invalidateQueries(['notes']);
        },
    });

    const noteEditHandler = () => {
        console.log('oi');
        editNoteMutation.mutate();
        setShowPopup(false);
    };
    return (
        <KeyboardAvoidingView>
            <ModalComponent
                visible={showPopup}
                animationType="fade"
                transparent={true}>
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
                        <ScrollView>
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
                        </ScrollView>
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
            </ModalComponent>
        </KeyboardAvoidingView>
    );
};

function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}
export default NoteModal;
