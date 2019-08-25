import React from "react";

import { Container } from "./styles";

export default function SocialLink({ name, icon, link }) {
  return (
    <Container>
      <a href={link} target="_blank">
        <span className="icon">{icon}</span>
        <span className="name">{name}</span>
      </a>
    </Container>
  );
}
