import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ActionButton from '../../src/components/ActionButton'

describe('ActionButton', () => {
  it('renders correctly with text', () => {
    render(<ActionButton text="Click Me" />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('renders an icon if provided', () => {
    render(<ActionButton text="Settings" icon={<span data-testid="test-icon" />} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ActionButton text="Button" onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
