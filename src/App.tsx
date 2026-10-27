import { useState } from 'react'
import MindCanvas from '@/components/editor/MindCanvas'
import MarkdownEditor from '@/components/editor/MarkdownEditor'
import { Button } from '@/components/ui/button'
import { readTheme, writeTheme, type ThemeMode } from '@/lib/theme'
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
  const [theme, setTheme] = useState<ThemeMode>(() => readTheme())

  const chooseTheme = (next: ThemeMode) => {
    setTheme(next)
    writeTheme(next)
  }

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-border/80 bg-background px-4">
        <span className="text-[15px] font-medium tracking-tight">Nodora</span>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setShowEditor((value) => !value)}
            aria-label={showEditor ? '收起 Markdown' : '展开 Markdown'}
            aria-pressed={showEditor}
          >
            <PanelLeft />
          </Button>

          <div
            role="group"
            aria-label="外观"
            className="flex items-center rounded-full bg-muted p-0.5"
          >
            {([
              ['light', '白天'],
              ['dark', '暗黑'],
            ] as const).map(([value, label]) => {
              const active = theme === value
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => chooseTheme(value)}
                  className={`h-7 rounded-full px-3 text-xs transition-colors ${
                    active
                      ? 'bg-background text-foreground shadow-[0_1px_1px_oklch(0_0_0/8%)] dark:bg-foreground dark:text-background'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <Button variant="outline" size="sm" disabled>
            <Download />
            导出
          </Button>
        </div>
      </header>

      <main className="flex min-h-0 flex-1">
        {showEditor && (
          <aside className="h-full w-[400px] shrink-0 overflow-hidden border-r border-border/80">
            <MarkdownEditor
              value={markdown}
              onChange={setMarkdown}
              isDark={theme === 'dark'}
            />
          </aside>
        )}

        <section className="min-w-0 flex-1 bg-canvas">
          <MindCanvas colorMode={theme} />
        </section>
      </main>
    </div>
  )
}
