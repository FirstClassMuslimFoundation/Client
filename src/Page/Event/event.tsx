import esman from '../../assets/esman.png' 

export const EventGallery = () => {
    const imagesArray: string[] = [esman, esman, esman, esman, esman]
    return (
        <div>
            <h1 className="text-black text-center text-3xl font-bold p-8 hover:underline transition-transform transform hover:scale-110">Event Gallery</h1>
            <div className='flex flex-row gap-10 justify-center'>
                {imagesArray.map((item, index) => {
                    return (
                        <div className="border-4 rounded-2xl border-green-500 hover:underline transition-transform transform hover:scale-110">
                            <img key={index} src={item} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className='p-6 flex justify-center'>
            <button className="border-2  border-black p-4 rounded-xl hover:underline transition-transform transform hover:scale-110">See All Event Gallery</button>
            </div>
        </div>
    )
}