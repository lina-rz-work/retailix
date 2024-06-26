import { Hero } from "../../components/Hero/Hero";
import { Featured } from "../../components/Featured/Featured";
import { Offers } from "../../components/Offers/Offers";
import { NewCollections } from "../../components/NewCollections/NewCollections";
import { Newsletter } from "../../components/Newsletter/Newsletter";

export const Home: React.FC = () => {

  return (
    <div>
      <Hero />
      <Featured />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}
