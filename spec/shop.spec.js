const Shop = require('../src/shop.js')
const Item = require('../src/item.js')

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

  it('Item quality should NOT be more than 50', function () {
    const gildedRose = new Shop([new Item('Aged Brie', 5, 43)])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Aged Brie')
    expect(items[0].quality).toEqual(44)
  })

  it('Sulfuras is never sold and never decreases in quality', function () {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', -1, -1)
    ])
    const items = gildedRose.updateQuality()
    expect(items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(-1)
  })

  //Day 1 should update all items
  it('Day 1: should update all items', function () {
    const startingItems = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6)
    ]

    const gildedRose = new Shop(startingItems)
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(19)

    // Aged Brie
    expect(items[1].sellIn).toEqual(1)
    expect(items[1].quality).toEqual(1)

    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(4)
    expect(items[2].quality).toEqual(6)

    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)

    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1)
    expect(items[4].quality).toEqual(80)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(14)
    expect(items[5].quality).toEqual(21)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(9)
    expect(items[6].quality).toEqual(50)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(4)
    expect(items[7].quality).toEqual(50)

    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(2)
    expect(items[8].quality).toEqual(5)
  })

  //Day 30 should update all items
  it('Day 30: should update all items', function () {
    const startingItems = [
      new Item('+5 Dexterity Vest', 10, 20),
      new Item('Aged Brie', 2, 0),
      new Item('Elixir of the Mongoose', 5, 7),
      new Item('Sulfuras, Hand of Ragnaros', 0, 80),
      new Item('Sulfuras, Hand of Ragnaros', -1, 80),
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),

      // This Conjured item does not work properly yet
      new Item('Conjured Mana Cake', 3, 6)
    ]

    const gildedRose = new Shop(startingItems)
    for (let i = 0; i < 29; i++) {
      gildedRose.updateQuality()
    }
    const items = gildedRose.updateQuality()

    // +5 Dexterity Vest
    expect(items[0].sellIn).toEqual(-20)
    expect(items[0].quality).toEqual(0)

    // Aged Brie
    expect(items[1].sellIn).toEqual(-28)
    expect(items[1].quality).toEqual(50)

    // Elixir of the Mongoose
    expect(items[2].sellIn).toEqual(-25)
    expect(items[2].quality).toEqual(0)

    // Sulfuras, Hand of Ragnaros
    expect(items[3].sellIn).toEqual(0)
    expect(items[3].quality).toEqual(80)

    // Sulfuras, Hand of Ragnaros
    expect(items[4].sellIn).toEqual(-1)
    expect(items[4].quality).toEqual(80)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[5].sellIn).toEqual(-15)
    expect(items[5].quality).toEqual(0)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[6].sellIn).toEqual(-20)
    expect(items[6].quality).toEqual(0)

    // Backstage passes to a TAFKAL80ETC concert
    expect(items[7].sellIn).toEqual(-25)
    expect(items[7].quality).toEqual(0)

    // Conjured Mana Cake
    expect(items[8].sellIn).toEqual(-27)
    expect(items[8].quality).toEqual(0)
  })
})
