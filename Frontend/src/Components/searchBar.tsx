import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBarStyled } from '../Styles/searchBarStyle';

export const SearchBar = () => {
    return (
        <SearchBarStyled
            id="input-with-icon-textfield"
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon htmlColor='white'/>
                        </InputAdornment>
                    ),
                },
            }}
            variant="standard"
        />

    )
}