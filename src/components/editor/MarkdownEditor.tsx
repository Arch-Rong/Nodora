import { useMemo } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { markdown } from '@codemirror/lang-markdown'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  isDark?: boolean
}

export default function MarkdownEditor({
  value,
  onChange,
  isDark = false,
}: MarkdownEditorProps) {
  const extensions = useMemo(() => [markdown()], [])

  return (
    <div className="h-full min-h-0 overflow-hidden bg-background">
      <CodeMirror
        value={value}
        onChange={onChange}
        extensions={extensions}
        theme={isDark ? 'dark' : 'light'}
        height="100%"
        className="h-full text-sm"
        basicSetup={{
          lineNumbers: true,
          foldGutter: true,
          highlightActiveLine: true,
          autocompletion: true,
        }}
      />
    </div>
  )
}