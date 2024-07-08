export const Footer = () => {
    return (
        <div className="flex flex-row gap-x-28 justify-center border border-gray-600 p-8">
            <div className="">
                <h1 className="py-4">Follow Us</h1>
                <div className="flex flex-row">
                    <a href="https://www.facebook.com/"><img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" /></a>
                    <a href="https://www.instagram.com/"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" /></a>
                    <a href="https://www.linkedin.com/"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" /></a>
                    <a href="https://www.twitter.com/"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" /></a>
                </div>
            </div>
            <div className="flex flex-col justify-around">
                <h1>+234-(0)811-489-7620</h1>
                <p>nextgenwave@gmail.com</p>
            </div>
            <div className="mt-4">
                <h1>Copyright @  nextgenwave 2023</h1>
            </div>
        </div>
    )
}