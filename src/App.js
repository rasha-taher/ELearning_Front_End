import Learning from "./pages/Learning";


import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/learning/*" element={<Learning />} />
        <Route path="/dashboardTeacher/*" element={<DashboardTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
