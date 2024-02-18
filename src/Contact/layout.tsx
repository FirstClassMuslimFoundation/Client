export const ContactLayout = () => {
    return (
        <div>
            <div className="flex flex-row">
            <div className="flex-1">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="flex-1 border border-gray-700 m-6 rounded-xl">
                <div>
                    <div className="flex flex-col gap-y-6 my-6 justify-center">
                    <input className="bg-gray-200 py-3 mx-10 px-3" type="text" placeholder="Enter Your Name*" />
                    <input className="bg-gray-200 py-3 mx-10 px-3" type="text" placeholder="Phone Number*" />
                    <input className="bg-gray-200 py-3 mx-10 px-3" type="email" placeholder="Email Address*" />
                    <input className="bg-gray-200 py-24 mx-10 px-3" type="text" placeholder="Your Message*" />
                    </div>
                    <button className="bg-gray-800 px-12 mx-10 py-3 rounded-3xl my-6">Submit</button>
                </div>
            </div>
            </div>
        </div>
    )
}