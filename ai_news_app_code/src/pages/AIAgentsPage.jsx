import React from 'react';
import { Link } from 'react-router-dom';

const AIAgentsPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent AI Agents News</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        The latest developments in autonomous AI agents, frameworks, and platforms
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <AgentItem
          title="Emergence AI's Autonomous Agent Creation System"
          company="Emergence AI"
          releaseDate="April 1, 2025"
          description="A new system that automatically creates AI agents rapidly in real-time based on the work at hand."
          keyFeatures={[
            "No-code, natural language, AI-powered multi-agent builder",
            "Works in real-time to create agents based on text prompts",
            "Evaluates incoming tasks, checks existing agent registry, and autonomously generates new agents",
            "Can proactively create agent variants to anticipate related tasks",
            "Described as a milestone in recursive intelligence",
            "Allows 'agents to create agents' within human-defined boundaries"
          ]}
          applications={[
            "Automating data-centric enterprise workflows",
            "ETL pipeline creation",
            "Data migration, transformation, and analysis"
          ]}
          technicalDetails={[
            "Integrates with leading AI models (OpenAI's GPT-4o and GPT-4.5, Anthropic's Claude 3.7 Sonnet, Meta's Llama 3.3)",
            "Compatible with frameworks like LangChain, Crew AI, and Microsoft Autogen",
            "Emphasizes interoperability, allowing enterprises to bring their own models and third-party agents",
            "Includes connector agents and data/text intelligence agents"
          ]}
          safetyFeatures={[
            "Guardrails and access controls",
            "Verification rubrics to evaluate agent performance",
            "Human-in-the-loop oversight to validate key decisions"
          ]}
          source="VentureBeat"
          sourceLink="https://venturebeat.com/ai/emergence-ais-new-system-automatically-creates-ai-agents-rapidly-in-realtime-based-on-the-work-at-hand/"
        />

        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginTop: '2.5rem', marginBottom: '1.5rem' }}>Daily AI Agent News (Last 7 Days)</h2>

        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>April 2, 2025</h3>
        <AgentItem
          title="Microsoft Security Copilot Expansion"
          company="Microsoft"
          releaseDate="April 2, 2025"
          description="Microsoft expanded its Security Copilot platform with 11 new autonomous AI agents."
          keyFeatures={[
            "Includes a phishing triage agent handling 30 billion annual phishing alerts",
            "Includes a vulnerability remediation agent for automated patching",
            "These agents now process 84 trillion daily security signals",
            "Maintains human oversight frameworks"
          ]}
          source="Microsoft Security Blog"
          sourceLink="#"
        />

        <AgentItem
          title="Fabric Data Agent Integrations"
          company="Microsoft"
          releaseDate="April 2, 2025"
          description="Microsoft deepened Fabric data agent integrations with Azure AI Foundry."
          keyFeatures={[
            "Enables enterprise conversational agents to leverage OneLake data for contextual decision-making"
          ]}
          source="Microsoft Azure Blog"
          sourceLink="#"
        />

        <AgentItem
          title="Apple Project Mulberry"
          company="Apple"
          releaseDate="April 2, 2025"
          description="Apple accelerated development of Project Mulberry."
          keyFeatures={[
            "AI health coaching agent that analyzes wearable data",
            "Provides nutrition/exercise recommendations",
            "iOS 19.4 integration planned for mid-2025"
          ]}
          source="Apple Health"
          sourceLink="#"
        />

        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>April 1, 2025</h3>
        <AgentItem
          title="Amazon Nova Act"
          company="Amazon"
          releaseDate="April 1, 2025"
          description="Amazon launched Nova Act."
          keyFeatures={[
            "General-purpose AI agent designed to automate web-based tasks",
            "Handles form filling and calendar management via SDK",
            "Positioned as competitor to OpenAI's Operator and Anthropic's Claude"
          ]}
          source="Amazon"
          sourceLink="#"
        />

        <AgentItem
          title="Sony GT Sophy 2.1"
          company="Sony AI"
          releaseDate="April 1, 2025"
          description="Sony AI released GT Sophy 2.1."
          keyFeatures={[
            "AI racing agent integrated into Gran Turismo 7",
            "Mimics human-like driving behaviors across skill levels"
          ]}
          source="Sony AI"
          sourceLink="#"
        />
      </div>

      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Key Trends in AI Agents</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>1</span>
            <p><strong>Autonomous Agent Creation:</strong> Systems that can automatically create and deploy AI agents based on specific tasks or goals.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>2</span>
            <p><strong>Multi-Agent Systems:</strong> Frameworks for coordinating multiple specialized AI agents to work together on complex tasks.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>3</span>
            <p><strong>Industry-Specific Agents:</strong> Specialized AI agents for healthcare, finance, cybersecurity, and other domains.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>4</span>
            <p><strong>Frontend Development Transformation:</strong> AI agents that assist with code generation, optimization, and design implementation.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>5</span>
            <p><strong>Human-AI Collaboration:</strong> Focus on creating agent-centric workplaces where humans and AI agents work together.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>6</span>
            <p><strong>Security and Privacy:</strong> Growing emphasis on securing AI agents and enabling them to work with encrypted data.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>7</span>
            <p><strong>Ethical Considerations:</strong> Ongoing discussions about the impact of AI agents on workforce displacement and decision-making.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>8</span>
            <p><strong>Infrastructure Optimization:</strong> Hardware and software innovations to support more efficient AI agent operations.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>9</span>
            <p><strong>No-Code Agent Creation:</strong> Tools that allow non-technical users to create and deploy AI agents.</p>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
            <span style={{ backgroundColor: '#dbeafe', color: '#1e40af', fontWeight: '500', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', marginRight: '0.5rem', marginTop: '0.25rem' }}>10</span>
            <p><strong>Agent Autonomy:</strong> Increasing capabilities for AI agents to operate independently with appropriate human oversight.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const AgentItem = ({ title, company, releaseDate, description, keyFeatures, applications, technicalDetails, safetyFeatures, source, sourceLink }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#6b7280', marginBottom: '1rem' }}>By {company} • Released {releaseDate}</p>
      
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
      
      {applications && applications.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Applications:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {applications.map((application, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{application}</li>
            ))}
          </ul>
        </div>
      )}
      
      {technicalDetails && technicalDetails.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Technical Details:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {technicalDetails.map((detail, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
      
      {safetyFeatures && safetyFeatures.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Safety Features:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {safetyFeatures.map((feature, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {source && (
        <div style={{ marginTop: '1rem' }}>
          <span style={{ fontWeight: 'bold', fontSize: '0.875rem' }}>Source:</span> 
          {sourceLink ? (
            <a 
              href={sourceLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#3b82f6', textDecoration: 'none', marginLeft: '0.5rem', fontSize: '0.875rem' }}
            >
              {source} →
            </a>
          ) : (
            <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>{source}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default AIAgentsPage;
