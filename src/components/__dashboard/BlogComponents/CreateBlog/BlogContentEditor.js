"use client";

import dynamic from 'next/dynamic';
import "react-quill/dist/quill.snow.css";


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

import "./BlogContentEditor.css";
export default function BlogContentEditor({ inputValue, handleInputChange }) {
  return (
    <div className="__blog_content-text-editor">
      <QuillEditor
        modules={modules}
        theme="snow"
        className="block lg:w-9/12 w-full editor-height"
        value={inputValue?.content}
        onChange={(e) => handleInputChange("content", e)}
        placeholder="Content goes here..."
      />
    </div>
  );
}
