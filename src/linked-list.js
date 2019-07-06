const linkedList = (() => {
  let head = null
  let size = 0
  const node = (val, next = null) => ({ val, next })

  return {
    insertFirst(val) {
      head = node(val, head)
      size += 1
    },
    size() {
      return size
    },
    clear() {
      head = null
      size = 0
    }
  }
})()

module.exports = linkedList
