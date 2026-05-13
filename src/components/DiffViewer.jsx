import { getDelta, flattenDelta } from '../lib/diff'

function DiffViewer({ responseA, responseB }) {
    if (!responseA && !responseB) {
        return (
            <div className="flex items-center justify-center h-full text-text-muted text-sm font-mono">
                Send both requests to see the diff
            </div>
        )
    }

    const { delta, error } = getDelta(responseA, responseB)

    if (error) {
        return (
            <div className="text-red-400 text-sm font-mono p-4">{error}</div>
        )
    }

    if (!delta) {
        return (
            <div className="flex items-center justify-center h-full text-diff-added text-sm font-mono">
                ✓ Responses are identical
            </div>
        )
    }

    const lines = flattenDelta(delta)

    return (
        <div className="flex flex-col gap-1 py-4 font-mono text-sm">
            {lines.map((line, i) => {
                if (line.type === 'added') return (
                    <div key={i} className="bg-diff-added/10 text-diff-added px-3 py-1 rounded">
                        + {line.path}: {JSON.stringify(line.value)}
                    </div>
                )
                if (line.type === 'removed') return (
                    <div key={i} className="bg-diff-removed/10 text-diff-removed px-3 py-1 rounded">
                        - {line.path}: {JSON.stringify(line.value)}
                    </div>
                )
                if (line.type === 'changed') return (
                    <div key={i} className="bg-diff-changed/10 text-diff-changed px-3 py-1 rounded">
                        ~ {line.path}: {JSON.stringify(line.from)} → {JSON.stringify(line.to)}
                    </div>
                )
                return null
            })}
        </div>
    )
}

export default DiffViewer