import { useCallback } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { dracula } from "@uiw/codemirror-theme-dracula";

interface CodeEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  mode: "html" | "xml";
}

export function CodeEditor({ value, onChange, readOnly = false, mode }: CodeEditorProps) {
  const handleChange = useCallback((val: string) => {
    onChange?.(val);
  }, [onChange]);

  return (
    <CodeMirror
      value={value}
      height="100%"
      theme={dracula}
      extensions={[mode === "html" ? javascript() : xml()]}
      onChange={handleChange}
      readOnly={readOnly}
      className="h-full w-full"
    />
  );
}
