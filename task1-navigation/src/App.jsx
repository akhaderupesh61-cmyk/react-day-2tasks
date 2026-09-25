
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

export default function App(){
  return(
    <BrowserRouter>
    <nav>
<Link to="/">Home</Link> |
<Link to="/projects">Projects</Link> | {" "}
<Link to="/contact">Contact</Link>
</nav>

<Routes>
  <Route path="/" element={<h1>Home Page</h1>} />
  <Route path="/projects" element={<h1>My Projects</h1>} />
  <Route path="/contact" element={<h1>Contact Me</h1>} />
</Routes>
    </BrowserRouter>

  )
}