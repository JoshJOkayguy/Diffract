import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock CodeMirror since it relies on DOM APIs not fully supported by jsdom
vi.mock('@codemirror/view', () => ({
  EditorView: vi.fn(() => ({
    destroy: vi.fn(),
    dispatch: vi.fn(),
  })),
  lineNumbers: vi.fn(),
  basicSetup: [],
}))

vi.mock('@codemirror/state', () => ({
  EditorState: {
    create: vi.fn(),
    readOnly: {
      of: vi.fn(),
    },
  },
}))

vi.mock('@codemirror/merge', () => {
  const MergeView = vi.fn(function() {
    this.destroy = vi.fn()
  })
  return { MergeView }
})

vi.mock('@codemirror/lang-json', () => ({
  json: vi.fn(),
}))

vi.mock('@codemirror/language', () => ({
  HighlightStyle: {
    define: vi.fn(),
  },
  syntaxHighlighting: vi.fn(),
}))

vi.mock('@lezer/highlight', () => ({
  tags: {
    brace: {},
    squareBracket: {},
    string: {},
    propertyName: {},
    number: {},
  },
}))

// Mock canvas for CodeMirror
HTMLCanvasElement.prototype.getContext = vi.fn()
