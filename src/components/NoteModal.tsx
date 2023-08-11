import React from 'react';
import { Modal, Text, View } from 'react-native';
import styled from 'styled-components/native';

const CenteredView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
                margin-top: 22;
`;

const NoteModal = () => {
  return (
    <View>
      <Modal
      animationType='fade'
      transparent={true}
      visible={true}>
        <Text>teste</Text>
      </Modal>
    </View>
  )
}

export default NoteModal