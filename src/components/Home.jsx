import CardItem from "./CardItem";
import Hero from "./Hero";
import { DEFAULT_ITEMS } from "../data/data";
import { useSelector } from "react-redux";

const Home = () => {
  const cards = useSelector((store) => store.items);

  return (
    <>
      <Hero />
      <div className="cards-container">
        {cards.map((card) => {
          return (
            <CardItem
              id={card.id}
              title={card.item_name}
              text={card.description}
              image={card.image}
              price={card.price}
            />
          );
        })}
      </div>
    </>
  );
};
export default Home;
