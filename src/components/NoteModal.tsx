import React, { useContext } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Context } from './NoteProvider';

const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
`;

const CloseText = styled.Text`
    font-size: 20px;
    color: darkslateblue;
`;

const ModalText = styled.Text`
    font-size: 20px;
`;

const ModalTitle = styled.Text`
    font-size: 50px;
    color: dodgerblue;
`;

const NoteModal = () => {
    const { showPopup, noteValues, setShowPopup, setNoteValues } =
        useContext(Context); // maintain setnoteValues on context for (MAYBE) future edit feature
    return (
        <Modal visible={showPopup} animationType="fade" transparent={true}>
            <ModalContainer>
                <ModalContent>
                    <ModalTitle>{noteValues.title}</ModalTitle>
                    <ModalText>{noteValues.body}</ModalText>
                    <TouchableOpacity
                        onPress={() => {
                            setShowPopup(false);
                        }}>
                        <CloseText>Close</CloseText>
                    </TouchableOpacity>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default NoteModal;
