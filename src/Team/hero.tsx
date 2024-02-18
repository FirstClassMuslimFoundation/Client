import backgroundImage from '../assets/team.png'

export const TeamHero = () => {
    return (
        <div className='w-full h-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='p-48'>
            <h1 className='text-white text-5xl'>First Class Muslim Foundation...</h1>
            <h1 className='text-white text-9xl'>Team Members</h1>
            </div>
        </div>
    )
}