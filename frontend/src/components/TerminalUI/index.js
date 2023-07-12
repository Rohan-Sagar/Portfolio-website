import React from "react";
import {
  RedCircle,
  YellowCircle,
  GreenCircle,
  StyledIDEContainer,
  NavBar,
  StyledCodeEditor,
  TextEditor,
} from "./Terminal.styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { initialScript } from "../../constants";

function TerminalUI() {
  return (
    <StyledIDEContainer>
      <NavBar>
        <RedCircle></RedCircle>
        <YellowCircle></YellowCircle>
        <GreenCircle></GreenCircle>
        <h4>Script.py</h4>
      </NavBar>
      <StyledCodeEditor>
        <TextEditor>
          <SyntaxHighlighter
            language="python"
            style={tomorrowNight}
            showLineNumbers={true}
            customStyle={{
              boxShadow: "none",
              border: "none",
              background: "transparent",
              fontFamily: "Poppins, sans-serif",
              fontSize: "0.8rem",
            }}
          >
            {initialScript}
          </SyntaxHighlighter>
        </TextEditor>
      </StyledCodeEditor>
    </StyledIDEContainer>
  );
}

export default TerminalUI;
