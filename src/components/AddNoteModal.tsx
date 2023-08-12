import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

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

const AddNoteModal : React.FC<addNoteModalState> = ({ addNoteModalView, setAddNoteModalView }) => {
    return (
        <Modal visible={addNoteModalView} animationType="fade" transparent={true}>
            <ModalContainer>
                <ModalContent>
                    <ModalTitle>teste</ModalTitle>
                    <ModalText>teste 1</ModalText>
                    <TouchableOpacity
                        onPress={() => {
                            setAddNoteModalView(false)
                        }}>
                        <CloseText>Close</CloseText>
                    </TouchableOpacity>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default AddNoteModal;
