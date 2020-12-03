export const cleanPrice = (price) => {
  if(price !== undefined) {
  let stringifyPrice = (price.toString()).split("");
  stringifyPrice.length = stringifyPrice.length - 2;  
  return stringifyPrice;
  }
}

export const cleanCents = (price) => {
  if(price !== undefined) {
  let stringifyPrice = (price.toString()).split("");
  let cents = stringifyPrice.slice(-2);    
  return cents;
  }
}