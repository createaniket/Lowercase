import About from "./components/about/About";
import Artist from "./components/artist/Artist";
import Collaborations from "./components/collaborations/Collaborations";
import Homepage from "./components/homepage/Homepage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Photos from "./components/photos/Photos";
import Events from "./components/events/Events";



function App() {
  return (
    <BrowserRouter>

<Routes>

  
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/artist" element={<Artist />} />
      <Route path="/collab" element={<Collaborations />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/events" element={<Events />} />







</Routes>

    </BrowserRouter>
  );
}

export default App;
