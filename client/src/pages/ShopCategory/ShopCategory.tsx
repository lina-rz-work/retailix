import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyledShopCategory, StyledLoader, Spinner } from "./styles";
import { ShopCategoryContent } from "../../components/ShopCategoryContent/ShopCategoryContent";
import { Banner } from "../../components/Banner/Banner";
import { banners } from "../../components/Banner/bannerData";
import { setScrolled } from "../../features/navbar/navbarSlice";
import { RootState } from "../../store/store";

interface ShopCategoryProps {
  category: string;
}

export const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  const allProducts = useSelector((state: RootState) => state.products.allProducts);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);
  const [loaderVisible, setLoaderVisible] = useState<boolean>(false);
  const categoryProducts = allProducts.filter(product => product.category === category);
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    setLoaderVisible(true);
    dispatch(setScrolled(true));

    const imagePromises = categoryProducts.map(product => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(undefined);
        img.onerror = () => reject();
        img.src = product.images[0].url;
      });
    });

    const bannerImagePromise = new Promise((resolve, reject) => {
      const bannerImage = new Image();
      bannerImage.onload = () => resolve(undefined);
      bannerImage.onerror = reject;
      const src = banners.find(banner => banner.category === category)?.imgUrl;
      if (!src) {
        return;
      }
      bannerImage.src = src;
    });

    Promise.all([...imagePromises, bannerImagePromise])
      .then(() => {
        if (isMounted) {
          setImagesLoaded(true);
          setTimeout(() => {
            if (isMounted) {
              setLoaderVisible(false);
              dispatch(setScrolled(false));
            }
          }, 500);
        }
      })
      .catch(err => {
        if (isMounted) {
          setImagesLoaded(true);
          dispatch(setScrolled(false));
          console.error('Failed to load image:', err);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [category, dispatch]);

  useEffect(() => {
    setImagesLoaded(false);
  }, [category]);

  return (
    <StyledShopCategory>
      {(!imagesLoaded || loaderVisible) &&
        <StyledLoader>
          <Spinner /> Loading...
        </StyledLoader>
      }

      {imagesLoaded &&
        <>
          <Banner category={category} />
          <ShopCategoryContent category={category}/>
        </>
      }
    </StyledShopCategory>
  )
}
