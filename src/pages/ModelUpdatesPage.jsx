import React from 'react';
import { Link } from 'react-router-dom';

const ModelUpdatesPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent AI Model Updates</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        The latest updates from major AI companies including Google, OpenAI, Anthropic, and more
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Google
        </h2>
        
        <ModelUpdateItem
          company="Google"
          modelName="Gemini 2.5 Pro Experimental"
          releaseDate="March 2025"
          description="Reasoning model that excels at building web apps and code agents with a 1 million token context window. Underperforms on one popular coding benchmark compared to Claude Sonnet 3.7."
          keyFeatures={[
            "1 million token context window",
            "Excels at building web apps and code agents",
            "Reasoning capabilities"
          ]}
          availability="Requires a $20 monthly Gemini Advanced subscription"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#4285F4"
        />

        <ModelUpdateItem
          company="Google"
          modelName="Gemini 2.0 Pro Experimental"
          releaseDate="Early 2025"
          description="Excels at coding and understanding general knowledge with a super-long context window of 2 million tokens to help users process massive chunks of text."
          keyFeatures={[
            "Super-long context window of 2 million tokens",
            "Excels at coding and understanding general knowledge",
            "Helps users process massive chunks of text"
          ]}
          availability="Requires Google One AI Premium subscription ($19.99/month)"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#4285F4"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          OpenAI
        </h2>
        
        <ModelUpdateItem
          company="OpenAI"
          modelName="GPT-4o Image Generator"
          releaseDate="March 2025"
          description="Upgraded GPT-4o model that can generate images, not just text. Went viral for transforming images into Studio Ghibli-style anime. Raises copyright concerns due to style mimicking capabilities."
          keyFeatures={[
            "Can generate images, not just text",
            "Transforms images into various artistic styles",
            "Raises copyright concerns due to style mimicking"
          ]}
          availability="Requires ChatGPT Plus subscription ($20/month)"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#10a37f"
        />

        <ModelUpdateItem
          company="OpenAI"
          modelName="GPT-4.5 'Orion'"
          releaseDate="Early 2025"
          description="OpenAI's largest model to date touts strong 'world knowledge' and 'emotional intelligence' but underperforms on certain benchmarks compared to newer reasoning models."
          keyFeatures={[
            "OpenAI's largest model to date",
            "Strong 'world knowledge' and 'emotional intelligence'",
            "Underperforms on certain benchmarks"
          ]}
          availability="Requires OpenAI's $200-per-month plan"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#10a37f"
        />

        <ModelUpdateItem
          company="OpenAI"
          modelName="OpenAI o3-mini"
          releaseDate="2025"
          description="Latest reasoning model optimized for STEM-related tasks (coding, math, science). Not OpenAI's most powerful model but significantly lower cost due to smaller size."
          keyFeatures={[
            "Optimized for STEM-related tasks",
            "Lower cost due to smaller size"
          ]}
          availability="Free with usage limits; subscription required for heavy users"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#10a37f"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Anthropic
        </h2>
        
        <ModelUpdateItem
          company="Anthropic"
          modelName="Claude Sonnet 3.7"
          releaseDate="2025"
          description="Industry's first 'hybrid' reasoning model that can both provide quick answers and think things through when needed. Gives users control over how long the model can think."
          keyFeatures={[
            "Hybrid reasoning model",
            "Provides quick answers and in-depth thinking",
            "User control over thinking time"
          ]}
          availability="Available to all Claude users; heavier users need $20/month Pro plan"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#b29eff"
        />

        <ModelUpdateItem
          company="Anthropic"
          modelName="Claude 3.5 Sonnet"
          releaseDate="March/April 2025"
          description="Newest model from Anthropic, potentially competitive with ChatGPT's GPT-4o. Described as 'friggin powerful' in early reviews."
          keyFeatures={[
            "Competitive with ChatGPT's GPT-4o",
            "Strong performance in early reviews"
          ]}
          source="YouTube review"
          sourceLink="https://www.youtube.com/watch?v=uQ0FmerJyX8"
          logoColor="#b29eff"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Other Companies
        </h2>
        
        <ModelUpdateItem
          company="xAI"
          modelName="Grok 3"
          releaseDate="2025"
          description="Latest flagship model from Elon Musk-founded startup xAI claims to outperform other leading models on math, science, and coding. Following controversy about political bias in Grok 2, Musk pledged to make Grok 3 more 'politically neutral'."
          keyFeatures={[
            "Claims to outperform other models on math, science, and coding",
            "More 'politically neutral' than previous version"
          ]}
          availability="Requires X Premium subscription ($50/month)"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#1DA1F2"
        />

        <ModelUpdateItem
          company="Stability AI"
          modelName="Stable Virtual Camera"
          releaseDate="2025"
          description="Can generate 3D scenes and camera angles from a single 2D image but struggles with complex elements like humans and moving water."
          keyFeatures={[
            "Generates 3D scenes from a single 2D image",
            "Creates different camera angles",
            "Struggles with complex elements"
          ]}
          availability="Available for noncommercial research use on HuggingFace"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#F96319"
        />

        <ModelUpdateItem
          company="Cohere"
          modelName="Aya Vision"
          releaseDate="2025"
          description="Multimodal model for captioning images and answering questions about photos. Excels in languages other than English, unlike many competing models."
          keyFeatures={[
            "Captions images and answers questions about photos",
            "Excels in multiple languages",
            "Better non-English support than competitors"
          ]}
          availability="Free on WhatsApp"
          source="TechCrunch"
          sourceLink="https://techcrunch.com/2025/03/30/the-hottest-ai-models-what-they-do-and-how-to-use-them/"
          logoColor="#6A65F9"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Key Trends in AI Model Updates
        </h2>
        
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Current Trends</h3>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Reasoning Models:</span> Major AI companies are focusing on "reasoning" capabilities, with models that can think through complex problems step-by-step.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Multimodal Capabilities:</span> Most new models are multimodal, handling text, images, and in some cases video or 3D content.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Tiered Pricing:</span> Companies are offering models at different price points, from free tiers with limitations to premium subscriptions costing $200/month.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Specialized Models:</span> Rather than one-size-fits-all, companies are releasing specialized models optimized for specific tasks like research, coding, or image generation.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Context Window Expansion:</span> Context windows continue to grow, with Google's Gemini models offering 1-2 million tokens.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Agent Capabilities:</span> Models are increasingly being designed to act as autonomous agents that can perform tasks independently.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Competition Intensifying:</span> The competition between Google, OpenAI, and Anthropic is heating up, with each company rapidly releasing new models to stay competitive.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ModelUpdateItem = ({ company, modelName, releaseDate, description, keyFeatures, availability, source, sourceLink, logoColor }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ backgroundColor: logoColor + '22', width: '3rem', height: '3rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '1rem' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem', color: logoColor }}>{company.charAt(0)}</span>
        </div>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{modelName}</h3>
          <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>By {company} • Released {releaseDate}</p>
        </div>
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
      
      {availability && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Availability:</h4>
          <p>{availability}</p>
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

export default ModelUpdatesPage;
