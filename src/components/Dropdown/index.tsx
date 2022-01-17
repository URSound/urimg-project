import React, { useState, MouseEvent } from 'react';
import { DropdownItem, DropdownList, DropdownTitle, DropdownWrapper } from './Dropdown.styled';
import { IDropdownProps } from './Dropdown.type';

// const sectionDropdownList = [
//   { dropdownItemText: 'MOST VIRAL' },
//   { dropdownItemText: 'USER SUBMITTED' },
//   { dropdownItemText: 'HIGHEST SCORING' },
// ];

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
