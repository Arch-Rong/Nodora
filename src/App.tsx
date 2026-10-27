import { useState } from 'react'
import MindCanvas from '@/components/editor/MindCanvas'
import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { Button } from '@/components/ui/button'
import { PanelLeft, Download } from 'lucide-react'

const initialMarkdown = `# Nodora 思维导图

## 产品设计
- 无限画布
- Markdown 编辑

## 技术架构
- React Flow
- Zustand
- CodeMirror 6

## 未来规划
- AI 生成思维导图
- Markdown 双向同步
`

export default function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown)
  const [showEditor, setShowEditor] = useState(true)

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex h-14 shrink-0 items-center justify-between border-b px-4">
        <span className="font-semibold">Nodora</span>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowEditor((value) => !value)}
            aria-label="切换 Markdown 编辑器"
          >
            <PanelLeft />
          </Button>

          <Button variant="outline" size="sm" disabled>
            <Download />
            导出
          </Button>
        </div>
      </header>

      <main className="flex min-h-0 flex-1">
        {showEditor && (
          <aside className="h-full w-[380px] shrink-0 overflow-hidden border-r">
            <MarkdownEditor
              value={markdown}
              onChange={setMarkdown}
              isDark={false}
            />
          </aside>
        )}

        <section className="min-w-0 flex-1">
          <MindCanvas />
        </section>
      </main>
    </div>
  )
}