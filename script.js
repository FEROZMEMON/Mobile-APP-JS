const body = document.querySelector("body")
let div = document.querySelector("div")

const phones = [
    {
        brand: 'Samsung',
        img: "assets/samsung s20.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Xiaomi',
        img: "assets/xiaomi note 10.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel'
    },
    {
        brand: 'Infinix',
        img: "assets/infinix z10.jpg",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel'
    },
    {
        brand: 'Tecno',
        img: "assets/tecno spark 10.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel'
    },
    {
        brand: 'Iphone',
        img: "assets/iphone 14.jpg",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel'
    },
    {
        brand: 'Oppo',
        img: "assets/oppo f11.jpg",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel'
    },
    {
        brand: 'Vivo',
        img: "assets/vivo y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel'
    },

]

for (let i = 0; i < phones.length; i++) {
    div.innerHTML +=
 `<div class="main">
  <h2>Brand: ${phones[i].brand}</h2>
  <img src="${phones[i].img}">
  <h4>Model: ${phones[i].model}</h4>
  <h4>Ram: ${phones[i].ram}</h4>
  <h4>Rom: ${phones[i].rom}</h4>
  <h4>Camera: ${phones[i].camera}</h4>
  <br>
  <button class="btn" >ADD CART</button>

 </div>`
}




















































































