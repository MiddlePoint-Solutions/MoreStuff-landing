import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Helper function to strip YAML frontmatter (if any)
const stripFrontmatter = (text: string): string => {
  const frontmatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  return text.replace(frontmatterPattern, '');
};

const TermsOfServicePage: React.FC = () => {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/terms_of_service.md') // Fetch the new markdown file
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        const contentWithoutFrontmatter = stripFrontmatter(text);
        setMarkdown(contentWithoutFrontmatter);
      })
      .catch((err) => {
        console.error('Failed to load terms of service:', err);
        setError(err.message || 'Failed to load content.');
      });
  }, []);

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  if (markdown === null) {
    // Show a loading state or a blank div until content is loaded
    // You might want to refine this for better UX, e.g., a spinner
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }
  
  if (markdown.trim() === '') {
    return <div style={{ padding: '20px' }}>Terms of Service content is not available or empty.</div>;
  }

  return (
    <div className="prose" style={{ padding: '20px', margin: 'auto' }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default TermsOfServicePage;
