// import { ImpactContainer } from "./container"
import shonuyi from "../../assets/shonuyi.png"
import kesh from "../../assets/kesh.png"
import quwam from "../../assets/quwam.png"

// export const Impact = () => {
//     const array = [
//         {
//             text: "The Foundation has been a beacon of hope in my life. Their educational programs not only enriched my knowledge of Islam but also enabled me to become a better person. I learned about tolerance, compassion, and the importance of community. Thanks to their guidance, I've grown as a responsible and respectful individual.",
//             color: "red",
//             image: shonuyi
//         },
//         {
//             text: "In a world where many struggle in silence, First Class Muslim Foundation's open arms and willingness to extend a helping hand are truly inspirational. I feel blessed to have crossed paths with this wonderful organization, which stands as a testament to the values of compassion, empathy, and faith. Their dedication to making lives better exemplifies the true essence of Islam.",
//             color: "green",
//             image: kesh
//         },
//         {
//             text: "This is a  The Foundation's commitment to Islamic education is truly commendable. Through their educational scholarships and mentorship programs, they have helped my access to quality Islamic principles & Methodology that will benefit me in the long run. I believe this is not just charity; it's an investment in the future of the community. about how we helped a company",
//             color: "blue",
//             image: quwam
//         }
//     ]
//     return (
//         <div>
//             <h1 className="font-bold text-center text-3xl">Impact stories</h1>
//             <div className="flex flex-row">
//             {array.map((item, index) => {
//                 return <ImpactContainer key={index} text={item.text} color={item.color} image={item.image} />
//             })}
//             </div>
//         </div>
//     )
// }

import { AlumniContainer } from "./container"

const bodies = [
    "The Foundation has been a beacon of hope in my life. Their educational programs not only enriched my knowledge of Islam but also enabled me to become a better person. I learned about tolerance, compassion, and the importance of community. Thanks to their guidance, I've grown as a responsible and respectful individual.",
    "The Foundation has been a beacon of hope in my life. Their educational programs not only enriched my knowledge of Islam but also enabled me to become a better person. I learned about tolerance, compassion, and the importance of community. Thanks to their guidance, I've grown as a responsible and respectful individual.",
    "In a world where many struggle in silence, First Class Muslim Foundation's open arms and willingness to extend a helping hand are truly inspirational. I feel blessed to have crossed paths with this wonderful organization, which stands as a testament to the values of compassion, empathy, and faith. Their dedication to making lives better exemplifies the true essence of Islam.",
    " The Foundation's commitment to Islamic education is truly commendable. Through their educational scholarships and mentorship programs, they have helped my access to quality Islamic principles & Methodology that will benefit me in the long run. I believe this is not just charity; it's an investment in the future of the community.",
]

const names = [
    "Ibraheem F. Shonuyi",
    "Ibraheem F. Shonuyi",
    "Keshinro Abu Bakr",
    "Quwam Adeniyi",
]

const classOf = [
    "Class of 2018",
    "Class of 2007",
    "Class of 2021",
    "Class of 2000",
]

const colors = [
    "#97E651",
    "#FFD38A",
    "#97E651",
    "#FFD38A",
]

const alumniContainers: any[] = [
    {
        image: shonuyi,
        body: bodies[0],
        classOf: classOf[0],
        name: names[0],
        color: colors[0],
    },
    {
        image: shonuyi,
        body: bodies[1],
        classOf: classOf[1],
        name: names[1],
        color: colors[1],
    },
    {
        image: kesh,
        body: bodies[2],
        classOf: classOf[2],
        name: names[2],
        color: colors[2],
    },
    {
        image: quwam,
        body: bodies[3],
        classOf: classOf[3],
        name: names[3],
        color: colors[3],
    }
]




export const Impact = () => {
    return (
        <div className="bg-white w-full h-full">
            <div>
                <h1 className="font-family: 'Inter', sans-serif text-center text-5xl font-bold mb-8 mt-12 md:break-normal lg:break-all">
                    Impact Stories
                </h1>

            </div>
            <div className="overflow-x-auto">
                <div className="flex flex-row gap-x-8 p-8" style={{ width: `${alumniContainers.length * 600}px` }}>
                    {alumniContainers.map((alumni, index) => (
                        <AlumniContainer
                            key={index}
                            image={alumni.image}
                            body={alumni.body}
                            classOf={alumni.classOf}
                            name={alumni.name}
                            color={alumni.color}
                        />
                    ))}
                </div>
            </div>
        </div>


    )
}