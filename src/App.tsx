import MindCanvas from '@/components/editor/MindCanvas'
import { Button } from '@/components/ui/button'
import { PanelLeft, Download, Settings2 } from 'lucide-react'

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-col bg-background text-foreground">
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold">
            Nodora
          </span>

          <div className="bg-red-200 text-zinc-50 dark:bg-white dark:text-zinc-950 w-4 h-4" />

          <span className="text-sm text-muted-foreground">
            Untitled Mind Map
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <PanelLeft />
          </Button>

          <Button variant="outline" size="sm">
            <Download />
            导出
          </Button>
          <Button variant="ghost" size="icon">
            <Settings2 />
          </Button>
          <div className="bg-zinc-950 text-zinc-50 dark:bg-white dark:text-zinc-950" />
        </div>
      </header>

      <main className="min-h-0 flex-1">
        <MindCanvas />
      </main>
    </div>
  )
}