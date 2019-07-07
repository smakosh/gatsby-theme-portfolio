import React from "react";
import { Link } from "gatsby";
import { defaultTitle } from "data";
import Container from "components/common/Container";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";

export default () => (
  <Wrapper as={Container}>
    <Link to="/">{defaultTitle}</Link>
    <NavbarLinks desktop />
  </Wrapper>
);
