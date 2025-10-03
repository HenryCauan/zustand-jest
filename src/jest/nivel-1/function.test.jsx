const sum = (x, y) => {
  return x + y;
}

describe('function sum', () => {
  it('should sum correctly', () => {
    expect(sum(4,4)).toBe(8);
  });
})
