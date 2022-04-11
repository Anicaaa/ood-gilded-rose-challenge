const Shop = require('../src/shop.js')
const Item = require('../src/item.js')

describe('Aged Brie', function () {
  it('aged brie increases quality by 1', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 4, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(6)
  })

  it('aged brie increases quality by 2', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 0, 5)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(7)
  })

  it('aged brie should increase in quality the older it gets', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 1)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(1)
    expect(items[0].quality).toEqual(2)
  })

  it('aged brie quality should NOT be more than 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 43)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(44)
  })
})
