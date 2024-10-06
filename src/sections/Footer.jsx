import { copyrightSign } from "../assets/icons"
import { footerLogo, headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"


const Footer = () => {
  return (
   <footer className='max-container'>
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
       <div className="flex flex-col items-start">
        <a href="/">
        <img src={footerLogo} alt="logo" width={100} height={100}/>
        </a>
      
       <p className="text-white font-montserrat mt-5 sm:max-w-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quibusdam! Quia perspiciatis optio nobis natus amet obcaecati possimus id. Temporibus.</p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map(media=>(
            <div key={media.src} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
               <img src={media.src} alt={media.alt} className=""/>
            </div>
          
          ))}
        </div>

        

       </div>
       
       
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map(link=>(
                <div  key={link} className="text-white font-montserrat ">
                  <h4 className="text-xl font-bold border-b-2 mb-5"> {link.title}</h4>
                 
                 <ul>{link.links.map(link=>(
                  <li key={link.name} className="leading-6 mt-2 hover:text-slate-gray cursor-pointer"
                  >
                    <a href="">{link.name}</a>
                  </li>
                 ))}</ul>
                </div> 
              ))}
            </div>
       
      
    </div>

    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"> 
      <div className="flex flex-1 justify-start items-center gap-3 font-montserrat cursor-pointer">
        <img src={copyrightSign} alt='copy right' width={20}
        height={20} />
        <p>Copiright. All right reserved</p>

      </div>
      <p className="font-montserrat cursor-pointer">Terms & conditions</p>
      
    </div>
   </footer>
  )
}

export default Footer