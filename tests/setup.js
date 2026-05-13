import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock CodeMirror since it relies on DOM APIs not fully supported by jsdom
vi.mock('@codemirror/view', () => ({
  EditorView: vi.fn(() => ({
    destroy: vi.fn(),
    dispatch: vi.fn(),
  })),
  basicSetup: [],
}))

vi.mock('@codemirror/state', () => ({
  EditorState: {
    create: vi.fn(),
  },
}))

vi.mock('@codemirror/merge', () => ({
  MergeView: vi.fn(() => ({
    destroy: vi.fn(),
  })),
}))

// Mock canvas for CodeMirror
HTMLCanvasElement.prototype.getContext = vi.fn()
