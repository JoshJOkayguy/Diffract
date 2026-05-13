import { create } from 'jsondiffpatch'

const differ = create()

export function getDelta(a, b) {
    try {
        return { delta: differ.diff(a, b), error: null }
    } catch (e) {
        return { delta: null, error: 'Invalid JSON in one or both responses' }
    }
}

export function flattenDelta(delta, objB, path = '') {
    const lines = []

    if (!delta) return lines

    for (const key of Object.keys(delta)) {
        if (key === '_t') continue // array marker

        const fullPath = path ? `${path}.${key}` : key
        const change = delta[key]

        if (Array.isArray(change)) {
            if (change.length === 1) {
                // Added
                lines.push({ type: 'added', path: fullPath, value: change[0] })
            } else if (change.length === 2) {
                // Changed
                lines.push({ type: 'changed', path: fullPath, from: change[0], to: change[1] })
            } else if (change.length === 3 && change[2] === 0) {
                // Removed
                lines.push({ type: 'removed', path: fullPath, value: change[0] })
            }
        } else if (typeof change === 'object') {
            // Nested, recurse
            lines.push(...flattenDelta(change, objB?.[key], fullPath))
        }
    }

    return lines
}