import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  cursor: pointer;
  font-weight: 600;
`;

export const DropdownTitle = styled.div`
  padding: 13px 18px;
  color: ${(props) => props.theme.dropdownTitleColor};
  font-size: 18px;
`;

export const DropdownList = styled.ul<{ isActive: boolean }>`
  padding: 10 0px;
  background-color: ${(props) => props.theme.dropdownBackground};
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`;

export const DropdownItem = styled.li<{ isCurrent: boolean }>`
  padding: 13px 18px;
  color: ${(props) => (props.isCurrent ? props.theme.white : props.theme.dropdownItemColor)};
  &:hover {
    opacity: 0.7;
  }
`;
