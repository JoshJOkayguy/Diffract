import { describe, it, expect } from 'vitest'
import { getDelta, flattenDelta } from '../../src/lib/diff'

describe('diff library', () => {
    it('should detect additions', () => {
        const a = { foo: 'bar' }
        const b = { foo: 'bar', baz: 'qux' }
        const { delta } = getDelta(a, b)
        const lines = flattenDelta(delta)
        
        expect(lines).toContainEqual({ type: 'added', path: 'baz', value: 'qux' })
    })

    it('should detect removals', () => {
        const a = { foo: 'bar', baz: 'qux' }
        const b = { foo: 'bar' }
        const { delta } = getDelta(a, b)
        const lines = flattenDelta(delta)
        
        expect(lines).toContainEqual({ type: 'removed', path: 'baz', value: 'qux' })
    })

    it('should detect changes', () => {
        const a = { foo: 'bar' }
        const b = { foo: 'baz' }
        const { delta } = getDelta(a, b)
        const lines = flattenDelta(delta)
        
        expect(lines).toContainEqual({ type: 'changed', path: 'foo', from: 'bar', to: 'baz' })
    })

    it('should handle nested objects', () => {
        const a = { user: { name: 'Alice' } }
        const b = { user: { name: 'Bob' } }
        const { delta } = getDelta(a, b)
        const lines = flattenDelta(delta)
        
        expect(lines).toContainEqual({ type: 'changed', path: 'user.name', from: 'Alice', to: 'Bob' })
    })

    it('should return empty lines if objects are identical', () => {
        const a = { foo: 'bar' }
        const b = { foo: 'bar' }
        const { delta } = getDelta(a, b)
        const lines = flattenDelta(delta)
        
        expect(lines).toHaveLength(0)
    })
})
