import React from 'react';
import styled from 'styled-components/native';

export interface addNoteButtonProps {
    setAddNoteModalView: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNoteButtonComponent = styled.TouchableOpacity`
    position: absolute;
    bottom: 15px;
    right: 15px;
    height: 80px;
    width: 80px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: dodgerblue;
`;

const AddNoteButtonText = styled.Text`
    font-size: 50px;
    font-weight: 300;
    text-align: center;
    color: white;
    line-height: 60px;
`;

const AddNoteButton : React.FC<addNoteButtonProps> = ({ setAddNoteModalView }) => {
    return (
        <AddNoteButtonComponent
            onPress={() => {
                setAddNoteModalView(true)
            }}>
            <AddNoteButtonText>+</AddNoteButtonText>
        </AddNoteButtonComponent>
    );
};

export default AddNoteButton;
