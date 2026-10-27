import { useCallback } from 'react'
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
} from '@xyflow/react'

const initialNodes: Node[] = [
  {
    id: 'root',
    type: 'input',
    position: { x: 300, y: 180 },
    data: { label: 'Nodora 思维导图' },
  },
  {
    id: 'node-1',
    position: { x: 600, y: 80 },
    data: { label: '产品设计' },
  },
  {
    id: 'node-2',
    position: { x: 600, y: 200 },
    data: { label: '技术架构' },
  },
  {
    id: 'node-3',
    position: { x: 600, y: 320 },
    data: { label: '未来规划' },
  },
]

const initialEdges: Edge[] = [
  {
    id: 'edge-1',
    source: 'root',
    target: 'node-1',
    type: 'smoothstep',
  },
  {
    id: 'edge-2',
    source: 'root',
    target: 'node-2',
    type: 'smoothstep',
  },
  {
    id: 'edge-3',
    source: 'root',
    target: 'node-3',
    type: 'smoothstep',
  },
]

interface MindCanvasProps {
  colorMode: 'light' | 'dark'
}

export default function MindCanvas({ colorMode }: MindCanvasProps) {
  const [nodes, setNodes, onNodesChange] =
    useNodesState(initialNodes)

  const [edges, setEdges, onEdgesChange] =
    useEdgesState(initialEdges)

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((currentEdges) =>
        addEdge(connection, currentEdges)
      )
    },
    [setEdges]
  )

  return (
    <div className="h-full w-full">
      <ReactFlow
        className="nodora-flow"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        colorMode={colorMode}
        fitView
      >
        <Background
          color="var(--canvas-grid)"
          gap={20}
          size={1}
        />

        <Controls />

        <MiniMap
          pannable
          zoomable
          nodeColor="var(--primary)"
        />
      </ReactFlow>
    </div>
  )
}