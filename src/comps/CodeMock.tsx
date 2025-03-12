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
  console.log("Server is running" + PORT)});
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
    <pre className="font-sans text-primary jetbrains-mono">{displayText}</pre>
  );
};
export default CodeMock;
