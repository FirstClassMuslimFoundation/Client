import logo from '../../assets/logofcmf.png'

export const Below = () => {
    return (
        <div className='p-8 flex flex-row gap-x-8 m-12 justify-around'>
            <div>
                <img className='h-24 mt-8' src={logo} alt="" />
            </div>
            <div>
                <h1>We provide sustainable career paths <br /> that will spurt Muslim youths to the<br/> peak of their endeavors in the shortest<br/> possible time frame &opportunities for<br/> local and international corporations to<br/> access and engage Muslim youths in<br/> their establishments.</h1>
            </div>
            <div className='flex flex-col gap-y-4'>
                <a className='hover:underline' href="">Home</a>
                <a className='hover:underline' href="">Events</a>
                <a className='hover:underline' href="">Team</a>
                <a className='hover:underline' href="">About</a>
            </div>
            <div className='flex flex-col gap-y-4'>
                <a className='hover:underline' href="">Gallery</a>
                <a className='hover:underline' href="">Register</a>
                <a className='hover:underline' href="">Contact Us</a>
            </div>
            <div>
                <h1 className='text-2xl pb-4'>Registered Office</h1>
                <p>Plot 149 Ekundayo Babaniji Street <br/> Off Fatai Irawo/International Airport<br/> Road, Ajao Estate, Lagos.</p>
            </div>
        </div>
    )
}