import Header from "./components/Header/Header";
import Home from './components/Home/Home'
import Genres from "./components/Genres/Genres";
import Authors from "./components/Authors/Authors";
import MyBooks from "./components/MyBooks/MyBooks";
import Search from "./components/Search/Search";

import NotFound from "./components/NotFound/NotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/genres" element={<Genres />} />
        <Route exact path="/authors" element={<Authors />} />
        <Route exact path="/my-books" element={<MyBooks/>} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;