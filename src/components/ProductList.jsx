import Product from "./Product"

function ProductList() {
    const products = [
        { id:1, name: 'Bush Camper Lite', price: 234.57, description:'Lightweight tent for those overnight hikes and some more text in here', image:'/static/images/hoodie.jpg'},
        { id:2, name:'KITH Hoodie', price: 234.57, description: 'Love this hoodie', image : '/static/images/hoodie.jpg'},
        { id:3, name:'Fanorak', price: 234.57, description:'Super hip. Comes in a number of colors', image : '/static/images/hoodie.jpg'},
        { id: 4, name: 'Nike Vapormax', price: 234.57, description: 'Kind of squeaky on some floors', image : '/static/images/hoodie.jpg'},
        { id: 5, name: 'Yeti Cooler', price: 234.57, description: 'Who spend this much on a cooler?!', image : '/static/images/hoodie.jpg'},
        { id: 6, name: 'Naked and Famous Denim', description: 'Japense denim, made in canada', image : '/static/images/hoodie.jpg'},
        { id: 7, name: 'Rimowa Luggage', price: 234.57, description: 'S T E A L T H', image : '/static/images/hoodie.jpg'},
        { id: 8, name: 'Black Hole', price: 234.57, description: 'Outdoorsy', image : '/static/images/hoodie.jpg'},
        { id: 9, name: 'Nudie Belt', price: 234.57, description: 'Sick design', image : '/static/images/hoodie.jpg'},
        { id: 10, name: 'Goose', price: 234.57, description: 'keep warm', image : '/static/images/hoodie.jpg'},
        { id: 11, name: 'Ultraboost', price: 234.57, description: 'blacked out', image : '/static/images/hoodie.jpg'}
    ]
  return (
    <main className="max-w-1000 mx-auto p-6">

      <div className="text-center lg:text-left">
        <div className="inline-flex border mt-4 rounded-lg divide-x text-base">
          <a href="#" aria-disabled='true' className="px-7 py-4 pointer-events-none text-gray-500">&larr; Prev</a>
          <p className="px-7 py-4 hidden sm:block">Page 1 of 3</p>
          <p className="px-7 py-4 hidden sm:block">11 items total</p>
          <a href="#" aria-disabled='true' className="px-7 py-4 pointer-events-none text-gray-500">Next &rarr; </a>
        </div>
      </div>
      <ul className="grid mt-5 gap-16 lg:grid-cols-2">
          { products.map((product) => (
              <Product key = { product.id } item = { product } />
          ))}

      </ul>
    </main>
  )
}

export default ProductList
