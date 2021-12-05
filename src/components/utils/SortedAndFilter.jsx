

export default class FilterClass {
  static getSortedPrice(books, filterSortPrice) {
     if (filterSortPrice === "lowPrice") {    
      return [...books].sort((a, b) => a.price-b.price)
     
    } else if (filterSortPrice === "highPrice") {
      return [...books].sort((a, b) => b.price-a.price)
    } 
      return books
  }
  static getSortedCover(books, filterSortCover) {
      if (filterSortCover === "hardcover") {    
      return books.filter(book => book.cover === "hardcover")
     
    } else if (filterSortCover === "papercover") {
      return books.filter(book => book.cover === "papercover")
    } 
      return books
 }
}