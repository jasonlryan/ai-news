import React from 'react';
import { Link } from 'react-router-dom';

const ProductLaunchesPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent AI Product Launches</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        The latest AI products and services released in the past month
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <ProductItem
          name="Amazon Nova AI Agent"
          company="Amazon"
          launchDate="March 31, 2025"
          description="A new AI model that can take actions in a web browser on a user's behalf, designed to help developers build agents that can complete multi-step tasks without supervision."
          keyFeatures={[
            "Can perform complex tasks like searching for 'apartments by biking distance to the train station'",
            "Operates within a web browser environment",
            "Initially launching in research preview for developers"
          ]}
          competition="Directly competes with OpenAI's Operator and Anthropic's Computer Use tool"
          source="CNBC"
          sourceLink="https://www.cnbc.com/2025/03/31/amazons-nova-ai-agent-takes-on-rivals-openai-anthropic.html"
          category="AI Agents"
        />

        <ProductItem
          name="Amazon Interests and Health AI"
          company="Amazon"
          launchDate="March 31, 2025"
          description="AI-powered features to enhance product discovery and answer health-related questions on Amazon's marketplace."
          keyFeatures={[
            "Interests: Allows shoppers to enter conversational descriptions of what they're looking to buy",
            "Generates alerts when products meeting specified criteria become available",
            "Detects new product launches and when out-of-stock items return",
            "Helps track deals",
            "Currently available to a small subset of US customers via Amazon's mobile apps",
            "Planned rollout to all US customers in coming months",
            "Health AI: Answers health and wellness related questions",
            "Recommends relevant products",
            "Some responses include a badge indicating they were 'reviewed by US-licensed clinicians'",
            "Amazon Photos Update: Allows users to search their photo library to find similar products on Amazon Marketplace"
          ]}
          source="Shopifreaks"
          sourceLink="https://www.shopifreaks.com/amazon-launches-interests-and-health-ai-to-enhance-product-discovery/"
          category="E-commerce"
        />

        <ProductItem
          name="OpenText Titanium X with Cloud Editions 25.2"
          company="OpenText"
          launchDate="April 1, 2025"
          description="A comprehensive information management platform with AI-powered digital workforce capabilities."
          keyFeatures={[
            "Culmination of two years of strategic engineering",
            "Creates 'limitless digital knowledge workers' - AI agents that perform tasks and extend human team capabilities",
            "Comprehensive set of enterprise capabilities for process automation, data, security, and AI",
            "Seamless multi-cloud integration across AWS, Google Cloud, Azure, and on-premises environments",
            "Built-in integrations for platforms like SAP, Oracle, Salesforce, Microsoft, and Guidewire",
            "OpenText Aviator AI embedded throughout the platform",
            "99.99% cloud availability with AI-powered security and compliance"
          ]}
          components={[
            "Content Cloud: Introduces OpenText Content Management for Guidewire for knowledge management",
            "Security Cloud: Introduces Core Threat Detection & Response for cybersecurity management",
            "Business Network Cloud: Introduces Trading Grid Command Center for supply chain operations",
            "Observability and Service Management Cloud: AI-powered issue remediation and vulnerability management",
            "Experience Cloud: GenAI-powered content delivery across multiple channels",
            "DevOps Cloud: New copilot functionality to accelerate Java development and automate testing"
          ]}
          source="BigDataWire"
          sourceLink="https://www.bigdatawire.com/this-just-in/opentext-launches-titanium-x-with-ce-25-2-for-ai-powered-digital-workforce/"
          category="Enterprise Solutions"
        />

        <ProductItem
          name="Nextech Ecommerce AI Studio"
          company="Nextech"
          launchDate="April 1, 2025"
          description="AI platform that generates lifelike human product photos and videos for e-commerce."
          keyFeatures={[
            "Showcases humans in lifestyle AI product photography",
            "Positions Nextech as a leader in the Ecommerce AI market"
          ]}
          note="Full details unavailable due to access restrictions"
          source="Press Release"
          sourceLink="https://www.wric.com/business/press-releases/accesswire/1008253/nextechs-advances-its-ai-first-initiative-with-launch-of-ecommerce-ai-studio-showcasing-humans-in-lifestyle-ai-product-photography"
          category="Creative Tools"
        />

        <ProductItem
          name="Konveyor AI 0.1"
          company="Red Hat"
          launchDate="April 1, 2025"
          description="AI-driven application modernization tool that integrates generative AI into migration workflows."
          keyFeatures={[
            "Helps modernize applications without requiring fine-tuning of AI models"
          ]}
          source="Red Hat Blog"
          sourceLink="https://www.redhat.com/en/blog/new-updates-konveyor-ai-use-ai-driven-application-modernization-without-fine-tuning-model"
          category="Development Tools"
        />

        <ProductItem
          name="Sourcetable"
          company="Sourcetable"
          launchDate="Recent (exact date not specified)"
          description="AI-powered 'Spreadsheet 2.0' tool"
          keyFeatures={[
            "Raised $4.3M to launch"
          ]}
          source="BigDataWire"
          sourceLink="https://www.bigdatawire.com/this-just-in/opentext-launches-titanium-x-with-ce-25-2-for-ai-powered-digital-workforce/"
          category="Productivity"
        />
      </div>

      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Key Trends in AI Product Launches</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>1</span>
            <p><strong>AI Agents:</strong> Major tech companies are focusing on developing AI agents that can perform complex tasks autonomously, with Amazon, OpenAI, and Anthropic all competing in this space.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>2</span>
            <p><strong>Digital Workforce:</strong> Products like OpenText's Titanium X are positioning AI as a "digital workforce" that can augment human capabilities and automate routine tasks.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>3</span>
            <p><strong>E-commerce Enhancement:</strong> AI is being heavily integrated into e-commerce platforms to improve product discovery, personalization, and visual search capabilities.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>4</span>
            <p><strong>Health and Wellness:</strong> Companies are launching AI tools specifically designed to answer health-related questions and recommend relevant products.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>5</span>
            <p><strong>Multi-cloud Integration:</strong> Enterprise AI solutions are emphasizing seamless integration across multiple cloud environments and existing business platforms.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>6</span>
            <p><strong>Visual Search:</strong> Using AI to search and match products based on images is becoming a standard feature in e-commerce platforms.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>7</span>
            <p><strong>Conversational Interfaces:</strong> Many new AI products feature conversational interfaces that allow users to describe what they're looking for in natural language.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProductItem = ({ name, company, launchDate, description, keyFeatures, components, competition, note, source, sourceLink, category }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{name}</h3>
          <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>By {company} • Launched {launchDate}</p>
        </div>
        <span style={{ backgroundColor: '#f3e8ff', color: '#6b21a8', fontSize: '0.875rem', fontWeight: '500', padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>
          {category}
        </span>
      </div>
      
      <p style={{ marginBottom: '1rem' }}>{description}</p>
      
      {keyFeatures && keyFeatures.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Key Features:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {keyFeatures.map((feature, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {components && components.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Key Components:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {components.map((component, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{component}</li>
            ))}
          </ul>
        </div>
      )}
      
      {competition && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Competition:</h4>
          <p>{competition}</p>
        </div>
      )}
      
      {note && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Note:</h4>
          <p>{note}</p>
        </div>
      )}
      
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Source:</span> 
          <a 
            href={sourceLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#3b82f6', textDecoration: 'none', marginLeft: '0.5rem', fontSize: '0.875rem' }}
          >
            {source} →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductLaunchesPage;
