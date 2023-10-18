import Learning from "./pages/Learning";
import ChapterInfo from "./pages/ChapterInfo";
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
     
        <Routes>
          <Route path="/" element={<Learning />} />
          <Route path="/src/pages/ChapterInfo.jsx" element={<ChapterInfo />} />

        </Routes>
  
    </div>
  );
}

export default App;
