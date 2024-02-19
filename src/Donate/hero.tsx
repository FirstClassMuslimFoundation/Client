import donate from '../assets/donate.png'
import donatetree from '../assets/donatetree.png'

export const DonateHero = () => {
    return (
        <div style={{ background: '#FFFDD6' }} className="w-full h-full">
            <div className="">
                <img className='px-24 py-12' src={donatetree} alt="" />
            </div>
            <div className="flex flex-row gap-x-16 mx-36 py-24">
                <div className="w-4/6">
                    <h1 className="text-5xl font-bold py-5">Making a donation for <br /> our scholars.</h1>
                    <p className="font-light text-gray-700 py-5">When you donate, you’re supporting effective care to outstanding <br /> Muslims with special needs—an investment in the leaders of tomorrow.</p>
                    <button className="bg-yellow-400 px-10 py-4 font-bold rounded-xl hover:transition-transform transform hover:scale-110">Donate Now</button>
                </div>
                <div className="w-2/6">
                    <img src={donate} alt="" />
                </div>
            </div>
        </div>
    )
}