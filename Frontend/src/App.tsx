import { MovieCard } from './Components/card';
import { SearchBar } from './Components/searchBar';
import { AppStyled } from './Styles/appStyle';

function App() {
  return (
    <AppStyled>
      <SearchBar />
      <SearchBar />
      
      <MovieCard />
    </AppStyled>
  );
}

export default App;
{/* <img src='Assets/Images/logo.png'/> */}