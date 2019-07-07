const linkedList = (() => {
  let head = null
  let size = 0
  const node = (val, next = null) => ({ val, next })

  return {
    insertFirst(val) {
      head = node(val, head)
      size += 1
    },
    insertLast(val) {
      if (head) {
        let cur = head
        while (cur.next) cur = cur.next
        cur.next = node(val)
      } else {
        head = node(val)
      }
      size += 1
    },
    insert(index, val) {
      if (index < 0 || index > size) return
      if (index === 0) {
        head = node(val, head)
      } else {
        let cur = head
        let prev
        for (let i = 0; i < index; i++) {
          prev = cur
          cur = cur.next
        }
        prev.next = node(val, cur)
      }
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
