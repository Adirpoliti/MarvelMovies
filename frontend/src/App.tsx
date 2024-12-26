import { Box } from "@mui/material";
import { SearchBar } from "./Components/searchBar";
import { AppStyled } from "./Styles/appStyle";

function App() {
  return (
    <AppStyled>
      <Box style={{ margin: "25px" }}>
        <img src="Assets/Images/logo.png" alt="logo" />
      </Box>
      <SearchBar />
    </AppStyled>
  );
}

export default App;
