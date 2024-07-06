import React from "react";
import { HeroContainer, HeroHeader } from "./styles";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";

export const Hero: React.FC = () => {

  function seeCollection() {
    window.scrollTo({
      top: 1660,
      behavior: 'smooth'
    });
  }

  return (
    <HeroContainer>
      <HeroHeader>SPRING COLLECTION</HeroHeader>
      <PrimaryButton onClick={seeCollection} text={"SEE COLLECTION"} />
    </HeroContainer>
  )
}
