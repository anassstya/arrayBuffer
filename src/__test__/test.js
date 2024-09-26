import { ArrayBufferConverter } from '../app.js';
import { getBuffer }  from '../index.js';

test('test converter', () => {
  let result = new ArrayBufferConverter();
  expect(result.toString()).toEqual('')
});

test('test loader', () => {
  let result = new ArrayBufferConverter();
  let a = result.load(getBuffer())
  expect(a).toEqual('')
}) /?

