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

  // Copy and pasted but don't understand the code
  updateBackstage(item) {
    item.sellIn--
    if (item.quality < 50) item.quality++
    if (item.sellIn < 11 && item.quality < 50) item.quality++
    if (item.sellIn < 6 && item.quality < 50) item.quality++
    if (item.sellIn < 0) item.quality = 0
  }

  updateSulfuras() {} // <--- TO DO Extract method

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
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                  item.quality = item.quality - 1
                }
              }
            } else {
              item.quality = item.quality - item.quality
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1
            }
          }
        }
      }
    }

    return this.items
  }
}

module.exports = Shop
