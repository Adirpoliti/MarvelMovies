import { MarvelMovies } from './Components/marvelMovies';
import { SearchBar } from './Components/searchBar';
import { AppStyled } from './Styles/appStyle';

function App() {
  return (
    <AppStyled>
      <div style={{margin: "25px"}}>
      <img src='Assets/Images/logo.png'/>
      </div>
      <SearchBar />
      <MarvelMovies />
    </AppStyled>
  );
}

export default App;