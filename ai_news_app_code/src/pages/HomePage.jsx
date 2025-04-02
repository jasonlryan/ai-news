import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Hero Section */}
      <section style={{ 
        marginBottom: '4rem', 
        position: 'relative', 
        overflow: 'hidden', 
        borderRadius: '1rem', 
        background: 'linear-gradient(to right, #2563eb, #4f46e5)', 
        color: 'white' 
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: '0', 
          backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMkVBQkZGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzM5QjlGRiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48cGF0dGVybiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgaWQ9ImIiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjY0MCIgZmlsbD0idXJsKCNhKSIvPjxyZWN0IHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjY0MCIgZmlsbD0idXJsKCNiKSIvPjwvc3ZnPg==")', 
          opacity: '0.4' 
        }}></div>
        <div style={{ position: 'relative', padding: '2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>AI News Weekly</h1>
          <p style={{ fontSize: '1.5rem', color: '#bfdbfe', marginBottom: '1.5rem', maxWidth: '42rem' }}>
            Your comprehensive source for the latest AI developments from the past week
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/academic-research" style={{ 
              backgroundColor: 'white', 
              color: '#1d4ed8', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: '500', 
              transition: 'all 0.2s', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
            }}>
              Explore Research
            </Link>
            <Link to="/product-launches" style={{ 
              backgroundColor: '#1e40af', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: '500', 
              transition: 'all 0.2s', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
            }}>
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>Browse by Category</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
          <CategoryCard 
            title="Academic Research" 
            description="Recent AI research papers, breakthroughs, and academic developments"
            link="/academic-research"
            color="#eff6ff"
            hoverColor="#dbeafe"
            iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
          <CategoryCard 
            title="Model Updates" 
            description="Latest updates from major AI companies (Google, OpenAI, Anthropic, etc.)"
            link="/model-updates"
            color="#ecfdf5"
            hoverColor="#d1fae5"
            iconPath="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
          <CategoryCard 
            title="Product Launches" 
            description="New AI products and services released in the past week"
            link="/product-launches"
            color="#f5f3ff"
            hoverColor="#ede9fe"
            iconPath="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
          <CategoryCard 
            title="AI Agents" 
            description="News about autonomous AI agents, frameworks, and platforms"
            link="/ai-agents"
            color="#fefce8"
            hoverColor="#fef9c3"
            iconPath="M13 10V3L4 14h7v7l9-11h-7z"
          />
          <CategoryCard 
            title="Learning Resources" 
            description="New AI courses, tutorials, and educational materials"
            link="/learning-resources"
            color="#fff1f2"
            hoverColor="#ffe4e6"
            iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
          <CategoryCard 
            title="About" 
            description="Information about this website and its purpose"
            link="/about"
            color="#f9fafb"
            hoverColor="#f3f4f6"
            iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </div>
      </section>

      {/* Highlights Section */}
      <section style={{ 
        marginTop: '4rem', 
        background: 'linear-gradient(to bottom right, #f9fafb, white)', 
        padding: '2rem', 
        borderRadius: '1rem', 
        border: '1px solid #f3f4f6', 
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' 
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>This Week's Highlights</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Highlight 
            category="Academic Research"
            title="Advancements in multimodal learning and reasoning"
            date="April 1, 2025"
          />
          <Highlight 
            category="Model Updates"
            title="Google released Gemini 2.5 Pro Experimental with 1M token context window"
            date="March 30, 2025"
          />
          <Highlight 
            category="Product Launches"
            title="Amazon released Nova AI Agent for web browser automation"
            date="March 29, 2025"
          />
          <Highlight 
            category="AI Agents"
            title="Emergence AI released a system that automatically creates AI agents in real-time"
            date="March 28, 2025"
          />
          <Highlight 
            category="Learning Resources"
            title="OpenAI quietly launched OpenAI Academy, offering free AI courses and webinars"
            date="March 27, 2025"
          />
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, description, link, color, hoverColor, iconPath }) => {
  return (
    <Link to={link} style={{ 
      backgroundColor: color, 
      padding: '1.5rem', 
      borderRadius: '0.5rem', 
      border: '1px solid #f3f4f6', 
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', 
      transition: 'all 0.2s', 
      display: 'block' 
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ 
          backgroundColor: 'white', 
          padding: '0.75rem', 
          borderRadius: '0.5rem', 
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' 
        }}>
          <svg 
            style={{ height: '1.5rem', width: '1.5rem', color: '#2563eb' }} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={iconPath} 
            />
          </svg>
        </div>
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h2>
          <p style={{ color: '#4b5563', marginBottom: '1rem' }}>{description}</p>
          <div style={{ color: '#2563eb', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
            Read more 
            <svg style={{ width: '1rem', height: '1rem', marginLeft: '0.25rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Highlight = ({ category, title, date }) => {
  // Determine the correct route based on the category
  const getCategoryRoute = (category) => {
    switch(category) {
      case "Academic Research": return "/academic-research";
      case "Model Updates": return "/model-updates";
      case "Product Launches": return "/product-launches";
      case "AI Agents": return "/ai-agents";
      case "Learning Resources": return "/learning-resources";
      default: return "/";
    }
  };

  // For hover effect
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      to={getCategoryRoute(category)} 
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        display: 'block'
      }}
    >
      <div 
        style={{ 
          borderLeft: '4px solid #3b82f6', 
          paddingLeft: '1rem', 
          padding: '0.75rem', 
          borderTopRightRadius: '0.5rem', 
          borderBottomRightRadius: '0.5rem', 
          transition: 'background-color 0.2s',
          backgroundColor: isHovered ? '#f0f7ff' : 'transparent'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: '#2563eb' }}>{category}</span>
          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>{date}</span>
        </div>
        <h3 style={{ fontWeight: '500' }}>{title}</h3>
      </div>
    </Link>
  );
};

export default HomePage;
