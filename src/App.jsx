import { Routes, Route } from "react-router-dom";
import Cover from "./component/Cover";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Cover />} />
      </Routes>
    </>
  );
}

export default App;
