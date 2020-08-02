import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/LogoMain.png";
import ButtonLink from "../ButtonLink";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img className="Logo" src={Logo} alt="" />
      </Link>

      <div />

      <ButtonLink className="ButtonLink" to="/">
        Novo vídeo
      </ButtonLink>
    </Container>
  );
};

export default Header;
