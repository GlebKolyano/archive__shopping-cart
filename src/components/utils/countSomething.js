
export const countProducts = (array) => {
  return array.reduce(function(sum, item) {return sum + item.count}, 0)
}

export const countTotal = (array) => {
   let total = array.reduce(function(a, item) {return a + item.price * item.count}, 0)
   return total
  }