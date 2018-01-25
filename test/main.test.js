// @flow
import test from 'tape';
import greeter from '../src/main';

test('greets a user with `Hello, {name}` message', async (t) => {
  const result = await greeter('John');
  t.equal('Hello, John', result);
  t.end();
});
