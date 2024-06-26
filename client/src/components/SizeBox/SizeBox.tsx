import { useState } from "react";
import { StyledSizeBox, SizesContainer, SelectSize, SizeTable, SizeBtnContainer, SizeButton, WarnMessage} from "./styles";

interface SizeBoxProps {
  selectedSize: string | null;
  warnMessage: boolean;
  setSelectedSize: (value: string) => void;
  setWarningMessage: (value: boolean) => void;
}

export const SizeBox: React.FC<SizeBoxProps> = ({ selectedSize, warnMessage, setSelectedSize, setWarningMessage }) => {

  function handleClick(size: string): void {
    setSelectedSize(size);
    setWarningMessage(false);
  }

  return (
    <StyledSizeBox>
      <SizesContainer>
        <SelectSize>Select size:</SelectSize>
        <SizeTable>Size table</SizeTable>
      </SizesContainer>

      <SizeBtnContainer>
        {['XS', 'S', 'M', 'L', 'XL'].map(size => (
          <SizeButton 
            key={size}
            className={size === selectedSize ? 'active' : ''}
            onClick={() => handleClick(size)}>
            {size}
          </SizeButton>
        ))}
      </SizeBtnContainer>

      {warnMessage && <WarnMessage>* Please select a size</WarnMessage>}
    </StyledSizeBox>
  )
}
