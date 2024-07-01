import styled from 'styled-components';

interface OptionProps {
  selected: boolean;
}

export const StyledSortOptions = styled.div`
  font-family: "PT Sans", sans-serif;
  position: relative;
`;

export const SortButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;

  svg {
    align-self: end;
    transition: transform  0.3s ease-in-out;
  }
  
  &.open {
    svg {
      transition: transform  0.3s ease-in-out;
      transform: rotate(-180deg);
    }
  }
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 36px;
  right: -20px;
  max-width: 200px;
  width: max-content;
  padding: 0 28px;
  background-color: rgb(255 255 255 / 97%);
  font-size: 13px;
  font-weight: 300;
  border: 1px solid rgb(238, 238, 238);
  border-top: none;
  border-bottom: none;
  border-radius: 2px;
  overflow: hidden;
  z-index: 2;
  transition: max-height 0.3s ease-in-out, padding 0.3s ease-in-out;

  &.open {
    padding: 0 28px 18px;
    border-bottom: 1px solid rgb(238, 238, 238);
  }
`;

export const Option = styled.div<OptionProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #2e3131;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const CheckMark = styled.span`
  height: 17px;
  font-weight: bold;
  color: #2e3131;
  margin-right: 7px;
`;

export const EmptyMark = styled.span`
  width: 16.75px;
`;
