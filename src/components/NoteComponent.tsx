import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Context } from './NoteProvider';

interface NoteProps {
    id: string;
    title: string;
    body: string;
}

const NoteText = styled.Text`
    font-size: 30px;
    color: dodgerblue;
    padding-left: 30px;
`;
const NoteComponent = (props: NoteProps) => {
    const { noteValues, setShowPopup, setNoteValues } = useContext(Context);

    const clickEvent = () => {
        setShowPopup(true);
        setNoteValues(props);
    };

    return (
        <TouchableOpacity onPress={clickEvent}>
            <NoteText>{props.title}</NoteText>
        </TouchableOpacity>
    );
};

export default NoteComponent;
