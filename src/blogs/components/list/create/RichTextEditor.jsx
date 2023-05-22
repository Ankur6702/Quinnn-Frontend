import React, { useState, useEffect } from "react";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";

const DynamicEditor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const RichTextEditor = ({ saveBlog }) => {
  const [editorState, setEditorState] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEditorState(EditorState.createEmpty());
    }
    import("react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
  }, []);

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const content = convertToRaw(newEditorState.getCurrentContent());
    const htmlContent = draftToHtml(content);
    saveBlog(htmlContent);
  };

  return (
    <>
      {/* <div>{draftToHtml(convertToRaw(editorState.getCurrentContent()))}</div> */}
      {editorState && (
        <DynamicEditor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          spellCheck={true}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "image",
              "remove",
              "history",
            ],
            inline: {
              options: ["bold", "italic", "underline", "strikethrough"],
            },
            blockType: {
              options: [
                "Normal",
                "H1",
                "H2",
                "H3",
                "H4",
                "H5",
                "H6",
                "Blockquote",
                "Code",
              ],
            },
            fontSize: {
              options: [
                8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96,
              ],
            },
            fontFamily: {
              options: [
                "Arial",
                "Georgia",
                "Impact",
                "Tahoma",
                "Times New Roman",
                "Verdana",
              ],
            },
            list: {
              options: ["unordered", "ordered"],
            },
            textAlign: {
              options: ["left", "center", "right", "justify"],
            },
            image: {
              defaultSize: {
                width: "100%", // Set the maximum width of the uploaded image
              },
              resizable: true, // Enable the image resize feature
            },
          }}
          placeholder="Tell your story ..." // Placeholder text
        />
      )}
    </>
  );
};

export default RichTextEditor;
