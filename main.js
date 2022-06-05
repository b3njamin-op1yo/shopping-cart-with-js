let shop = document.getElementById('shop');

let shopItemsData = [
	{
		id: '1909438203',
		name: 'Casual Shirt',
		price: '45',
		desc: 'They are made from similar fabrics, however they typically come in a wider variety of textures and weaves such as Oxford or chambray.',
		img: 'images/img-1.jpg',
	},
	{
		id: '5893840',
		name: 'Office Shirt',
		price: '100',
		desc: 'Although patterned versions are available, the most popular styles come in conservative colours such as white, blue or pink.',
		img: 'images/img-2.jpg',
	},
	{
		id: '43985934',
		name: 'T Shirt',
		price: '25',
		desc: 'Traditionally, it has short sleeves and a round neckline, known as a crew neck and lacks a collar.',
		img: 'images/img-3.jpg',
	},
	{
		id: '0092930',
		name: 'Mens Suit',
		price: '445',
		desc: 'The most basic definition of a mans suit is a jacket and trousers intended to be worn as an ensemble.',
		img: 'images/img-4.jpg',
	},
];

let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x) => {
			let { id, name, price, desc, img } = x;
			return `
    <div id=product-id-${id} class="item">
			<img width="221" src=${img} alt="" />
			<div class="details">
				<h3>${name}</h3>
				<p>
					${desc}
				</p>
				<div class="price-quantity">
					<h2>$ ${price}</h2>
					<div class="buttons">
						<i class="bi bi-dash"></i>
						<div id=${id} class="quantity">0</div>
						<i class="bi bi-plus"></i>
					</div>
				</div>
			</div>
		</div>
    `;
		})
		.join(''));
};

generateShop();
