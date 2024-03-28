const HeroSection =()=>{
    return <main className="flex   max-w-6xl mx-auto item-center h-[calc(100vh-72px)]">
        <div>
            <h1 className="font-extrabold ml-12 text-7xl mt-24 mb-6">YOUR FEET DESERVE THE BEST</h1>
            <p className="ml-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad laboriosam ut nostrum iste dolores qui eius accusamus veritatis exercitationem ipsum!</p> 
            <div className="space-x-4 ml-12 mt-6 mb-4">
                <button  className="h-8  px-2.5 my-1 text-white rounded bg-[#361e12]  font-medium decoration-red-500">Shop Now</button>
                <button  className="h-8 px-2.5 my-1 text-white rounded bg-[#361e12] font-medium decoration-red-500">Category</button>
            </div> 
            <div className="ml-20">
                <p>Also Avilable on</p>  
            </div> 
            <div className="flex space-x-4 ml-24 mt-4">
             <img className="h-6 " src="/images/amazon_PNG5.png" alt="" />
             <img className="h-6 " src="/images/Flipkart-Emblem.png" alt="" />
            </div>

        </div>
        <div>
            <img className="w-[1000px] mr-[100px] mx-auto  mt-36"  src="/images/shoes-png.png" alt="" />
        </div>

    </main>;
}

export default HeroSection;