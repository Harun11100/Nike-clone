

const Button = ({label,iconURL,fullwidth}) => {
  return (
   <button className={` flex justify-center items-center px-3 py-2 text-white bg-red-500 rounded-full ${fullwidth &&'w-full'}`}>
     {label}
     {iconURL && <img src={iconURL}
     className="ml-2 rounded-full
     w-5 h-5"/>}
   </button>
  )
}

export default Button