import React from "react";
import { StyledBanner, BannerHeader } from "./styles";
import { PrimaryButton } from "../Buttons/PrimaryButton/PrimaryButton";
import { banners } from "./bannerData";

interface BannerProps {
  category: string;
}

export const Banner: React.FC<BannerProps> = ({ category }) => {
  const banner = banners.find(banner => banner.category === category);

  if (!banner) {
    return null;
  }

  return (
    <StyledBanner {...banner}>
      <BannerHeader>{banner?.header}</BannerHeader>
      <PrimaryButton text="EXPLORE NOW"/>
    </StyledBanner>
  )
}
