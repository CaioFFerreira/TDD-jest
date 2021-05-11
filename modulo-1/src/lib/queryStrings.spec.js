const { queryString, parse } = require('./queryString.js');

describe('Object to query string' , () => {
  test('Should create a valid query string when an object', () => {
    const obj  = {
      name: 'Fabio',
      profession: 'developer'
    };

    expect(queryString(obj)).toBe(
      'name=Fabio&profession=developer'
    );
  })

  test('Should create a valid query string when an Array', () => {
    const obj  = {
      name: 'Fabio',
      cars: ['fusca','ferrari'],
    };

    expect(queryString(obj)).toBe(
      'name=Fabio&cars=fusca,ferrari'
    );
  })

  test('Should create a valid query string when an Array', () => {
    const obj  = {
      name: 'Fabio',
      skills: { first: 'JS', second: 'TDD' },
    };

    expect(() => {
      queryString(obj)
    }).toThrowError();
  })
  
});

describe('Query string to object', () => {
  it('Should convert a query strinf to object', () => {
    const qs = 'name=caio&profission=developer';

    expect(parse(qs)).toEqual({
      name: 'caio',
      profission: 'developer'
    })
  });

  it('Should convert a query string of single key-value', () => {
    const qs = 'name=caio';

    expect(parse(qs)).toEqual({
      name: 'caio',
    })
  });

  it('Should convert a query string to object', () => {
    const qs = 'name=caio&abilities=js,tdd';

    expect(parse(qs)).toEqual({
      name: 'caio',
      abilities: ['js','tdd'],
    });
  })
})