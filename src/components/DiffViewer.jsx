import {useEffect, useRef} from 'react'
import {EditorView} from 'codemirror'
import {EditorState} from '@codemirror/state'
import {MergeView} from '@codemirror/merge'
import {json} from '@codemirror/lang-json'
import {HighlightStyle, syntaxHighlighting} from '@codemirror/language'
import {tags} from '@lezer/highlight'
import {lineNumbers} from "@codemirror/view";

const jsonHighlightStyle = HighlightStyle.define([
    {
        tag: [tags.brace, tags.squareBracket],
        color: 'var(--color-accent)',
    },
    {
        tag: [tags.string, tags.propertyName],
        color: 'var(--color-diff-added)',
    },
    {
        tag: tags.number,
        color: 'var(--color-diff-changed)',
    },
])

function DiffViewer({ responseA, responseB }) {
    const editorRef = useRef(null)

    useEffect(() => {
        if (!editorRef.current) return

        const extensionList = [
            EditorState.readOnly.of(true),
            lineNumbers(),
            json(),
            syntaxHighlighting(jsonHighlightStyle),
            EditorView.theme({
                '&': {
                    height: '8rem',
                    backgroundColor: 'transparent',
                    color: 'inherit',
                    borderRadius: '0.375rem',
                },
                '.cm-scroller': {
                    fontFamily: 'monospace',
                },
                '.cm-content': {
                    padding: '0.5rem',
                },
                '.cm-gutters': {
                    backgroundColor: 'transparent',
                    border: 'none',
                },
                '.cm-activeLine': {
                    backgroundColor: 'var(--color-bg-elevated)',
                },
                '.cm-activeLineGutter': {
                    backgroundColor: 'var(--color-bg-elevated)',
                },
            }),
        ]

        const diff = new MergeView({
            a: {
                doc: responseA === null ? "null" : JSON.stringify(responseA, null, 2) + "\n",
                extensions: extensionList,
            },
            b: {
                doc: responseB === null ? "null" : JSON.stringify(responseB, null, 2) + "\n",
                extensions: extensionList,
            },
            gutter: true,
            parent: editorRef.current,
        })

        return () => {
            diff.destroy()
        }
    }, [responseA, responseB])

    if (!responseA && !responseB) {
        return (
            <div className="flex items-center justify-center h-full text-text-muted text-sm font-mono">
                Send both requests to see the diff
            </div>
        )
    }

    return (
        <div
            id={"diff-viewer"}
            aria-label={"Diff viewer"}
            className="bg-bg-surface border border-border rounded-md w-full overflow-hidden mb-12"
            ref={editorRef}
        />
    )


}

export default DiffViewer