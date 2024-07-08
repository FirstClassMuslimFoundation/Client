import { useState } from 'react';

export const About = () => {
    const [selectedTab, setSelectedTab] = useState('The First Class Muslim Foundation (FCMF) is registered as an Incorporated Trustee under the Corporate Affairs Commission with registration number CAC/IT/NO 121816. The Foundation aims to improve the capacity of young Muslims in academic institutions and the industry to attain excellence. In specific terms, the foundation plans to promote scholarship and outstanding academic performance among Muslim youths, horn the employability skills of young Muslim graduates from Nigeria’s higher institutions of learning.'); // State to manage the selected tab text

    // Function to handle button click and set the selected tab text
    const handleTabClick = (text: any) => {
        setSelectedTab(text);
    };

    return (
        <div style={{ background: '#FFFFBF'}} className="flex justify-center">
            <div className="justify-center">
                <h1 className="text-5xl font-bold p-8 text-center">About Us</h1>
                <div className="flex flex-row gap-x-24 justify-center ">
                    <button className="bg-gray-500 px-6 py-3 hover:bg-blue-800 rounded-xl" onClick={() => handleTabClick('The First Class Muslim Foundation (FCMF) is registered as an Incorporated Trustee under the Corporate Affairs Commission with registration number CAC/IT/NO 121816. The Foundation aims to improve the capacity of young Muslims in academic institutions and the industry to attain excellence. In specific terms, the foundation plans to promote scholarship and outstanding academic performance among Muslim youths, horn the employability skills of young Muslim graduates from Nigeria’s higher institutions of learning.')}>
                        Introduction
                    </button>
                    <button className="bg-gray-500 px-6 py-3 hover:bg-blue-800 rounded-xl" onClick={() => handleTabClick('venhjgvefbmfkgas an Incorporated Trustee under the Corporate Affairs Commission with registration number CAC/IT/NO 121816. The Foundation aims to improve the capacity of young Muslims in academic institutions and the industry to attain excellence. In specific terms, the foundation plans to promote scholarship and outstanding academic performance among Muslim youths, horn the employability skills of young Muslim graduates from Nigeria’s higher institutions of learning.')}>
                        Our Vision
                    </button>
                    <button className="bg-gray-500 px-6 py-3 hover:bg-blue-800 rounded-xl" onClick={() => handleTabClick('The First Class Muslim Foundation (FCMF) is registered as an Incorporated Trustee under the Corporate Affairs Commission with registration number CAC/IT/NO 121816. The Foundation aims to improve the capacity of young Muslims in academic institutions and the industry to attain excellence. In specific terms, the foundation plans to promote scholarship and outstanding academic performance among Muslim youths, horn the employability skills of young Muslim graduates from Nigeria’s higher institutions of learning.')}>
                        Our Mission
                    </button>
                    <button className="bg-gray-500 px-6 py-3 hover:bg-blue-800 rounded-xl" onClick={() => handleTabClick('The First Class Muslim Foundation (FCMF) is registered as an Incorporated Trustee under the Corporate Affairs Commission with registration number CAC/IT/NO 121816. The Foundation aims to improve the capacity of young Muslims in academic institutions and the industry to attain excellence. In specific terms, the foundation plans to promote scholarship and outstanding academic performance among Muslim youths, horn the employability skills of young Muslim graduates from Nigeria’s higher institutions of learning.')}>
                        Impact Story
                    </button>
                </div>
                <div className='flex justify-center px-80 pb-24'>
                <p className='text-left pt-12 pb-24 max-h-32'>{selectedTab}</p>
                </div>
            </div>
        </div>
    );
};
