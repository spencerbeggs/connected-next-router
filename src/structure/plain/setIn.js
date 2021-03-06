/* Code from github.com/erikras/redux-form by Erik Rasmussen */

const setInWithPath = (state, value, path, pathIndex) => {
  if (pathIndex >= path.length) {
    return value
  }

  const first = path[pathIndex]
  const next = setInWithPath(state && state[first], value, path, pathIndex + 1)

  if (!state) {
    const initialized = isNaN(first) ? {} : []
    initialized[first] = next
    return initialized
  }

  if (Array.isArray(state)) {
    const copy = [].concat(state)
    copy[first] = next
    return copy
  }

  return {
    ...state,
    [first]: next
  }
}

const setIn = (state, field, value) => setInWithPath(state, value, field, 0)

export default setIn
