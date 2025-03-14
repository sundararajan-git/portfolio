import { useEffect, useState } from "react";

const text = `
  const express = require('express');
  const app = express();

  // Middleware
  app.use(express.json());

  // Routes
  app.get('/', (req, res) => {
  res.send('Hello, World!');
  });

  // Start Server
  app.listen(PORT, () => {
  console.log("Server is running"));
}`;
const CodeMock = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="mockup-code bg-black text-white w-full min-h-[60%] py-8 p-2 self-start">
      <pre className="font-sans text-white jetbrains-mono text-xs sm:text-sm">
        {displayText}
      </pre>
    </div>
  );
};
export default CodeMock;
