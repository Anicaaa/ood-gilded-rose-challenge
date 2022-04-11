const Shop = require('../src/shop.js')
const Item = require('../src/item.js')

/* - "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert */

describe('Backstage passes to a TAFKAL80ETC concert', function () {
  it('Backstage passes to a TAFKAL80ETC concert increases in quality the older it gets', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 4, 5)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(8)
  })

  it('Backstage passes to a TAFKAL80ETC concert increases quality by 2 when 10 days or less', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 9, 5)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(8)
    expect(items[0].quality).toEqual(7)
  })

  it('Backstage passes to a TAFKAL80ETC concert increases quality by 3 when 5 days or less', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 3, 5)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(2)
    expect(items[0].quality).toEqual(8)
  })

  it('Backstage passes to a TAFKAL80ETC concert drops quality to 0 after concert', function () {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 0)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Backstage passes to a TAFKAL80ETC concert')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0)
  })
})
