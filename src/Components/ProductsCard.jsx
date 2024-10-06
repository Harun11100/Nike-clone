

const ProductsCard = ({items}) => {
  return (
   <div className='flex flex-1 flex-col w-full max-sm:w-full '>
    <img src={items.imgURL} alt={items.name} width={280} height={280} />
    <div>
      <p></p>
      <p className='font-montserrat pt-5 font-bold'>{items.name}</p>
      <p className='font-montserrat text-coral-red font-semibold pt-2'>{items.price}</p>
    </div>
   </div>
  )
}

export default ProductsCard