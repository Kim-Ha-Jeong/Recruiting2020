import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navb = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                소개
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/about/ewhaian">
                    이화이언 소개
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about/team">
                    팀 소개
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/about/OB">
                    OB 소감
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/notice">공지사항</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/submit">지원서 제출</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/FAQ">FAQ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/result">결과 확인</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navb;