import Highlight, { Language, Prism } from "prism-react-renderer";
import nightOwlLight from 'prism-react-renderer/themes/vsDark';
import { FC } from "react";

type CodeBlockProps = {
  className: string;
};

export const CodeBlock: FC<CodeBlockProps> = ({ children, className }) => {
  const language = className.replace(/language-/, "") as Language;

  if (!children || typeof children !== "string") {
    return null;
  }

  return (
    <Highlight Prism={Prism} theme={nightOwlLight} code={children.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: "20px" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
