import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/header";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import BackToTop from "./helpers/BackToTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header />}
      <ScrollToTop />
      <AppRoutes />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
