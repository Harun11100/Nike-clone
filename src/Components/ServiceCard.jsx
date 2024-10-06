
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px]  w-full rounded-[20px] shadow-3xl px-10 py-16 ">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full" >
         <img src={imgURL} alt={label} width={25} height={25} />
      </div>
      
      
      <h3 className="text-lg font-montserrat font-semibold pt-5">{label}</h3>
      <p className="font-montserrat pt-5">{subtext}</p>
    </div>
  )
}

export default ServiceCard