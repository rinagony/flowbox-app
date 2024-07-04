import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton = styled(Button)`
  margin: 1rem;
  font-size: 1rem;
`;

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <StyledButton
      variant='contained'
      color='primary'
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;