import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';
import { notes } from '../../data/Notes';
import NoteInput from './NoteInput';

interface addNoteModalState {
    addNoteModalView: boolean;
    setAddNoteModalView: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.KeyboardAvoidingView`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const ModalTextInputDescription = styled.Text`
    font-size: 20px;
    color: dodgerblue;
`;

const ModalTitleInputDescription = styled.Text`
    font-size: 20px;
    color: dodgerblue;
`;

const TitleInput = styled.TextInput`
    height: 40px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
    border-radius: 10px;
    min-width: 250px;
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

const CloseText = styled.Text`
    font-size: 20px;
    color: dodgerblue;
`;

const AddText = styled.Text`
    font-size: 20px;
    color: white;
`;

const AddNoteModal: React.FC<addNoteModalState> = ({
    addNoteModalView,
    setAddNoteModalView,
}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const queryClient = useQueryClient();

    let CURRENT_ID = 6;

    const newNoteMutation = useMutation({
        mutationFn: () =>
            wait(1000).then(() =>
                notes.push({
                    title: title,
                    body: body,
                }),
            ),
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
        },
    });

    const addNoteHandler = () => {
        if (title.trim() !== '' && body.trim() !== '') {
            console.log('teste');
            newNoteMutation.mutate();

            setAddNoteModalView(false);
            setTitle('');
            setBody('');
        }
        return false;
    };
    return (
        <Modal
            visible={addNoteModalView}
            animationType="fade"
            transparent={true}>
            <ModalContainer>
                <ModalContent>
                    <ModalTitleInputDescription>
                        Title
                    </ModalTitleInputDescription>
                    <TitleInput
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Enter title"
                    />
                    <ModalTextInputDescription>Body</ModalTextInputDescription>
                    <NoteInput setBody={setBody} body={body} />
                    <ButtonsContainer>
                        <CloseTouchableOpacity
                            onPress={() => {
                                setAddNoteModalView(false);
                            }}>
                            <CloseText>Close</CloseText>
                        </CloseTouchableOpacity>
                        <AddNoteTouchableOpacity onPress={addNoteHandler}>
                            <AddText>Add</AddText>
                        </AddNoteTouchableOpacity>
                    </ButtonsContainer>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

function wait(duration: number) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}
export default AddNoteModal;


/* teste teste teste */