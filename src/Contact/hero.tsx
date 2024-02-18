import backgroundImage from '../assets/contact.png'

export const ContactHero = () => {
    return (
        <div className='w-full h-full' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='p-48'>
            <h1 className='text-white text-5xl'>Contact</h1>
            <h1 className='text-white text-9xl'>Get In Touch</h1>
            </div>
        </div>
    )
}