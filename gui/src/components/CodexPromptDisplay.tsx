import React from "react";

interface CodexPromptDisplayProps {
  prompt: string;
}

const CodexPromptDisplay: React.FC<CodexPromptDisplayProps> = ({ prompt }) => {
  if (!prompt) return null;
  return (
    <div className="mt-8 text-2xl font-bold text-cyan-400 text-center">
      {prompt}
    </div>
  );
};

export default CodexPromptDisplay;
