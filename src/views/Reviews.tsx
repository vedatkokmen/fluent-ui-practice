import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  ChevronEndIcon,
  ChevronStartIcon,
} from "@fluentui/react-icons-northstar";
import { Box, Button, Header, Image, Text } from "@fluentui/react-northstar";

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: faker.internet.avatar(),
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: faker.internet.avatar(),
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: faker.internet.avatar(),
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: faker.internet.avatar(),
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const Reviews = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const [item, setItem] = useState(reviews[currentItem]);

  const nextItem = () => {
    setCurrentItem((currentItem) => (currentItem + 1) % reviews.length);
    setItem(reviews[(currentItem + 1) % reviews.length]);
  };

  const prevItem = () => {
    setCurrentItem(
      (currentItem) => (currentItem - 1 + reviews.length) % reviews.length
    );
    setItem(reviews[(currentItem - 1 + reviews.length) % reviews.length]);
  };

  const randomItem = () => {
    setCurrentItem(Math.floor(Math.random() * reviews.length));
    setItem(reviews[Math.floor(Math.random() * reviews.length)]);
  };

  return (
    <main>
      <section className="container">
        {/* <!-- title --> */}
        <Box className="title">
          <Header as="h2" content="our reviews" />
          <Box className="underline"></Box>
        </Box>
        {/* <!-- review --> */}
        <article className="review">
          <Box className="img-container">
            <Image circular src={item.img} alt={item.name} />
          </Box>
          <Header as="h4" content={item.name} className="author" />
          <Text as="p" content={item.job} className="job" />
          <Text as="p" content={item.text} className="info" />
          {/* <!-- prev next buttons--> */}
          <Box className="button-container">
            <ChevronStartIcon onClick={prevItem} className="prev-btn" />
            <ChevronEndIcon onClick={nextItem} className="next-btn" />
          </Box>
          {/* <!-- random button --> */}
          <Button
            content="surprise me"
            className="random-btn"
            onClick={randomItem}
          />
        </article>
      </section>
    </main>
  );
};

export default Reviews;
