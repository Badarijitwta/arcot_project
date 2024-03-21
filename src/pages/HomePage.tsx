import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FocusWrapper from "./../components/FocusWrapper/index";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <FocusWrapper />
      <Dashboard />
      <Footer />
    </div>
  );
}
