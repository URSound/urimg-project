import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';

interface IDropdownProps {
  dropdownList: Array<{ dropdownItemText: string }>;
}

const DropdownWrapper = styled.div`
  cursor: pointer;
  font-weight: 600;
`;

const DropdownTitle = styled.div`
  padding: 13px 18px;
  color: ${(props) => props.theme.dropdownTitleColor};
  font-size: 18px;
`;

const DropdownList = styled.ul<{ isActive: boolean }>`
  padding: 10 0px;
  background-color: ${(props) => props.theme.dropdownBackground};
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

const DropdownItem = styled.li<{ isCurrent: boolean }>`
  padding: 13px 18px;
  color: ${(props) => (props.isCurrent ? props.theme.white : props.theme.dropdownItemColor)};
  &:hover {
    opacity: 0.7;
  }
`;

const sectionDropdownList = [
  { dropdownItemText: 'MOST VIRAL' },
  { dropdownItemText: 'USER SUBMITTED' },
  { dropdownItemText: 'HIGHEST SCORING' },
];

function Dropdown({ dropdownList }: IDropdownProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [currentDropdownValue, setCurrentDropdownValue] = useState<string | null>(dropdownList[0].dropdownItemText);
  const onClickDropdown = () => {
    setIsActive(!isActive);
  };
  const onClickDropdownItem = (e: MouseEvent<HTMLElement>) => {
    const { textContent } = e.target as HTMLLIElement;
    setCurrentDropdownValue(textContent);
    setIsActive(!isActive);
  };

  return (
    <DropdownWrapper>
      <DropdownTitle
        role="button"
        tabIndex={0}
        className="dropdown-title"
        onClick={onClickDropdown}
        onKeyDown={onClickDropdown}
      >
        {currentDropdownValue}
      </DropdownTitle>
      <DropdownList isActive={isActive}>
        {dropdownList.map(({ dropdownItemText }) => (
          <DropdownItem
            key={dropdownItemText}
            className="dropdown-item"
            onClick={onClickDropdownItem}
            isCurrent={dropdownItemText === currentDropdownValue}
          >
            {dropdownItemText}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownWrapper>
  );
}

export default Dropdown;
