import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VERSION_VIDEO_MAP: Record<number, string> = {
  14: 'https://www.youtube.com/watch?v=gcwzWzC7gUA',
  13: 'https://www.youtube.com/watch?v=9KdP2idt6LE',
  12: 'https://www.youtube.com/watch?v=0DTjOdye6vM',
};

const DEFAULT_VIDEO_URL = 'https://www.youtube.com/';

const AndroidVersionRedirect: React.FC = () => {
  const { version } = useParams<{ version: string }>();

  const parsed = version ? Number(version) : NaN;
  const isInt = Number.isInteger(parsed);
  const targetUrl = isInt ? (VERSION_VIDEO_MAP[parsed] ?? DEFAULT_VIDEO_URL) : DEFAULT_VIDEO_URL;

  // Auto-redirect; UI below serves as a fallback if something prevents navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        window.location.assign(targetUrl);
      } catch (e) {
        // Fallback if assign throws
        window.location.href = targetUrl;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [targetUrl]);

  return (
    <main
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#6650a4' }}
    >
      <div className="text-center text-white px-6">
        <p className="text-lg mb-6">
          Redirecting you to instructions {isInt ? `for Android ${version}` : ''}
        </p>
        <a
          href={targetUrl}
          className="inline-block bg-white text-[#6650a4] font-medium px-5 py-3 rounded-md shadow hover:opacity-90 transition"
        >
          Open video
        </a>
      </div>
    </main>
  );
};

export default AndroidVersionRedirect;
