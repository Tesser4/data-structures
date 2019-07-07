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
    removeFirst() {
      if (head) {
        head = head.next
        size -= 1
      }
    },
    removeLast() {
      if (head) {
        if (head.next) {
          let cur = head
          while (cur.next.next) cur = cur.next
          cur.next = null
        } else {
          head = null
        }
        size -= 1
      }
    },
    remove(index) {
      if (index < 0 || index >= size) return
      if (index === 0) {
        head = head.next
      } else {
        let cur = head
        let prev
        for (let i = 0; i < index; i++) {
          prev = cur
          cur = cur.next
        }
        prev.next = cur.next
      }
      size -= 1
    },
    get(index) {
      let cur = head
      for (let i = 0; i < index; i++) cur = cur.next
      return cur.val
    },
    size() {
      return size
    },
    clear() {
      head = null
      size = 0
    },
    toString() {
      let output = '['
      let cur = head
      while (cur) {
        output += cur.val
        if (cur.next) output += ', '
        cur = cur.next
      }
      return output + ']'
    }
  }
})()

module.exports = linkedList
