import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ResponseStatus from '../../src/components/ResponseStatus'

describe('ResponseStatus', () => {
  it('renders nothing when response is null', () => {
    const { container } = render(<ResponseStatus id="A" response={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders status 200 correctly', () => {
    const response = {
      status: 200,
      statusText: 'OK',
      headers: { 'x-response-time': '123' }
    }
    render(<ResponseStatus id="A" response={response} />)
    expect(screen.getByText(/A: 200 OK/)).toBeInTheDocument()
    expect(screen.getByText(/123ms/)).toBeInTheDocument()
  })

  it('renders error status correctly', () => {
    const response = {
      status: 404,
      statusText: 'Not Found',
      headers: { 'x-response-time': '45' }
    }
    render(<ResponseStatus id="B" response={response} />)
    expect(screen.getByText(/B: 404 Not Found/)).toBeInTheDocument()
    expect(screen.getByText(/45ms/)).toBeInTheDocument()
  })
})
