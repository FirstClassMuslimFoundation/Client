import backgroundImage2 from '../../assets/BG.png';
import backgroundImage1 from '../../assets/BG.png';

export const Newsletter = () => {
    return (
        <div className='flex flex-row'>
            <div className='w-full h-full flex-1' style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
            <div className='w-full h-full flex-1 justify-items-center' style={{ backgroundImage: `url(${backgroundImage2})` }}>
                <h1 className='text-white text-3xl text-center mb-6'>You can contribute to provide for the welafarism of leaders of tomorrow!</h1>
                <button className='px-8 py-2 bg-white rounded-2xl justify-center'>Donate</button>
            </div>
        </div>
    )
}