// import { useEffect } from "react";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FocusWrapper from "./../components/FocusWrapper/index";
// import data from "../apiData.json";
export default function HomePage() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     se;
  //   });
  // });
  return (
    <div>
      <Navbar />
      <FocusWrapper />
      <Dashboard />
      <Footer />
    </div>
  );
}
