import { Box, Button, Flex, Header } from "@fluentui/react-northstar";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Flex
      vAlign="center"
      hAlign="center"
      column
      style={{
        height: "100vh",
      }}
    >
      <Box>
        <Header as="h2" content="Counter" />
      </Box>
      <Box>
        <Header
          as="h2"
          content={count}
          style={{
            color: count > 0 ? "#00ff00" : "#ff0000",
          }}
        />
      </Box>
      <Flex gap="gap.large" padding="padding.medium">
        <Button content="Decrement" onClick={decrement} />
        <Button content="Reset" onClick={reset} />
        <Button content="Increment" onClick={increment} />
      </Flex>
    </Flex>
  );
};

export default Counter;
