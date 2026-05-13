import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import DiffViewer from '../../src/components/DiffViewer'

describe('DiffViewer', () => {
  it('renders instructions when no responses are provided', () => {
    render(<DiffViewer responseA={null} responseB={null} />)
    expect(screen.getByText(/Send both requests to see the diff/i)).toBeInTheDocument()
  })

  it('renders "identical responses" when data matches', () => {
    const data = { foo: 'bar' }
    render(<DiffViewer responseA={data} responseB={data} />)
    expect(screen.getByText(/Responses are identical/i)).toBeInTheDocument()
  })

  it('renders diff details when data differs', () => {
    const dataA = { foo: 'bar' }
    const dataB = { foo: 'baz' }
    render(<DiffViewer responseA={dataA} responseB={dataB} />)
    
    // Based on the current implementation of DiffViewer.jsx which uses flattenDelta
    expect(screen.getByText(/foo: "bar" → "baz"/)).toBeInTheDocument()
  })
})
