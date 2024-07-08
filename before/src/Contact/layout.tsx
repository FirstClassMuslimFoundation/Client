import insta from '../assets/insta.png'
import face from '../assets/face.png'
import x from '../assets/x.png'
import message from '../assets/message.png'
import call from '../assets/call.png'


export const ContactLayout = () => {
    return (
        <div>
            <div className="flex flex-row my-16">
                <div className="flex-1 m-10">
                    <div className='mb-10'>
                        <p className='text-2xl text-red-500 mb-4'>Contact</p>
                        <h1 className='text-4xl mb-4'>Get In Touch With Us</h1>
                        <p className='font-light text-gray-500'>We value your connection and are eager to hear from you. Whether you have questions, feedback, or simply want to reach out to us.</p>
                    </div>
                    <div className='flex flex-col gap-y-10'>
                        <div className='flex flex-row gap-x-6'>
                            <img src={message} alt="" />
                            <div className='pt-6'>
                                <h1>Message</h1>
                                <p className='font-light text-gray-500'>info@firstclassmuslimfoundation.org</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-6'>
                            <img src={call} alt="" />
                            <div className='pt-6'>
                                <h1>Contact Us</h1>
                                <p className='font-light text-gray-500'>08091930652 (Office)</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <h1 className='text-3xl mt-4 pb-4'>Follow us on social media</h1>
                        <p className='font-light text-gray-500'>Follow us across all our social media handles to get firsthand information about the foundation.</p>
                        <div className='flex flex-row gap-x-6 justify-start pt-6 pb-6'>
                            <a href={""}><img src={insta} alt="" /></a>
                            <a href={""}><img src={face} alt="" /></a>
                            <a href={""}><img src={x} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 border border-gray-700 m-6 rounded-xl">
                    <div>
                        <div className="flex flex-col gap-y-6 my-6 justify-center">
                            <input className="bg-gray-200 py-3 mx-10 px-3" type="text" placeholder="Enter Your Name*" />
                            <input className="bg-gray-200 py-3 mx-10 px-3" type="text" placeholder="Phone Number*" />
                            <input className="bg-gray-200 py-3 mx-10 px-3" type="email" placeholder="Email Address*" />
                            <input className="bg-gray-200 py-24 mx-10 px-3" type="text" placeholder="Your Message*" />
                        </div>
                        <button className="bg-gray-800 text-white px-12 mx-10 py-3 rounded-3xl my-6">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}