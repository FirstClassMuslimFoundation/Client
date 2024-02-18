import { TeamContainer } from "./container"
import teammember from '../assets/teammember.png'

export const TeamLayout = () => {
    const array: any[] = [
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
        {
            instagram: 'https://google.com',
            twitter: 'https://google.com',
            facebook: 'https://google.com',
            name: 'Dr. Sulaimon Ogunmuyiwa',
            image: teammember
        },
    ]
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 p-24 gap-x-12 md:grid-cols-3 lg:grid-cols-3">
                    {array.map((data, index) => (
                        <TeamContainer
                            key={index}
                            imageUrl={data.image}
                            instagram={data.instagram}
                            twitter={data.twitter}
                            facebook={data.facebook}
                            name={data.name}
                        />
                    ))}
                </div>
        </div>
    )
}