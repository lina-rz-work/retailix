import React, { useState, useRef, useEffect } from 'react';
import { StyledSortOptions, SortWrapper, Option, CheckMark, EmptyMark, SortButton } from './styles';
import { ReactComponent as DropDownImg } from '../../assets/images/icons/dropdown.svg';

interface SortOptionsProps {
  sortProducts: (value: string) => void;
  setSorted: (value: boolean) => void;
}

const options = [
  { label: 'Unsorted', value: 'unsorted' },
  { label: 'Price low to high', value: 'priceAsc' },
  { label: 'Price high to low', value: 'priceDesc' },
];

export const SortOptions: React.FC<SortOptionsProps> = ({ sortProducts, setSorted }) => {
  const [selectedOption, setSelectedOption] = useState('unsorted');
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  function handleOptionClick(value: string): void {
    setSorted(true);
    setSelectedOption(value);
    sortProducts(value);
    setIsOpen(false);
  }

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <StyledSortOptions>
      <SortButton onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'open' : ''}>
        Sort by
        <DropDownImg />
      </SortButton>

      <SortWrapper ref={contentRef} style={{ maxHeight: height }} className={isOpen ? 'open' : ''}>
        {options.map(option => (
          <Option
            key={option.value}
            selected={selectedOption === option.value}
            onClick={() => handleOptionClick(option.value)}
          >
            {selectedOption === option.value ? <CheckMark>✓</CheckMark> : <EmptyMark />}
            {option.label}
          </Option>
        ))}
      </SortWrapper>
    </StyledSortOptions>
  );
};

