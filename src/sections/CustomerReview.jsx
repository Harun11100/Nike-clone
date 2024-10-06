import { reviews } from "../constants"
import {star} from "../assets/icons"

const CustomerReview = () => {
  return (
    <section className="max-container ">
      <h3 className="font-montserrat text-lg font-bold pb-5"> What Our 
        <span className= "  text-coral-red"> Customer</span> Say?
        </h3>
      <div className="flex flex-1 max-lg:flex-col gap-8 w-full ">
        {reviews.map(review=>(
          <div key={review.customerName}>
            <img src={review.imgURL} alt={review.customerName} width={60} height={60}className="rounded-full"/>
            <h4 className="font-montserrat pt-3 font-semibold">{review.customerName}</h4>
             <div className="flex pb-3  pt-3 justify-normal items-center">
              <img src={star} alt="rating" />
             <p >{review.rating}</p>
             </div>
            
            <p className=" leading-normal font-montserrat">{review.feedback}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default CustomerReview