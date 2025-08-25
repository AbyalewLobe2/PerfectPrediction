import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import HomePage from "@/pages/Home";
import PredictionPage from "@/pages/Predictions";
import HistoryPage from "@/pages/PredictionHistory";
import AboutPage from "@/pages/About";
import Signup from "./pages/SignupPage";
import Login from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <main className="container max-w-5xl mx-auto px-4 py-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predictions" element={<PredictionPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
