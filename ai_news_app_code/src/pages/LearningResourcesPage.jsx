import React from 'react';
import { Link } from 'react-router-dom';

const LearningResourcesPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent AI Learning Resources</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        The latest educational materials, courses, and tutorials for learning AI
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <ResourceItem
          title="OpenAI Academy"
          provider="OpenAI"
          releaseDate="March 2025"
          description="A free educational platform by OpenAI aimed at democratizing AI education and resources. Initially launched in September 2024 but was not accessible to the public. Recently made free for all users. Previously a paid educational hub. Launched quietly without much fanfare."
          contentTypes={[
            "Video courses and events",
            "Tens of hours of free learning materials",
            "Online virtual courses and planned offline events",
            "Topics ranging from fundamental AI knowledge to advanced skills"
          ]}
          targetAudience={[
            "Self-learners",
            "Educators",
            "Developers",
            "Students",
            "Job-seekers",
            "Nonprofit leaders",
            "Small business owners"
          ]}
          popularCourses={[
            "ChatGPT and Beyond: How to Handle AI in Schools — Best practices for integrating AI in educational settings",
            "Assistants & Agents Build Hour — Hands-on session on building AI-powered assistants and agents",
            "Practical Tips for Teachers to Use AI — Useful strategies for educators to leverage AI in classrooms",
            "Advanced Prompt Engineering — Techniques for crafting precise and effective AI prompts",
            "ChatGPT for Writing & Coding — Leveraging ChatGPT to streamline writing and programming tasks",
            "Getting Started with Sora — Introduction to Sora and its AI video-generation capabilities"
          ]}
          access="Available through the official OpenAI website at https://academy.openai.com/"
          sources={[
            { name: "Medium", link: "https://medium.com/data-science-in-your-pocket/openai-academy-free-ai-courses-by-openai-9afbda157cfb" },
            { name: "AIbase", link: "https://www.aibase.com/news/16784" }
          ]}
          bgColor="#ecfdf5"
        />

        <ResourceItem
          title="Top YouTube Channels for Learning AI in 2025"
          provider="Various Creators"
          releaseDate="April 2025"
          description="A recent article highlighted 25 game-changing YouTube channels for learning AI in 2025."
          popularCourses={[
            <>Andrej Karpathy (<a href="https://youtube.com/@AndrejKarpathy" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>@AndrejKarpathy</a>, 806K subscribers) - Former Tesla AI Director and OpenAI founding member. Content: Practical neural net knowledge, 'GPT from scratch', LLM explanations. Best for: No-BS, engineer-to-engineer breakdowns of modern deep learning.</>,
            <>Lex Fridman (<a href="https://youtube.com/@lexfridman" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>@lexfridman</a>, 4.68M subscribers) - Content: Long-form podcasts with tech leaders like Elon Musk, Sam Altman, and Geoffrey Hinton. Best for: Connecting AI with philosophy, consciousness, and the human condition.</>,
            <>DeepLearning.AI (<a href="https://youtube.com/@Deeplearningai" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>@Deeplearningai</a>, 389K subscribers) - Founded by Andrew Ng. Content: Expert interviews, short lessons, trend breakdowns, multimodal models, LLM explanations. Best for: Professionals seeking insider access to AI trends without lengthy lectures.</>,
            <>AI Explained (<a href="https://youtube.com/@aiexplained-official" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>@aiexplained-official</a>, 338K+ subscribers) - Content: Breakdowns of cutting-edge AI research and news (LLMs, AGI debates, company updates). Best for: Busy professionals and AI-curious folks wanting analysis without needing a PhD.</>,
            <>Two Minute Papers (<a href="https://youtube.com/@TwoMinutePapers" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>@TwoMinutePapers</a>, 1.62M subscribers) - Run by Dr. Károly Zsolnai-Fehér. Content: Bite-sized overviews of complex AI research papers. Best for: Staying on the bleeding edge of AI research without reading lengthy papers.</>
          ]}
          sources={[
            { name: "Medium", link: "https://medium.com/@xceed/learning-ai-in-2025-start-with-these-25-game-changing-youtube-channels-e5a32c36facf" }
          ]}
          bgColor="#fff1f2"
        />

        <ResourceItem
          title="SchoolAI"
          provider="SchoolAI"
          releaseDate="2025"
          description="AI-powered learning platform for personalized education. Tagline: 'Reach every student, every day'. Flexible platform designed for classroom use."
          access="Free to get started"
          sources={[
            { name: "SchoolAI", link: "https://schoolai.com/" }
          ]}
          bgColor="#eff6ff"
        />

        <ResourceItem
          title="Magic School AI Professional Development"
          provider="Magic School AI"
          releaseDate="2025"
          description="Professional development led by educators to improve AI literacy, maximize time savings, and optimize output."
          focus="Teacher AI skills development"
          sources={[
            { name: "Magic School AI", link: "https://www.magicschool.ai/professional-development" }
          ]}
          bgColor="#f5f3ff"
        />

        <ResourceItem
          title="AI Governance and Security Learning Resources"
          provider="Guidepoint Security"
          releaseDate="2025"
          description="Continuous learning in AI governance and security with practical tools, curated list of courses, and insights to advance expertise."
          focus="AI governance and security"
          sources={[
            { name: "Guidepoint Security", link: "https://www.guidepointsecurity.com/blog/supporting-continuous-learning-in-ai-governance-and-security/" }
          ]}
          bgColor="#fef3c7"
        />
      </div>

      <div style={{ backgroundColor: '#f9fafb', padding: '1.5rem', borderRadius: '0.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>Key Trends in AI Learning Resources</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Democratization of AI Education</h3>
            <p>Major AI companies like OpenAI are making high-quality educational resources freely available to the public.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Focus on Practical Applications</h3>
            <p>Learning resources are increasingly focused on practical, hands-on applications rather than just theoretical knowledge.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Specialized Content for Different Audiences</h3>
            <p>Resources are being tailored for specific audiences such as educators, developers, business professionals, and even older adults.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Video-Based Learning</h3>
            <p>YouTube channels and video courses are becoming a primary medium for AI education, offering accessible entry points for beginners.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Tool-Specific Training</h3>
            <p>Many new resources focus on specific AI tools and platforms (like ChatGPT, Sora, etc.) rather than general AI concepts.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Integration with Traditional Education</h3>
            <p>Growing emphasis on helping educators incorporate AI into their teaching methods and curricula.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Career-Focused Resources</h3>
            <p>Increasing number of resources aimed at helping professionals leverage AI for career advancement.</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
            <h3 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Ethical and Responsible AI Use</h3>
            <p>More resources are including content on the ethical implications and responsible use of AI technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceItem = ({ title, provider, releaseDate, description, contentTypes, targetAudience, popularCourses, access, focus, sources, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor || '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{title}</h2>
      <p style={{ color: '#6b7280', marginBottom: '1rem' }}>By {provider} • Released {releaseDate}</p>
      
      <p style={{ marginBottom: '1rem' }}>{description}</p>
      
      {contentTypes && contentTypes.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Content Types:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {contentTypes.map((type, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{type}</li>
            ))}
          </ul>
        </div>
      )}
      
      {targetAudience && targetAudience.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Target Audience:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {targetAudience.map((audience, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{audience}</li>
            ))}
          </ul>
        </div>
      )}
      
      {popularCourses && popularCourses.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Popular Courses/Resources:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {popularCourses.map((course, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>
                {typeof course === 'string' ? course : course}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {focus && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Focus:</h4>
          <p>{focus}</p>
        </div>
      )}
      
      {access && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Access:</h4>
          <p>{access}</p>
        </div>
      )}
      
      {sources && sources.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Sources:</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {sources.map((source, index) => (
              <a 
                key={index}
                href={source.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#3b82f6', textDecoration: 'none', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
              >
                {source.name}
                <span style={{ fontSize: '0.75rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LearningResourcesPage;
