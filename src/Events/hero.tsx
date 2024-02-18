import eventsbg from './../assets/hurray.jpeg'


export const EventsHero = () => {
    return (
        <div className='w-full h-full' style={{ backgroundImage: `url(${eventsbg})` }}>
            <div className='p-48'>
            <h1 className='text-white text-5xl'>Gallery</h1>
            <h1 className='text-white text-9xl'>Our Events</h1>
            </div>
        </div>
    )
}