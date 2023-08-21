import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

interface NoteInputProps {
    setBody: (newBody: string) => void;
    body: string;
}

const NoteInputComponent = styled.TextInput`
    height: 250px;
    width: 250px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
    padding-top: 15px;
    border-radius: 10px;
`;

const NoteInput: React.FC<NoteInputProps> = ({ setBody, body }) => {
    return (
        <NoteInputComponent
            onChangeText={setBody}
            style={styles.alignVertical}
            value={body}
            multiline={true}
            placeholder="Enter note content"
        />
    );
};

const styles = StyleSheet.create({
    alignVertical: {
        textAlignVertical: 'top',
    },
});

export default NoteInput;
