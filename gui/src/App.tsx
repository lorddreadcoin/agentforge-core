import React, { useState } from "react";
import InputEraser from "./core/InputEraser";
import CodexPromptDisplay from "./components/CodexPromptDisplay";
import GreyedExplanation from "./components/GreyedExplanation";
import { rebuildPrompt } from "./core/PromptRebuilder";
import { delay } from "./core/DelayManager";

function App() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [codexPrompt, setCodexPrompt] = useState("");
  const [explanation, setExplanation] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputSubmit = async (value: string) => {
    setInput(value);
    setShowInput(false); // Fade out input
    setIsProcessing(true);
    await delay(300); // Quick fade out
    // Rebuild prompt
    const { codexPrompt, explanation } = rebuildPrompt(value);
    await delay(2700); // Finish 3s cinematic delay
    setCodexPrompt(codexPrompt);
    setShowPrompt(true);
    await delay(500); // Short delay before explanation
    setExplanation(explanation);
    setShowExplanation(true);
    setIsProcessing(false);
  };

  const handleRestart = () => {
    setInput("");
    setShowInput(true);
    setCodexPrompt("");
    setExplanation("");
    setShowPrompt(false);
    setShowExplanation(false);
    setIsProcessing(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-neutral-950 transition-all">
      {showInput && (
        <InputEraser
          onSubmit={handleInputSubmit}
          disabled={isProcessing}
          className={"transition-opacity duration-300 " + (showInput ? "opacity-100" : "opacity-0")}
        />
      )}
      {showPrompt && <CodexPromptDisplay prompt={codexPrompt} />}
      {showExplanation && <GreyedExplanation explanation={explanation} />}
      {(showPrompt || showExplanation) && (
        <button
          className="mt-8 px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-600 transition"
          onClick={handleRestart}
        >
          Start Over
        </button>
      )}
    </div>
  );
}

export default App;

      <SetupListeners />
    </VscThemeProvider>
  );
}

export default App;
