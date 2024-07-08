import React from 'react';

interface ImpactContainerProps {
    image: string;
    classOf: string;
    name: string;
    body: string;
    color: string;
}

export const AlumniContainer: React.FC<ImpactContainerProps> = ({ image, name, classOf, body, color }) => {
    return (
        <div style={{ background: color }} className="mt-10 mb-10 flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8 rounded-2xl w-auto h-auto border-2 border-black hover:transition-transform transform hover:scale-110">
            <div className="max-w-md w-full space-y-4">
                <div className="flex-1 space-y-2">
                    <div className="text-left">
                        <h4 className="text-center text-xl leading-6 font-medium text-gray-900">{body}</h4>
                    </div>
                </div>
                <div>
                    <h2 className="text-center text-xl leading-6 font-medium text-gray-900">{name}</h2>
                    <p className=" text-center text-sm font-bold">{classOf}</p>
                </div>
                <div className="flex-shrink-0 overflow-hidden">
                    <img
                        className="mx-auto h-24 w-24 rounded-full"
                        src={image}
                        alt="Workflow"
                    />
                </div>
            </div>
        </div>
    );
}
    