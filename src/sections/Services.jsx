import ServiceCard from "../Components/ServiceCard"
import { services } from "../constants"


const Services = () => {
  return (
 <section>
 <div className="max-container flex justify-center  flex-wrap-reverse gap-8">
  {services.map(service=>(
 <ServiceCard key={service.label} {...service}/>
  ))}
 
 </div>
 </section>
  )
}

export default Services