import { SorterPipe } from './sorter.pipe';

describe('SorterPipe', () => {

  let sorterPipe: SorterPipe;

  it('create an instance', () => {
    const pipe = new SorterPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    sorterPipe = new SorterPipe();
  });

  it('should sort correctly - numbers', () => {
    const items = [];

    items.push({ id: 4, name: 'Alain' });
    items.push({ id: 3, name: 'Bob' });
    items.push({ id: 2, name: 'Charles' });
    items.push({ id: 1, name: 'Dominique' });

    const sorted = sorterPipe.transform(items, 'id');

    expect(sorted).toEqual([
      { id: 1, name: 'Dominique' },
      { id: 2, name: 'Charles' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Alain' },
      ])
  });

  it('should sort correctly - strings', () => {
    const items = [];

    items.push({ id: 1, name: 'Jill' });
    items.push({ id: 2, name: 'Ruth' });
    items.push({ id: 3, name: 'Goldie' });
    items.push({ id: 4, name: 'Zoe' });

    const sorted = sorterPipe.transform(items, 'name');

    expect(sorted).toEqual([
      { id: 3, name: 'Goldie' },
      { id: 1, name: 'Jill' },
      { id: 2, name: 'Ruth' },
      { id: 4, name: 'Zoe' },
      ])
  });
});
