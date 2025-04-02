import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
      
      <h1 className="text-4xl font-bold mb-6">About This Website</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Purpose</h2>
        <p className="text-gray-800 mb-4">
          This website was created to provide a comprehensive overview of the latest developments in artificial intelligence from the past week. Our goal is to keep you informed about the rapidly evolving AI landscape across multiple domains, from academic research to practical applications.
        </p>
        <p className="text-gray-800">
          Whether you're a researcher, developer, business professional, or simply interested in AI, we aim to provide valuable insights and resources to help you stay up-to-date with the latest advancements.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Content Categories</h2>
        <p className="text-gray-800 mb-4">
          Our content is organized into five main categories:
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-lg">Academic Research</h3>
            <p className="text-gray-700">Recent AI research papers, breakthroughs, and academic developments</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-lg">Model Updates</h3>
            <p className="text-gray-700">Latest updates from major AI companies (Google, OpenAI, Anthropic, etc.)</p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-bold text-lg">Product Launches</h3>
            <p className="text-gray-700">New AI products and services released in the past week</p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="font-bold text-lg">AI Agents</h3>
            <p className="text-gray-700">News about autonomous AI agents, frameworks, and platforms</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-bold text-lg">Learning Resources</h3>
            <p className="text-gray-700">New AI courses, tutorials, and educational materials</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">Data Sources</h2>
        <p className="text-gray-800 mb-4">
          The information presented on this website has been collected from various sources, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>Academic journals and research papers</li>
          <li>Tech news websites and blogs</li>
          <li>Company press releases and announcements</li>
          <li>Social media and community forums</li>
          <li>Educational platforms and resources</li>
        </ul>
        <p className="text-gray-800 mt-4">
          We strive to provide accurate and up-to-date information by cross-referencing multiple sources and linking to original content whenever possible.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Technology</h2>
        <p className="text-gray-800 mb-4">
          This website was built using:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-800">
          <li>React - A JavaScript library for building user interfaces</li>
          <li>Vite - A modern frontend build tool</li>
          <li>Tailwind CSS - A utility-first CSS framework</li>
          <li>React Router - For navigation between pages</li>
        </ul>
        <p className="text-gray-800 mt-4">
          The website is designed to be responsive, accessible, and user-friendly across all devices.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
