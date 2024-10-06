import { arrowRight } from "../assets/icons"
import Button from "../Components/Button"
import { shoe8 } from "../assets/images"

const SuperQuality = () => {
  return (
    <section id='about-us' className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col" >
        <h2 className="font-montserrat text-2xl font-bold">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
         <p className="font-montserrat lg:max-w-lg  text-slate-gray pb-10 pt-5  leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, facilis quae unde veniam repellendus expedita obcaecati.<br/>laborum optio doloremque sequi eum tenetur illo corporis pariatur architecto cupiditate amet maiores sint adipisci dolore. Officiis, omnis alias amet, quis dignissimos, deserunt facilis dolorem necessitatibus nulla maxime odit quae numquam fuga accusantium molestiae?</p>
      <span><Button label='View details' iconURL={arrowRight}/></span>
      
      </div>
      <div className="flex flex-1 justify-center items-center " >
        <img src={shoe8} alt="shoes" width={570} height={522} className="object-contain" />
      </div>


    </section>
  )
}

export default SuperQuality