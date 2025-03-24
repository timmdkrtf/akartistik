import NoviPhoto from "../assets/image/photo/Frame 7.png"
import YeniPhoto from "../assets/image/photo/Frame 8.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="title">
                <h2><span className="dewan">Dewan</span> <span>Komisaris</span> dan <span>Direksi</span></h2>
            </div>
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={YeniPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Yeni Nuraeni</h4>
                        <h5>Komisaris Utama</h5>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={NoviPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Novi Agustin Samanti</h4>
                        <h5>Direktur Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}