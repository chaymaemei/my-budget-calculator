const uniqueId = () => {
    return Math.round(Math.random() * 1000000);
}

export {
    uniqueId
}



export const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "mad",
    style: "currency",
    minimumFractionDigits: 0,
  })