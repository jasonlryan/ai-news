import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Import page components from their respective files
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AcademicResearchPage from "./pages/AcademicResearchPage.jsx";
import ModelUpdatesPage from "./pages/ModelUpdatesPage.jsx";
import ProductLaunchesPage from "./pages/ProductLaunchesPage.jsx";
import AIAgentsPage from "./pages/AIAgentsPage.jsx";
import LearningResourcesPage from "./pages/LearningResourcesPage.jsx";

// Main layout components
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontFamily: "system-ui, sans-serif" }}>
    <nav
      style={{
        backgroundColor: "#f3f4f6",
        padding: "16px",
        marginBottom: "24px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3b82f6",
            textDecoration: "none",
          }}
        >
          AI News Weekly
        </Link>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link to="/" style={{ color: "#374151", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/academic-research"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            Research
          </Link>
          <Link
            to="/model-updates"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            Updates
          </Link>
          <Link
            to="/product-launches"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            Products
          </Link>
          <Link
            to="/ai-agents"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            Agents
          </Link>
          <Link
            to="/learning-resources"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            Learning
          </Link>
          <Link
            to="/about"
            style={{ color: "#374151", textDecoration: "none" }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
      {children}
    </main>
    <footer
      style={{
        marginTop: "48px",
        padding: "24px",
        backgroundColor: "#f3f4f6",
        textAlign: "center",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <p>© {new Date().getFullYear()} AI News Weekly. All rights reserved.</p>
    </footer>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academic-research" element={<AcademicResearchPage />} />
          <Route path="/model-updates" element={<ModelUpdatesPage />} />
          <Route path="/product-launches" element={<ProductLaunchesPage />} />
          <Route path="/ai-agents" element={<AIAgentsPage />} />
          <Route
            path="/learning-resources"
            element={<LearningResourcesPage />}
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
