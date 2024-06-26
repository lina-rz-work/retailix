import { ProductProps } from "../types/product";

export function getRelatedProducts(categoryProducts: ProductProps[], number: number) {
  const relatedProducts: ProductProps[] = [];

  while (relatedProducts.length < number) {
    const randomIndex = Math.floor(Math.random() * categoryProducts.length);
    const randomProduct = categoryProducts[randomIndex];
    
    if (!relatedProducts.some(prod => prod.id === randomProduct.id)) {
      relatedProducts.push(randomProduct);
    }
  }

  return relatedProducts;
};