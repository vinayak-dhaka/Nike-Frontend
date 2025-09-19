import CardItem from "./CardItem";
import Hero from "./Hero";
import { DEFAULT_ITEMS } from "../data/data";
import { useSelector } from "react-redux";

const Home = () => {
  const cards = useSelector((store) => store.items);

  return (
    <>
      <Hero />
      <div
        className="container cards-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10rem",
        }}
      >
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
