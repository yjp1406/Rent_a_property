import React from "react";
import { Navbar as Nav, Button, Link, Text, useTheme } from "@nextui-org/react";

const Navbar = () => {
  return (
    <div>
      <Nav
        shouldHideOnScroll
        variant="sticky"
        disableBlur
        className="!bg-white"
        color="warning"
      >
        <Nav.Content enableCursorHighlight hideIn="xs" variant="highlight" activeColor="warning">
          <Nav.Link  href="#" >Buy</Nav.Link>
          <Nav.Link isActive href="#">
            Rent
          </Nav.Link>
          <Nav.Link href="#">Sell</Nav.Link>
          <Nav.Link href="#">Manage Property</Nav.Link>
          <Nav.Link href="#">Resource</Nav.Link>
        </Nav.Content>
        <Nav.Content >
          <Nav.Link href="#">Login</Nav.Link>
          <Nav.Item>
            <Button auto flat as={Link} href="#"  color="warning">
              Sign Up
            </Button>
          </Nav.Item>
        </Nav.Content>
      </Nav>
    </div>
  );
};

export default Navbar;
