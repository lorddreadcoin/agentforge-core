import React from "react";

interface GreyedExplanationProps {
  explanation: string;
}

const GreyedExplanation: React.FC<GreyedExplanationProps> = ({ explanation }) => {
  if (!explanation) return null;
  return (
    <div className="mt-2 text-base italic text-gray-400 text-center">
      {explanation}
    </div>
  );
};

export default GreyedExplanation;
