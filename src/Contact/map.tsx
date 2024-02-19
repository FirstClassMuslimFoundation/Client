import backgroundImage from '../assets/map.png'

export const ContactMap = () => {
    return (
        <div>
            <div className='w-full h-full rounded-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img className='w-full h-full rounded-3xl' src={backgroundImage} alt="" />
            </div>
        </div>
    )
}