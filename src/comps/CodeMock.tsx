import { useEffect, useState } from "react";

const text = `const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start Server
app.listen(3000, () => {
  console.log("Server is running ✅");
});
`;

// Function to apply syntax highlighting
const highlightCode = (code: string) => {
  const tokens = code.split(
    /(\b\d+\b|\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|default|import|export|class|extends|new|this|super|try|catch|finally|async|await|app|)\b|\/\/.*?$|".*?"|'.*?'|`.*?`)/g
  );

  return tokens.map((token, index) => {
    if (/^\/\/.*?$/.test(token))
      return (
        <span key={index} className={"text-cyan-300"}>
          {token}
        </span>
      );
    if (/^".*?"|'.*?'|`.*?`$/.test(token))
      return (
        <span key={index} className={"text-gray-200"}>
          {token}
        </span>
      );
    if (/\b\d+\b/.test(token))
      return (
        <span key={index} className={"text-red-600"}>
          {token}
        </span>
      );
    if (/\b(express|res|log)\b/.test(token))
      return (
        <span key={index} className={"text-sky-600"}>
          {token}
        </span>
      );
    if (/\b(req)\b/.test(token))
      return (
        <span key={index} className={"text-red-600"}>
          {token}
        </span>
      );
    if (/\b(console)\b/.test(token))
      return (
        <span key={index} className={"text-cyan-400"}>
          {token}
        </span>
      );
    if (/\b(require)\b/.test(token))
      return (
        <span key={index} className={"text-green-400"}>
          {token}
        </span>
      );
    if (/\b(app)\b/.test(token))
      return (
        <span key={index} className={"text-pink-600"}>
          {token}
        </span>
      );
    if (/\b(get|use|listen)\b/.test(token))
      return (
        <span key={index} className={"text-teal-600"}>
          {token}
        </span>
      );
    if (
      /\b(const|let|var|function|return|if|else|for|while|switch|case|break|default|import|export|class|extends|new|this|super|try|catch|finally|async|await)\b/.test(
        token
      )
    )
      return (
        <span key={index} className={"text-yellow-400"}>
          {token}
        </span>
      );

    return <span key={index}>{token}</span>;
  });
};

const CodeMock: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i)); // Reveal text one letter at a time
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="font-mono text-md sm:text-lg w-full min-h-[60%] bg-black text-white p-4 rounded-lg">
      {highlightCode(displayText)}
      <span className="animate-ping">|</span>
    </pre>
  );
};

export default CodeMock;
