import React from "react";
import { StyledPrimaryButton } from "./styles";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ( { text, onClick } ) => {   // { value, onClick }

  return (
    <StyledPrimaryButton onClick={onClick}> {/* onClick={onClick} */}
      {text}
    </StyledPrimaryButton>
  )
}
