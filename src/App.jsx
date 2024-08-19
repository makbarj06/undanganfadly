import { Routes, Route } from "react-router-dom";
import Cover from "./component/Cover";
import HalUndangan from "./component/HalUndangan";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<Cover />} />
        <Route path="/:id/aninvitation" element={<HalUndangan />} />
      </Routes>
    </>
  );
}

export default App;
