import {useLexicalComposerContext} from "@lexical/react/LexicalComposerContext";
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin";
import ToolbarPlugin from "./ToolbarPlugin.tsx";
import {ContentEditable} from "@lexical/react/LexicalContentEditable";
import {TabIndentationPlugin} from "@lexical/react/LexicalTabIndentationPlugin";
import {HistoryPlugin} from "@lexical/react/LexicalHistoryPlugin";
import {AutoFocusPlugin} from "@lexical/react/LexicalAutoFocusPlugin";
import {LexicalErrorBoundary} from "@lexical/react/LexicalErrorBoundary";
import {LexicalComposer} from "@lexical/react/LexicalComposer";
import {useEffect, useState} from "react";
import Box from "@mui/material/Box";

const exampleTheme = {
    ltr: 'ltr',
    rtl: 'rtl',
    paragraph: 'editor-paragraph',
};

function onError(error) {
    console.error(error);
}

function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        return editor.registerUpdateListener(({editorState}) => {
            onChange(editorState);
        });
    }, [editor, onChange]);
    return null;
}

function RestoreEditorStatePlugin({ editorState }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        if (editorState) {
            editor.update(() => {
                const newState = editor.parseEditorState(editorState);
                editor.setEditorState(newState);
            });
        }
    }, [editor, editorState]);

    return null;
}

export function Editor({ editorState, setEditorState }) {
    const initialConfig = {
        namespace: 'MyEditor',
        theme: exampleTheme,
        onError,
        editorState: editorState
            ? () => editorState
            : () => undefined,
    };

    function onChange(editorState) {
        setEditorState(editorState);
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <Box
                sx={{
                    minHeight: "500px",
                    flexGrow: 1,
                    margin: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ToolbarPlugin />
                <Box
                    className="editor-inner"
                    sx={{
                        flexGrow: 1,
                        overflowY: "auto",
                        padding: "8px",
                    }}
                >
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable
                                className="editor-input"
                                aria-placeholder={""}
                                placeholder={
                                    <div className="editor-placeholder">{""}</div>
                                }
                            />
                        }
                        ErrorBoundary={LexicalErrorBoundary}
                    />
                </Box>
                <TabIndentationPlugin />
                <MyOnChangePlugin onChange={onChange} />
                <RestoreEditorStatePlugin editorState={editorState} />
                <HistoryPlugin />
                <AutoFocusPlugin />
            </Box>
        </LexicalComposer>
    );
}
