import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import './text-editor.scss';
import sanitize from "sanitize-html";
import { PaddingTop } from "../../assets/styles/styled-components";

export default function TextEditor() {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const config = {
        readonly: false,
        height: 800
    };
    const handleUpdate = (event: any) => {
        setContent(event);
    };

    return (
        <div className="editor">
            <JoditEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={handleUpdate}
                onChange={(newContent) => { }}
            />
            <PaddingTop size={4} />
            <pre>
                <code>{content}</code>
            </pre>
            <PaddingTop size={4} />
            <div dangerouslySetInnerHTML={{
                __html: sanitize(content, {
                    allowedTags: sanitize.defaults.allowedTags.concat(['img']),
                    allowedAttributes: {
                        'img': ['src'],
                        'a': ['href'],
                        'span': ['style'],
                        'li': ['style'],
                        'h1': ['style'] 
                    },
                    allowedSchemes: ['data', 'http', 'https']
                })
            }} />
        </div>
    );
}