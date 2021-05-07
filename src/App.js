import "./App.css";
import Header from "./components/Header";
import PopularRooms from "./components/PopularRooms";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <Statistics />
      <PopularRooms />
    </>
  );
}

export default App;
