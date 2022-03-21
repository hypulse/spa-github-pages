import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/movie/:id" element={<Detail></Detail>} />
        <Route path="/hi" element={<h1>hi</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
