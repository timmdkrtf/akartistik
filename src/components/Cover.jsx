import {useState, useEffect} from 'react'
import akaLogo from "../assets/image/logo/aka-main-p.png"
import Image1 from "../assets/image/bg/1.png"
import Image2 from "../assets/image/bg/5.png"
import Image3 from "../assets/image/bg/3.png"
import Image4 from "../assets/image/bg/4.png"

const images = [Image1, Image3, Image2, Image4];

export default function Cover(){
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
        <div id="cover" className={`cover ${fade ? "fade-out" : "fade-in"}`} style={{ backgroundImage: `url(${images[currentImage]})` }}>
            <div className="content-container">
                <div className="content-center">
                    <img src={akaLogo} alt="" />
                    <p>PT Abdi Karya Artistik</p>
                </div>
            </div>
        </div>
    );
}