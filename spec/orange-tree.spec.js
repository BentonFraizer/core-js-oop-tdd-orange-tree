const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {
  let age;
  let tree;
  let height;

  beforeEach(() => {
    age = 5;
    height = 7;
    tree = new OrangeTree(age, height);
  });

  describe('age', () => {
    test('has an age', () => {
      expect(tree.age).toBe(5);
    });
  });

  describe('height', () => {
    test('has a height', () => {
      expect(tree.height).toBe(7);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    test('should change the tree age', () => {
      expect(tree.passGrowingSeason()).toEqual({ age: 6, height: 7 });
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      expect(tree.passGrowingSeason()).toEqual({ age: 6, height: 9.5 });
      expect(tree.passGrowingSeason()).toEqual({ age: 7, height: 12 });
    });

    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      // expect(tree.isMature()).toEqual(false);
      //! Не забыть вернуться
    });

  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      tree.passGrowingSeason();
      expect(tree.isMature()).toEqual(true);
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      expect(tree.isMature()).toEqual(false);
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      expect(tree.isDead()).toBe(false);
    });

    test('should return true for a dead tree', () => {
      tree.age = 100;
      expect(tree.isDead()).toBe(true);
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree.passGrowingSeason();
      expect(tree.hasOranges()).toBe(true);
    });

    test('should return false if the tree has no oranges', () => {
      expect(tree.hasOranges()).toBe(false);
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      tree.passGrowingSeason();
      expect(tree.pickAnOrange()).not.toBeUndefined();
    });

    test('the returned orange should no longer be on the tree', () => {
      tree.passGrowingSeason();
      const firsOrange = tree.pickAnOrange();
      expect(tree.oranges).not.toContain(firsOrange[0]);
    });

    test('should raise an error if the tree has no oranges', () => {
      expect(() => { tree.pickAnOrange(); }).toThrowError();
    });
  });
});
