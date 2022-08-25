const object = {
  x: 1,
  y: 2,
};
// const history = [];
function undoRedo(object) {
  function History(type, key, oldValue, newValue) {
    this.type = type;
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  function RedoUndo(message) {
    this.message = message;
  }

  const history = [];

  let i = 1;
  return {
    set(key, value) {
      if (object.hasOwnProperty(key)) history.push(new History('set', key, object[key], value));
      else { history.push(new History('new', key, null, value)); }
      object[key] = value;
      console.log('set', history);
    },
    get(key) {
      return object[key];
    },
    del(key) {
      history.push(new History('del', key, object[key], null));
      delete object[key];
      console.log('del', history);
    },
    undo() {
      if (history.length <= 0) throw new RedoUndo('cannot undo');
      if (history[history.length - i].type === 'set') {
        object[history[history.length - i].key] = history[history.length - i].oldValue;
        i += 1;
      } else if (history[history.length - i].type === 'new') {
        delete object[history[history.length - i].key];
        i += 1;
      } else if (history[history.length - i].type === 'del') {
        object[history[history.length - i].key] = history[history.length - i].oldValue;
        i += 1;
      }
      console.log('undo', history, i);
    },
    redo() {
      if (history.length <= 0) throw new RedoUndo('cannot redo');
      if (history[history.length - 1].type === 'set') object[history[history.length - 1].key] = history.pop().newValue;
      else if (history[history.length - 1].type === 'new') object[history[history.length - 1].key] = history.pop().newValue;
      else if (history[history.length - 1].type === 'del') delete object[history.pop().key];
      console.log('redo', history);
    },
  };
}
// const ddd = undoRedo(object);
// ddd
//   .set('z', 54);
// console.log('===============', object);
// ddd
//   .set('c', 5);
// console.log(object);
// ddd
//   .undo();
// console.log(object);
// ddd
//   .del('y');
// console.log(object);
// ddd
//   .undo();
// console.log(object);
// ddd
//   .redo();
// console.log(object);

// it('undo/redo', function() {
const obj = {
  x: 1,
  y: 2,
};

const unRe = undoRedo(obj);
unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
//    Test.assertEquals(unRe.get('y'), 100, 'The get method returns the value of a key');
//    Test.assertEquals(unRe.get('x'), 50, 'The get method returns the value of a key');
unRe.undo();
//    Test.assertEquals(unRe.get('x'), 150, 'The undo method restores the previous state');
//    Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
unRe.redo();
//    Test.assertEquals(unRe.get('x'), 50, 'Undo the x value');
//    Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
//    Test.assertEquals(unRe.get('x'), 1, 'Undo the x value');
//    Test.assertEquals(unRe.get('y'), 100, 'The y key stays the same');
unRe.undo();
unRe.undo();
//    Test.assertEquals(unRe.get('y'), 2, 'Undo the y value');
//    Test.assertEquals(unRe.get('x'), 1, 'The x key stays the same');
//    try {
unRe.undo();
//      Test.expect(false, 'It should have thrown an exception');

//    } catch (e) {
//      Test.assertEquals(unRe.get('y'), 2, 'There is nothing to undo');
//    }
unRe.redo();
unRe.redo();
unRe.redo();
unRe.redo();
//    Test.assertEquals(unRe.get('y'), 100, 'y key redo state');
//    Test.assertEquals(unRe.get('x'), 50, 'y key redo state');
//    try {
unRe.redo();
//      Test.expect(false, 'It should have thrown an exception');

//    } catch (e) {
//      Test.assertEquals(unRe.get('y'), 100, 'There is nothing to redo');
//    }

// });
