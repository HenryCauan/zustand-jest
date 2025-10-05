const sum = (x:number, y:number): number => {
  return x + y;
}

describe('function sum', () => {
  it('should sum the funcao correctly', () => {
    expect(sum(4,4)).toBe(8);
  });
})
