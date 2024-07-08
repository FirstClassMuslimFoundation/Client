import insta from '../assets/insta.png'
import face from '../assets/face.png'
import x from '../assets/x.png'

export interface ITeamProps {
    imageUrl: string;
    name: string;
    facebook: string;
    instagram: string;
    twitter: string;
}


export const TeamContainer: React.FC<ITeamProps> = ({ imageUrl, instagram, facebook, twitter, name }) => {
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h1 className='font-bold text-center p-3'>{name}</h1>
            <div className='flex flex-row gap-x-6 justify-center pt-3 pb-6'>
                <a href={instagram}><img src={insta} alt="" /></a>
                <a href={facebook}><img src={face} alt="" /></a>
                <a href={twitter}><img src={x} alt="" /></a>
            </div>
        </div>
    )
}


