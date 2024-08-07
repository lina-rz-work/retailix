import React from "react";
import { Link } from "react-scroll";
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
      <Link to="shop_category" smooth={true} duration={500} offset={-100}>
        <PrimaryButton text="EXPLORE NOW"/>
      </Link>
    </StyledBanner>
  )
}
