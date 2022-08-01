import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMobilesPage from "./pages/AllMobiles";
import NewMobilePage from "./pages/NewMobile";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMobilesPage />} />
        <Route path="/New" element={<NewMobilePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
