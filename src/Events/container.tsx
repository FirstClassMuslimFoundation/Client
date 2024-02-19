import React from 'react';

export interface EventContainerProps {
    imageUrl: string;
    eventDate: string;
    eventName: string;
    eventDescription: string;
    eventMonth: string;
}

export const EventContainer: React.FC<EventContainerProps> = ({ imageUrl, eventDate, eventName, eventDescription, eventMonth }) => {
    return (
        <div>
            <div className='p-6'>
                <div className='' style={{ position: 'relative', width: '400px', height: '300px' }}>
                    <img
                        src={imageUrl}
                        alt="Event Image"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div className='bg-gray-600 hover:bg-red-500 text-center p-2' style={{ position: 'absolute', top: 0, left: 0, width: '95px', height: '95px' }}>
                        <p className="text-4xl text-white">{eventDate}</p>
                        <h1 className="text-3xl text-white">{eventMonth}</h1>
                    </div>
                </div>
            </div>
            <div className='px-6 pb-6'>
                <p className='font-light'>Organized By: <span className='font-bold'>First Class Muslim Foundation</span></p>
            </div>
            <div className='border border-gray-500 ml-6 w-96'></div>
            <div className='p-6'>
                <h1 className='hover:text-red-700 text-2xl pb-3'>{eventName}</h1>
                <p className='font-light text-gray-500'>
                    {eventDescription.length > 50 ?
                        <>
                            {eventDescription.substring(0, 50)} <br />
                            {eventDescription.substring(50)}
                        </>
                        : eventDescription}
                </p>
            </div>
        </div>
    );
};

