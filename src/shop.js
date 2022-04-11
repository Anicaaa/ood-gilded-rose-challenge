class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateAgedBrie(item) {
    item.sellIn = item.sellIn - 1

    if (item.quality < 50) {
      item.quality = item.quality + 1
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1
    }
  }

  updateBackstage(item) {}

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i]
      if (item.name === 'Aged Brie') {
        this.updateAgedBrie(item)
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.updateBackstage(item)
      } else {
        if (
          item.name != 'Aged Brie' &&
          item.name != 'Backstage passes to a TAFKAL80ETC concert'
        ) {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1
            }
          }
        } else {
        }
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sellIn = item.sellIn - 1
        }
        if (item.sellIn < 0) {
          if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              // <---- I want this to my updateBackstage method
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                  item.quality = item.quality - 1
                }
              }
            } else {
              item.quality = item.quality - item.quality // <---- I want this to my updateBackstage method
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1 // <---- I want this to my updateBackstage method
            }
          }
        }
      }
    }

    return this.items
  }
}

module.exports = Shop
