
function Product({item}) {

  return (
    <li key = { item.name } className="shadow-bs relative border border-gray-200 flex flex-col max-w-lg mx-auto">
      <p className="absolute -top-1 -right-1 bg-sick text-white text-3xl font-semibold p-1.5 leading-none transform rotate-3">{ item.price }</p>
      <img src = { item.image } alt = { item.altText } className = 'h-100 w-full object-cover' />
      <h2 className="text-center transform -skew-x-5 -rotate-1 -mt-8">
        <a href="#" className="bg-sick text-white text-4.5xl leading-tight px-3 text-shadow hover:underline">
          { item.name }
        </a>
      </h2>
      <p className="py-4 px-8 leading-8 flex-1">{ item.description }</p>
      <div className="grid grid-cols-3 border-t border-gray-300 divide-x divide-gray-300">
        <button className="p-3 hover:bg-gray-100">Edit</button>
        <button className="p-3 hover:bg-gray-100">Add to Cart</button>
        <button className="p-3 hover:bg-gray-100">Delete</button>
      </div>
    </li>
  )
}

export default Product
