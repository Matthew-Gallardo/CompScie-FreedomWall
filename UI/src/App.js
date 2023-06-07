import { useContext } from "react";
import Topbar from "./components/topBar/TopBar";
import Home from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/about";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Context } from "./context/Context";



function App()
 {
const {user}= useContext(Context);
return (
  <Router>
    <Topbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={user ? <Home/> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/post/:id" element={<Single />} />
      <Route path="/write" element={user ? <Write /> : <Login />} />
      <Route path="/settings" element={user ? <Settings /> : <Login />} />
    </Routes>
  </Router>
);
}

export default App;


