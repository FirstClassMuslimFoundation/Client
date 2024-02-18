import { useState, useEffect } from 'react';
import scholarship from '../../assets/scholarship.png'
import empowerment from '../../assets/empowerment.png'
import employment from '../../assets/employment.png'
import mentorship from '../../assets/mentorship.png'
import backgroundImage from '../../assets/bggreen.png'

const contentArray = [
    { image: scholarship, text: 'Scholarship & Excellence', color: 'green' },
    { image: employment, text: 'Employment Opportunities', color: 'red' },
    { image: empowerment, text: 'Employability Skills', color: 'blue' },
    { image: mentorship, text: 'Mentorship', color: 'blue' }
];

export const Raise = () => {
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentContentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
        }, 4000);

        return () => {
            clearInterval(interval); 
        };
    }, []); 
    const currentContent = contentArray[currentContentIndex];

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`}}>
            <div>
                <h1 className="text-white text-4xl text-center font-bold p-10 hover:underline transition-transform transform hover:scale-110">Raising Outstanding Muslim Youths</h1>
            </div>
            <div className='flex justify-center pb-24 hover:underline transition-transform transform hover:scale-110'>
                <div style={{ background: currentContent.color }} className='w-[400px] h-[400px] rounded-2xl'>
                    <img src={currentContent.image} alt="" />
                    <h1>{currentContent.text}</h1>
                </div>
            </div>
        </div>
    );
};
