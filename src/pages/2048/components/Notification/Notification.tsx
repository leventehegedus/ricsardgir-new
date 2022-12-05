import React, { FC } from 'react';
import StyledBackdrop from './StyledBackdrop';
import StyledModal from './StyledModal';
import Button from '../Button';
import Box from '../Box';
import Text from '../Text';

export interface NotificationProps {
  win: boolean;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ win, onClose }) => (
  <StyledModal>
    <StyledBackdrop />
    <Box paddingBlock="s5" background="transparent">
      <Text fontSize={24} color="primary" fontWeight="bold">
        {win ? 'Vagyok olyan menő, mint Harrison Ford' : 'Rossz, mint a gitár, rossz, mint a szinti'}
      </Text>
    </Box>
    <Button onClick={onClose}>{win ? 'Tovább' : 'Újra'}</Button>
  </StyledModal>
);

export default Notification;
