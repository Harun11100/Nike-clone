import Button from "../Components/Button"


const Subscribe = () => {
  return (
 <section className="max-container flex justify-center items-center max-lg:flex-col gap-10" 
 id='contact-us'>

 <h3 className="text-2xl leading-[68px] lg:max-w-md font-montserrat font-bold">Sign Up From <span className="text-coral-red"> Updates</span> & Newsletter</h3>
 <div className="lg:max-w-[40%] w-full
 flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
  <input className="input"  type="text" placeholder="subscribe@nike.com" />
  <div className="flex max-sm:justify-end max-sm:w-full items-center">
    <Button label='Sign Up' fullwidth/>
  </div>
 </div>
 </section>
  )
}

export default Subscribe