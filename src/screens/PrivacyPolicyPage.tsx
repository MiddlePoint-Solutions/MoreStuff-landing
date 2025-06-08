import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const stripFrontmatter = (text: string): string => {
  const frontmatterPattern = /^---\s*\n([\s\S]*?)\n---\s*\n/;
  return text.replace(frontmatterPattern, '');
};

const PrivacyPolicyPage: React.FC = () => {
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/privacy_policy.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((text) => {
        console.log('Fetched markdown (raw):', text);
        const contentWithoutFrontmatter = stripFrontmatter(text);
        console.log('Markdown without frontmatter:', contentWithoutFrontmatter);
        setMarkdown(contentWithoutFrontmatter);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load privacy policy:', err);
        setError(err.message || 'Failed to load content.');
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  if (markdown === null || markdown.trim() === '') {
    return <div style={{ padding: '20px' }}></div>;
  }

  return (
    <div className="prose" style={{ padding: '20px', margin: 'auto' }}> {/* Added prose class and auto margin for centering */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicyPage;
