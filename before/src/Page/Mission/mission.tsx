import LightBox from "../../assets/Lightbox.png"

export const Mission = () => {
    return (
        <div style={{ background: '#FFFFBF'}} className="">
        <div className="flex flex-row justify-center">
            <div className="flex-1 justify-center px-20 py-40">
                <div className="p-4">
                    <h1 className="text-3xl p-3 font-bold hover:underline transition-transform transform hover:scale-110">Our Mission</h1>
                    <p className="p-3">To build Muslim leaders in the academia and in the industry through membership and capacity building.</p>
                </div>
                <div className="p-4">
                    <h1 className="text-3xl p-3 font-bold hover:underline transition-transform transform hover:scale-110">Our Vision</h1>
                    <p className="p-3">Raising exceptional Muslim intellectual and leaders.</p>
                </div>
            </div>
            <div className="flex-1 px-20 p-6">
                <img src={LightBox}></img>
            </div>
        </div>
        </div>
    )
}