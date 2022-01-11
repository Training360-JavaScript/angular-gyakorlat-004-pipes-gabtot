import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  let filterPipe: FilterPipe;

  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });

  beforeEach(() => {
    filterPipe = new FilterPipe();
  });


  it('should return empty array if no items given', () => {
    const items: [] = [];

    const filtered = filterPipe.transform(items, 'Alain', 'name');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
  });

  it('should return items if no field is given', () => {
    const items = [];
    items.push({ id: 1, name: 'Bob' });

    const filtered = filterPipe.transform(items, 'Bob', '');

    expect(filtered).toEqual(items);
  });

  it('should return items if no value is given', () => {
    const items = [];
    items.push({ id: 1, name: 'Beth' });

    const filtered = filterPipe.transform(items, '', 'name',);

    expect(filtered).toEqual(items);
  });

  it('should filter correctly', () => {
    const items = [];

    items.push({ id: 1, name: 'Alain' });
    items.push({ id: 2, name: 'Bob' });
    items.push({ id: 3, name: 'Charles' });
    items.push({ id: 4, name: 'Dominique' });

    const filtered = filterPipe.transform(items, 'lain', 'name');

    expect(filtered.length).toBe(1);
  });

  it('should filter two items', () => {
    const items = [];

    items.push({ id: 1, name: 'Alain' });
    items.push({ id: 2, name: 'Bob' });
    items.push({ id: 3, name: 'Charles' });
    items.push({ id: 4, name: 'Dominique' });
    items.push({ id: 5, name: 'Robert' });

    const filtered = filterPipe.transform(items, 'ob', 'name');

    expect(filtered.length).toBe(2);
  });

});

