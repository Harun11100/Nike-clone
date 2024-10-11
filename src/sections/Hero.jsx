
import { useState } from "react"
import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import { shoes,statistics } from "../constants"
import ShoeCard from "../Components/ShoeCard"
const Hero = () => {
  const [shoeimage,setShoeImage]=useState(bigShoe1)
  return (
    <section id="home"
   className="w-full flex flex-col xl:flex-row justify-center min-h-screen max-container "
    >
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
     <p className="text-xl font-montserrat text-coral-red" >Our Summer collection </p >
     <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] font-bold
    
     ">
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival </span>
      <br />
      <span className="text-coral-red inline-block mt-2 ">Nike</span> Shoes
     </h1>
     <p className="font-montserrat text-slate-gray text-lg leading-8 mt-5 mb-16 ">Discover stylish nike arrivals, quality comfort , and innovation for your active life </p>
    <Button label='Shop Now' iconURL={arrowRight}/>

    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
     {statistics.map((stat)=>(
      <div key={stat.label}>
        <p className="text-4xl font-palanquin font-bold">{stat.value}
        </p>
        <p className=" leading-10 font-montserrat text-slate-gray">{stat.label}</p>
      </div>
     ))}

    </div>
    </div>
    <div className="flex relative justify-center items-center flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img src={shoeimage} alt="shoes"
      width={610}
      height={500}
      className="object-contain relative z-10" 
    
      />
      <div className="flex sm:gap-6 gap-4 absolute -bottom-[7%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe)=>(
          <div key={shoe}>
               <ShoeCard imgURL={shoe}
               changeBigShoeImage={(shoe)=>{setShoeImage(shoe)}}
               bigShoeImg={shoeimage} />
          </div>
        ))}
      </div>


    </div>
    </section>
  )
}

export default Hero
