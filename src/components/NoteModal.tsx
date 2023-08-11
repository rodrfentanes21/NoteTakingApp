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

const ModalText = styled.Text`
    font-size: 20px;
`;

interface ModalComponentProps {
    isVisible: boolean;
    onClose: () => void;
}

const NoteModal = () => {
    const { showPopup, noteValues, setShowPopup, setNoteValues } =
        useContext(Context);
    console.log(showPopup);
    return (
        <Modal visible={showPopup} animationType="fade" transparent={true}>
            <ModalContainer>
                <ModalContent>
                    <ModalText>teste123</ModalText>
                    <TouchableOpacity
                        onPress={() => {
                            setShowPopup(false);
                        }}>
                        <ModalText>Close Modal</ModalText>
                    </TouchableOpacity>
                </ModalContent>
            </ModalContainer>
        </Modal>
    );
};

export default NoteModal;
