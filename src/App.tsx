import { Grid, Image } from "@fluentui/react-northstar";

const images = [
  <Image
    key="allan"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AllanMunger.jpg"
  />,
  <Image
    key="amanda"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/AmandaBrady.jpg"
  />,
  <Image
    key="cameron"
    fluid
    src="https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/CameronEvans.jpg"
  />,
];

const App = () => {
  return <Grid columns={3} content={images}></Grid>;
};

export default App;
