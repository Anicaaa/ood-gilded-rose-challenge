var { Shop, Item } = require('../src/gilded_rose.js')
describe('Gilded Rose', function () {
  // item has name, sellIn, quality
  it('should have quality always greater or equal to zero', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('foo')
    expect(items[0].quality).toEqual(0)
  })

  it('should decrease quality each day', function () {
    const gildedRose = new Shop([new Item('foo', 5, 1)]) //Added an item that has 5 days to sell, an initial quality of 1.
    const items = gildedRose.updateQuality() //Updating quality because 1 day has passed, some items will change with different rules.
    expect(items[0].name).toEqual('foo')
    expect(items[0].quality).toEqual(0)
  })

  it('aged brie should increase quality', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 1)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(2)
  })
})
