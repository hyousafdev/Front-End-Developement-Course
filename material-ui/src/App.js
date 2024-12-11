import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

//How we can used emotion or styled component
const BlueButton = styled(Button)(({theme}) => ({
  //backgroundColor: "blue",
  background: theme.palette.otherColor.main,
  color: "#000",
  margin: 5,
  "&:hover": {
    backgroundColor: "lightblue"
  },
  "&:disabled": {
    backgroungColor: "gray",
    color: "white"
  }
}))

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>I just start learning Material-UI</h2>

      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor" startIcon={<Settings />}>
        Settings{" "}
      </Button>
      <Button variant="contained" color="success" startIcon={<Add />}>
        Add new Post
      </Button>

      <Typography variant="h1" component="p">
        It uses h1 styles but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
      {/* Comment t the below code duw to using above emotion ot styled component */}
      {/* <Button variant="contained" disabled sx={{ 
        backgroundColor: "skyblue",
        color: "#888",
        margin: 5,
        "&:hover": {
          backgroundColor: "blue"
        },
        "&:disabled": {
          backgroungColor: "gray",
          color: "white"
        }
        }}>
        This is unique Button
      </Button> */}
    </div>
  );
}

export default App;
