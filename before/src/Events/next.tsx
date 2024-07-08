import backgroundImage from '../assets/eventbgdown.png'

export const NextDonate = () => {
    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='flex flex-col justify-between'>
                <div className='m-12'>
                    <h1 className='text-5xl text-white text-center'>You can contribute to provide for the <br/> welafarism of leaders of tomorrow!</h1>
                </div>
                <div className='flex justify-center gap-x-16 mb-12'>
                    <button className='px-8 py-3 bg-yellow-500'>Join as a sponsor</button>
                    <button className='px-5 py-3 bg-white'>Donate</button>
                </div>
            </div>
        </div>
    )
}