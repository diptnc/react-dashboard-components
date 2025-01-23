
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';

const CodeBlockLayout = ({ text, language="javascript", showLineNumbers=false, wrapLines = false }) => {
    return (
        <CopyBlock
            text={text}
            language={language}
            showLineNumbers={showLineNumbers}
            wrapLines
            codeBlock
            theme={dracula}

        />
    );
}

export default CodeBlockLayout