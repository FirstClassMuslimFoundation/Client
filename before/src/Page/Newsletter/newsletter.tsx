
export const Newsletter = () => {
    return (
        <div style={{ background: 'Black' }} className='flex flex-row justify-center'>
            <div className='my-24 flex gap-x-48 flex-row'>
                <div className='w-full h-full flex-1'>
                    <p className='text-white p-3'>Subscribe</p>
                    <h1 className='text-white text-3xl p-3'>Newsletter</h1>
                    <p className='text-white font-light p-3'>Sign up for our regular newsletter to get the latest<br /> news and updates about us.</p>
                    <div className='flex gap-x-8 p-3'>
                        <input className='px-16 py-2 bg-white rounded-full' type="text" placeholder='Enter Your Email Address' />
                        <button className='px-6 py-2 bg-gray-600 text-white rounded-full'>SEND</button>
                    </div>
                </div>
                <div className='w-full h-full flex-1 justify-center'>
                    <div className="justify-items-center">
                        <h1 className='text-white text-3xl text-center mb-12'>You can contribute to provide for<br /> the welafarism of leaders of<br /> tomorrow!</h1>
                        <div className='flex justify-center'>
                            <button className='px-8 py-2 bg-white rounded-2xl justify-center'>Donate</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}