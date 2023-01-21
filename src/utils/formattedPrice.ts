const formattedPrice = (price: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price);

export default formattedPrice;