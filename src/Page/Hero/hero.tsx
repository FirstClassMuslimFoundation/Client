import heroimage from '../../assets/heroimage.png'
import arrow from '../../assets/arrow.png'
import { useState, useEffect } from 'react';


const images = [heroimage, heroimage, heroimage, heroimage];

export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(interval); 
        };
    }, []); 

    const goToPrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div style={{ position: 'relative' }}>
            <img src={images[currentImageIndex]} alt="" style={{ width: '100%', height: 'auto' }} />
            <button onClick={goToPrevImage} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>
                <img src={arrow} alt="" />
            </button>
            <button onClick={goToNextImage} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: 1 }}>
            <img src={arrow} alt="" />
            </button>
        </div>
    );
};
