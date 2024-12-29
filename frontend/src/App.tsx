import { AppStyled, LogoBox } from "./Styles/appStyle";
import { SearchPage } from "./Components/SearchPage";

function App() {
  return (
    <AppStyled>
      <LogoBox>
        <img src="Assets/Images/logo.png" alt="logo" />
      </LogoBox>
      <SearchPage />
    </AppStyled>
  );
}

export default App;
