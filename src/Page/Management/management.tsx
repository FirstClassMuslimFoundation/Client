import fatai from '../../assets/fatai.png';
import esman from '../../assets/esman.png';
import shobayo from '../../assets/shobayo.png';
import backgroundImage from '../../assets/bggreen.png';
import { ManagementContainer } from './container';

export const Management = () => {
    const handleTeams = () => {
        alert("All the teams!")
    }
    const array = [
        {
            text: "Dr. Sulaiman Ogunmuyiwa",
            post: "Founder & chairman",
            image: esman,
            default: "First Class Muslim Foundation"
        },
        {
            text: "Mr Abolare Shobayo",
            post: "Executive Director",
            image: shobayo,
            default: "First Class Muslim Foundation"
        },
        {
            text: "Mr. AbdulFattah Ogunrinde",
            post: "Program Coordinator",
            image: fatai,
            default: "First Class Muslim Foundation"
        }
    ]
    return (
        <div className=''>
        <div className='' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1 className="font-bold h-full w-full text-center text-white text-3xl pt-8 hover:underline transition-transform transform hover:scale-110">Our Management Team</h1>
            <div className="flex flex-row gap-x-8 p-24 justify-start" style={{ width: `${array.length * 700}px` }}>
                    {array.map((data, index) => (
                        <ManagementContainer
                            key={index}
                            image={data.image}
                            text={data.text}
                            post={data.post}
                            defaultText={data.default}
                        />
                    ))}
                </div>
                <div className='p-6 flex justify-center'>
                <button onClick={handleTeams} className="border-2 border-white px-6 py-3 items-center hover:underline transition-transform transform hover:scale-110">View All Teams</button>
                </div>
        </div>
        </div>
    )
}