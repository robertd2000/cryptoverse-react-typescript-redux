import { Navbar, AppRouter, Footer } from "./components";

import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <AppRouter />
        <Footer />
      </div>
    </div>
  );
}
