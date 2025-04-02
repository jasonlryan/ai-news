import React from 'react';
import { Link } from 'react-router-dom';

const AcademicResearchPage = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <Link to="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>← Back to Home</Link>
      </div>
      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent AI Academic Research</h1>
      <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '2rem' }}>
        The latest breakthroughs and papers in AI research
      </p>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Healthcare AI Research
        </h2>
        
        <ResearchItem
          title="Making large language models into reliable physician assistants"
          publishDate="March 24, 2025"
          journal="Nature Medicine"
          authors="Sílvia Mamede & Henk G. Schmidt"
          description="This study highlights the potential of large language models to assist clinicians in patient care. The research suggests that future work should harness our understanding of the cognitive processes underlying clinical reasoning to further optimize LLMs' utility in healthcare settings."
          url="https://www.nature.com/articles/s41591-025-03606-w"
        />

        <ResearchItem
          title="GPT-4 assistance for improvement of physician performance on patient care tasks"
          publishDate="February 5, 2025"
          journal="Nature Medicine"
          authors="Ethan Goh, Robert J. Gallo, Eric Strong, et al."
          description="This randomized controlled trial assessed whether LLM assistance improves physician performance on open-ended management reasoning tasks compared to conventional resources. The study found that physicians using GPT-4 scored significantly higher compared to those using conventional resources (mean difference = 6.5%). LLM assistance can improve physician management reasoning in complex clinical vignettes."
          highlights={[
            "There was no significant difference between LLM-augmented physicians and LLM alone, suggesting the potential for AI to match human expertise in certain medical contexts."
          ]}
          url="https://www.nature.com/articles/s41591-024-03456-y"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          AI Agents and Search
        </h2>
        
        <ResearchItem
          title="Open Deep Search: Democratizing Search with Open-source Reasoning Agents"
          publishDate="March 26, 2025"
          authors="Multiple authors including researchers from Sentient AGI"
          description="This paper introduces Open Deep Search (ODS) to close the gap between proprietary search AI solutions and open-source alternatives. ODS augments open-source LLMs with reasoning agents that can use web search tools to answer queries. The system consists of two components: Open Search Tool and Open Reasoning Agent."
          highlights={[
            "ODS nearly matches and sometimes surpasses existing state-of-the-art baselines on two benchmarks (SimpleQA and FRAMES)",
            "On the FRAMES evaluation benchmark, ODS improves upon GPT-4o Search Preview by 9.7% in accuracy"
          ]}
          url="https://paperswithcode.com/paper/open-deep-search-democratizing-search-with"
          github="https://github.com/sentient-agi/opendeepsearch"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Computer Vision and Image Generation
        </h2>
        
        <ResearchItem
          title="InfiniteYou: Flexible Photo Recrafting While Preserving Your Identity"
          publishDate="March 20, 2025"
          authors="ByteDance Research"
          description="This research addresses the challenge of achieving flexible and high-fidelity identity-preserved image generation, particularly with advanced Diffusion Transformers (DiTs) like FLUX."
          url="https://paperswithcode.com/paper/infiniteyou-flexible-photo-recrafting-while"
          github="https://github.com/bytedance/infiniteyou"
        />

        <ResearchItem
          title="TripoSG: High-Fidelity 3D Shape Synthesis using Large-Scale Rectified Flow Models"
          publishDate="February 10, 2025"
          authors="VAST-AI-Research"
          description="This paper proposes a large-scale rectified flow transformer for 3D shape generation, achieving state-of-the-art fidelity through training on extensive, high-quality data."
          url="https://paperswithcode.com/paper/triposg-high-fidelity-3d-shape-synthesis-using"
          github="https://github.com/VAST-AI-Research/TripoSG"
        />
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', borderBottom: '2px solid #e5e7eb', paddingBottom: '0.5rem' }}>
          Trends in Academic AI Research
        </h2>
        
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Current Research Trends</h3>
          
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Medical AI Applications:</span> There's significant research on integrating LLMs into healthcare settings, with randomized controlled trials demonstrating their effectiveness in clinical reasoning and decision support.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Open-Source AI Development:</span> Research is focusing on closing the gap between proprietary and open-source AI solutions, particularly in areas like search and reasoning agents.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>3D Generation and Computer Vision:</span> Advanced techniques for 3D shape synthesis and identity-preserving image generation represent cutting-edge work in computer vision.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Reasoning Agents:</span> The development of AI systems that can reason about complex tasks and orchestrate multiple tools to solve problems is an emerging research area.
            </li>
            <li style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontWeight: 'bold' }}>Benchmark Improvements:</span> Many papers report significant improvements over previous state-of-the-art results on standard benchmarks, indicating rapid progress in AI capabilities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ResearchItem = ({ title, publishDate, journal, authors, description, highlights, url, github }) => {
  return (
    <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '1.5rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '1rem', fontSize: '0.875rem', color: '#4b5563' }}>
        {publishDate && (
          <div style={{ marginRight: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Published:</span> {publishDate}
          </div>
        )}
        {journal && (
          <div style={{ marginRight: '1.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Journal:</span> {journal}
          </div>
        )}
      </div>
      
      {authors && <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>By {authors}</p>}
      <p style={{ marginBottom: '1rem' }}>{description}</p>
      
      {highlights && highlights.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Key Findings:</h4>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
            {highlights.map((highlight, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#3b82f6', textDecoration: 'none' }}
          >
            Read the full paper →
          </a>
        )}
        
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#3b82f6', textDecoration: 'none' }}
          >
            View GitHub repository →
          </a>
        )}
      </div>
    </div>
  );
};

export default AcademicResearchPage;
