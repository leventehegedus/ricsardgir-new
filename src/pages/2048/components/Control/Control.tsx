import React, { FC } from 'react';
import { MAX_SCALE, MIN_SCALE } from '../../utils/constants';
import Box from '../Box';
import Button from '../Button';
import Text from '../Text';

export interface ControlProps {
  onReset: () => void;
}

const Control: FC<ControlProps> = ({
  onReset,
}) => (
  <Box inlineSize="100%" justifyContent="space-between">
    <Button onClick={onReset} className="h-full">
      <Text fontSize={16} textTransform="capitalize">
        Új játék
      </Text>
    </Button>
  </Box>
);

export default React.memo(Control);
