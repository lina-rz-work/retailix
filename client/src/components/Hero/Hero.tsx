import React from "react";
import { HeroContainer, HeroHeader } from "./styles";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";

export const Hero: React.FC = () => {

  function seeCollection() {
    window.scrollTo(0, 1660);
  }

  return (
    <HeroContainer>
      <HeroHeader>SPRING COLLECTION</HeroHeader>
      <PrimaryButton onClick={seeCollection} text={"SEE COLLECTION"} />
    </HeroContainer>
  )
}
