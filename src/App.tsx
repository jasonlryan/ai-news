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
  <div style={{ fontFamily: "system-ui, sans-serif", background: "#fafafa" }}>
    <nav
      style={{
        backgroundColor: "#ffffff",
        padding: "16px",
        marginBottom: "24px",
        borderBottom: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
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
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="/images/BNlogo.png"
            alt="Brilliant Noise"
            style={{ height: "32px" }}
          />
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
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 16px",
        background: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        marginBottom: "24px",
      }}
    >
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
      <p>© 2025 Brilliant Noise. All rights reserved.</p>
    </footer>
  </div>
);

// App component
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <AboutPage />
            </Layout>
          }
        />
        <Route
          path="/academic-research"
          element={
            <Layout>
              <AcademicResearchPage />
            </Layout>
          }
        />
        <Route
          path="/model-updates"
          element={
            <Layout>
              <ModelUpdatesPage />
            </Layout>
          }
        />
        <Route
          path="/product-launches"
          element={
            <Layout>
              <ProductLaunchesPage />
            </Layout>
          }
        />
        <Route
          path="/ai-agents"
          element={
            <Layout>
              <AIAgentsPage />
            </Layout>
          }
        />
        <Route
          path="/learning-resources"
          element={
            <Layout>
              <LearningResourcesPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
