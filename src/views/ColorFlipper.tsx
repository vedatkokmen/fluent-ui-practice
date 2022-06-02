/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Flex, Header } from "@fluentui/react-northstar";
import { useEffect, useState } from "react";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function ColorFlipper() {
  const [hexColor, setHexColor] = useState("");

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  };

  const createHex = () => {
    let hexNum = "#";
    for (let i = 0; i < 6; i++) {
      hexNum += hex[getRandomNumber()];
      setHexColor(hexNum);
    }
    console.log(hexColor);
  };

  useEffect(() => {
    createHex();
  }, []);

  return (
    <>
      <Box
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          width: "100vw",
          padding: ".1rem 0",
        }}
      >
        <Header as="h2" content="Color Flipper" />
      </Box>
      <Flex
        vAlign="center"
        column
        hAlign="center"
        style={{
          backgroundColor: hexColor,
          height: "100vh",
        }}
      >
        <Flex
          style={{
            backgroundColor: "#333",
            padding: "1rem 2rem",
            marginBottom: "1rem",
            borderRadius: "1rem",
          }}
        >
          <Flex>
            <Header as="h2" content="Background Color : " color="white" />
            <Header
              as="h2"
              content={hexColor}
              color="white"
              style={{
                marginLeft: "1rem",
              }}
            />
          </Flex>
        </Flex>
        <Flex>
          <Button content="CLICK ME" onClick={createHex} />
        </Flex>
      </Flex>
    </>
  );
}

export default ColorFlipper;
