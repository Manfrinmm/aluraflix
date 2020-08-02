import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface ButtonLink {
  to: string;
  className?: string;
}

const ButtonLink: React.FC<ButtonLink> = ({ to, className, children }) => {
  return (
    <Container>
      <Link className={className} to={to}>
        {children}
      </Link>
    </Container>
  );
};

export default ButtonLink;
