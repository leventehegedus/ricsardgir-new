import React, { FC } from 'react';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

export interface ControlProps {
  onReset: () => void;
}

const Control: FC<ControlProps> = ({
  onReset
}) => (
  <Box inlineSize="100%" justifyContent="space-between">
    <Button onClick={onReset} className="p-4">
      <Text fontSize={16} textTransform="capitalize">
        Új játék
      </Text>
    </Button>
  </Box>
);

export default React.memo(Control);
