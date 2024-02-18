import { EventContainer } from "./container"
import event1 from '../assets/event1.png'
import event2 from '../assets/event2.png'
import event3 from '../assets/event3.png'
import event4 from '../assets/event4.png'
import event5 from '../assets/event5.png'
import event6 from '../assets/event6.png'

// style={{ width: `${array.length * 700}px` }}

export const EventLayout = () => {
    const array: any[] = [
        {
            date: '27',
            month: 'Nov',
            description: 'The foundation students recently embarked on an educational excursion to Olumo Rock.',
            name: 'Excursion to Olumo Rock',
            image: event1
        },
        {
            date: '21',
            month: 'June',
            description: 'The foundation students had an enriching excursion at the Lekki Conservation Center.',
            name: 'Lekki Conservation Center',
            image: event2
        },
        {
            date: '21',
            month: 'May',
            description: 'An educational excursion to the Ibadan Zoo, gaining valuable insights into wildlife conservation & biodiversity.',
            name: 'Excursion to Ibadan Zoo',
            image: event3
        },
        {
            date: 'O9',
            month: 'July',
            description: 'An enlightening visit to the Olusegun Obasanjo Presidential Library, gaining valuable insights into the history and legacy of Nigeria past leadership.',
            name: 'Olusegun Obasanjo Presidential Library',
            image: event4
        },
        {
            date: '23',
            month: 'Dec',
            description: 'We organized an extensive camp, providing participants with an immersive experience to deepen their understanding of Islamic teachings and values.',
            name: 'Pictures: Long Forum',
            image: event5
        },
        {
            date: '27',
            month: 'Dec',
            description: 'The camp hosted by MSSN Lagos provided an enriching and engaging experience, fostering a deeper understanding of Islamic knowledge among participants.',
            name: 'Camp; Islamic Vacation Course',
            image: event6
        }
    ]
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-2 p-24 gap-x-12 md:grid-cols-3 lg:grid-cols-2">
                    {array.map((data, index) => (
                        <EventContainer
                            key={index}
                            imageUrl={data.image}
                            eventDate={data.date}
                            eventName={data.name}
                            eventDescription={data.description}
                            eventMonth={data.month}
                        />
                    ))}
                </div>
        </div>
    )
}