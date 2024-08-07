import React from "react";
import { Link } from 'react-scroll';
import { HeroContainer, HeroHeader } from "./styles";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";

export const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroHeader>SPRING COLLECTION</HeroHeader>
      <Link to="collection" smooth={true} offset={-100}>
        <PrimaryButton text={"SEE COLLECTION"} />
      </Link>
    </HeroContainer>
  )
}
