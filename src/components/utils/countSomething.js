
export const countProducts = (array) => {
  return array.reduce((count, item) => count + item.count, 0)
}

export const countTotal = (array) => {
   return parseFloat(array.reduce((amount, item) => amount + item.price * item.count, 0)).toFixed(2)
  }