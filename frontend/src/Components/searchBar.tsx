import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContainer, SearchBarStyled } from "../Styles/searchBarStyle";
import { Box } from "@mui/material";

export const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchIcon htmlColor="white" />
      <SearchBarStyled placeholder="Search" variant="standard" />
    </SearchBarContainer>
  );
};
