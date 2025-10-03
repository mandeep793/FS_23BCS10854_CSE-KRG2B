import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  // Pages
  const Home = () => (
    <div className="page-card">
      <h2 className="page-title">🏠 Home</h2>
      <p>Welcome to our React Routing App! Use the menu above to navigate.</p>
    </div>
  );

  const About = () => (
    <div className="page-card">
      <h2 className="page-title">ℹ️ About Us</h2>
      <p>This app demonstrates React Router with Tailwind CSS and custom styles.</p>
    </div>
  );

  const Contact = () => (
    <div className="page-card">
      <h2 className="page-title">📞 Contact</h2>
      <p>You can reach us at <span className="text-blue-600">contact@example.com</span></p>
    </div>
  );

  return (
    <Router>
      <div className="app-container min-h-screen p-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          🌟 My Routing App
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 mb-8">
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
