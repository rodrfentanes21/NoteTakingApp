import React from 'react';
import styled from 'styled-components/native';

const NoteInputComponent = styled.TextInput`
    height: 250px;
    width: 250px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
    padding-top: 15px;
    border-radius: 10px;
    textAlignVertical: top;
`;

const NoteInput = () => {
    const [note, setNote] = React.useState('');
    return (
        <NoteInputComponent
            onChangeText={setNote}
            value={note}
            multiline={true}
            placeholder="Enter note content"
        />
    );
};

export default NoteInput;
