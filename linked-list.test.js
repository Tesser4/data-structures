import { assertEquals } from './deps.js'
import getLinkedList from './linked-list.js'

const ll = getLinkedList()

// Inserting elements
Deno.test('inserting elements at the beginning', () => {
  ll.insertFirst(100)
  ll.insertFirst(200)
  assertEquals(ll.get(0), 200)
  assertEquals(ll.get(1), 100)
  assertEquals(ll.size(), 2)
})

Deno.test('inserting elements at the end', () => {
  ll.clear()
  ll.insertLast(100)
  ll.insertLast(200)
  assertEquals(ll.get(0), 100)
  assertEquals(ll.get(1), 200)
  assertEquals(ll.size(), 2)
})

Deno.test('inserting elements using index', () => {
  ll.clear()
  ll.insertFirst(100)
  ll.insertLast(200)
  ll.insert(1, 444)
  ll.insert(0, 222)
  ll.insert(100, 111111)
  ll.insert(-100, 111111)
  ll.insert(4, 55555)
  ll.insert(6, 55555)
  assertEquals(ll.get(0), 222)
  assertEquals(ll.get(1), 100)
  assertEquals(ll.get(2), 444)
  assertEquals(ll.get(3), 200)
  assertEquals(ll.get(4), 55555)
  assertEquals(ll.size(), 5)
})

// Removing elements
Deno.test('removing elements from the beginning', () => {
  ll.removeFirst()
  assertEquals(ll.get(0), 100)
  assertEquals(ll.get(1), 444)
  assertEquals(ll.get(2), 200)
  assertEquals(ll.get(3), 55555)
  assertEquals(ll.size(), 4)

})

Deno.test('removing elements from the end', () => {
  ll.removeLast()
  assertEquals(ll.get(0), 100)
  assertEquals(ll.get(1), 444)
  assertEquals(ll.get(2), 200)
  assertEquals(ll.size(), 3)
  ll.removeLast()
  ll.removeLast()
  assertEquals(ll.get(0), 100)
  assertEquals(ll.size(), 1)
  ll.removeLast()
  assertEquals(ll.size(), 0)
})

Deno.test('removing elements using index', () => {
  ll.clear()
  ll.remove(0)
  ll.insertFirst(100)
  ll.insertLast(200)
  ll.insertLast(300)
  ll.insertLast(400)
  ll.insertLast(500)
  ll.remove(-1)
  ll.remove(5)
  assertEquals(ll.get(0), 100)
  assertEquals(ll.get(1), 200)
  assertEquals(ll.get(2), 300)
  assertEquals(ll.get(3), 400)
  assertEquals(ll.get(4), 500)
  assertEquals(ll.size(), 5)
  ll.remove(0)
  assertEquals(ll.get(0), 200)
  assertEquals(ll.size(), 4)
  ll.remove(3)
  assertEquals(ll.get(2), 400)
  assertEquals(ll.size(), 3)
  ll.remove(1)
  assertEquals(ll.get(0), 200)
  assertEquals(ll.get(1), 400)
  assertEquals(ll.size(), 2)
})

// indexOf()
Deno.test('indexOf(value) returns -1 if linked list is empty', () => {
  ll.clear()
  assertEquals(ll.indexOf(100), -1)
})

Deno.test('indexOf(value) returns -1 if value does not exist', () => {
  ll.clear()
  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)
  assertEquals(ll.indexOf(444), -1)
})

Deno.test('indexOf(value) returns the index of an existing value', () => {
  ll.clear()
  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)
  assertEquals(ll.indexOf(100), 0)
  assertEquals(ll.indexOf(200), 1)
  assertEquals(ll.indexOf(300), 2)
})

// toArray()
Deno.test('toArray() returns values in array', () => {
  ll.clear()
  assertEquals(ll.toArray(), [])
  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)
  assertEquals(ll.toArray(), [100, 200, 300])
})

// toString()
Deno.test('toString() returns values as a string', () => {
  ll.clear()
  assertEquals(ll.toString(), '[]')
  ll.insertLast(100)
  ll.insertLast(200)
  ll.insertLast(300)
  assertEquals(ll.toString(), '[100, 200, 300]')
})
