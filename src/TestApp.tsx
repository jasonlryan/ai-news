// No need to import React with modern JSX transform

function TestApp() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #2563eb, #7c3aed)",
        color: "white",
        padding: "1rem",
      }}
    >
      <h1
        style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        AI News App is Working!
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        This is a test component to verify React is working correctly.
      </p>
      <a
        href="/"
        style={{
          backgroundColor: "white",
          color: "#2563eb",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          fontWeight: "500",
          textDecoration: "none",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s ease",
        }}
      >
        Go to Home Page
      </a>
    </div>
  );
}

export default TestApp;
