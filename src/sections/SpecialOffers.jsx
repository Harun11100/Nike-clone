import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpecialOffers = () => {
  return (
    <section className="flex max-container justify-wrap items-center max-lg:flex-col-reverse gap-10">
      <div className='flex-1 '>
      <img src={offer} width={773} height={687} className='object-contain w-full'/>
     </div>
      <div className="flex flex-1 flex-col" >
      <h2 className="text-2xl font-montserrat font-bold pb-5"><span className="text-coral-red">Special</span> Offer</h2>
         <p className="font-montserrat lg:max-w-lg  text-slate-gray pb-10 pt-5  leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, facilis quae unde veniam repellendus expedita obcaecati.<br/>laborum optio necessitatibus nulla maxime odit quae numquam fuga accusantium molestiae?</p>
        <div className='flex justify-between items-center'>
        <Button label='Shop Now' iconURL={arrowRight}/>
        <a className='bg-slate-400 text-white px-5 py-2' href="./">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers