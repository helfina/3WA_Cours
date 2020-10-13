const phones = [
    { name: "iphone XX", priceHT: 900 },
    { name: "iphone X", priceHT: 700 },
    { name: "iphone B", priceHT: 200 },
  ];

const prisTTC = phones.map(phones => phones.priceHT * 1.2);
console.log(prisTTC);

