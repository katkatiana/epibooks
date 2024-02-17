import MyNav from "./components/myNav/MyNav";
import MyFooter from "./components/MyFooter/MyFooter";
import Welcome from "./components/Welcome/Welcome";
import AllTheBooks from "./components/AllTheBooks/AllTheBooks";

const App = () => {
  return (
    <div className="App">
      <MyNav />
      <MyFooter />
      <Welcome />
      <AllTheBooks />
    </div>
  );
}

export default App;
