const navigation =() =>{

    return (
       <nav className="h-16 max-w-6xl flex justify-between mx-auto">
       <div className="">
         <img className="w-[100px] h-[64px] ml-6 text-white" src="/images/nike.png" alt="" />
       </div>
       <ul className="flex font-bold cursor-pointer mt-4 gap-24" >
         <li href="">Menu</li>
         <li href="">About</li>
         <li href="">Location</li>
         <li href="">Contact</li>
         
       </ul>
       <button className="h-8 mr-6 rounded border-2 border-black mt-4 px-2.5 my-1 text-white bg-[#361e12] font-medium decoration-red-500">login</button>
   
     </nav>
    )
}
export default navigation