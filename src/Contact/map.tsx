import backgroundImage from '../assets/map.png'

export const ContactMap = () => {
    return (
        <div className='w-full h-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img src={ backgroundImage} alt="" />
        </div>
    )
}