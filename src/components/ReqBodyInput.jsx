import { useEffect, useRef } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, basicSetup } from 'codemirror'
import { json } from '@codemirror/lang-json'
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language'
import { tags } from '@lezer/highlight'

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

function ReqBodyInput({ id }) {
    const editorRef = useRef(null)

    useEffect(() => {
        if (!editorRef.current) return

        const editor = new EditorView({
            state: EditorState.create({
                doc: '{\n  \n}',
                extensions: [
                    basicSetup,
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
                ],
            }),
            parent: editorRef.current,
        })

        return () => {
            editor.destroy()
        }
    }, [])

    return (
        <div
            id={"body-" + id}
            aria-label={"Body for Request " + id}
            className="bg-bg-surface border border-border rounded-md w-full overflow-hidden"
            ref={editorRef}
        />
    )
}

export default ReqBodyInput;
