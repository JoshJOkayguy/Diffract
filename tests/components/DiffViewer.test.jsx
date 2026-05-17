import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import DiffViewer from '../../src/components/DiffViewer'
import { MergeView } from '@codemirror/merge'

describe('DiffViewer', () => {
  it('renders instructions when no responses are provided', () => {
    render(<DiffViewer responseA={null} responseB={null} />)
    expect(screen.getByText(/Send both requests to see the diff/i)).toBeInTheDocument()
  })

  it('renders the diff viewer container when responses are provided', () => {
    const dataA = { foo: 'bar' }
    const dataB = { foo: 'baz' }
    render(<DiffViewer responseA={dataA} responseB={dataB} />)
    
    const container = document.getElementById('diff-viewer')
    expect(container).toBeInTheDocument()
  })

  it('initializes MergeView with correct data', () => {
    const dataA = { foo: 'bar' }
    const dataB = { foo: 'baz' }
    render(<DiffViewer responseA={dataA} responseB={dataB} />)

    expect(MergeView).toHaveBeenCalledWith(expect.objectContaining({
      a: expect.objectContaining({
        doc: JSON.stringify(dataA, null, 2) + "\n"
      }),
      b: expect.objectContaining({
        doc: JSON.stringify(dataB, null, 2) + "\n"
      })
    }))
  })

  it('destroys MergeView on unmount', () => {
    const { unmount } = render(<DiffViewer responseA={{}} responseB={{}} />)
    const mockMergeViewInstance = vi.mocked(MergeView).mock.results[0].value
    
    unmount()
    expect(mockMergeViewInstance.destroy).toHaveBeenCalled()
  })
})
