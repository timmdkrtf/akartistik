import NoviPhoto from "../assets/image/photo/novi.png"
import YeniPhoto from "../assets/image/photo/yeni.png"

export default function AboutUs(){
    return(
        <div className="about-us">
            <div className="row">
                <div className="content-left">
                    <div className="cover-image">
                        <img src={YeniPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Yeni</h4>
                        <h5>Dewan Komisaris</h5>
                    </div>
                </div>
                <div className="content-center">
                    <div className="title">
                        <h2>
                            Dewan Komisaris
                            <br/>
                            <span>&</span>
                            <br/>
                            Direksi Utama
                        </h2>
                    </div>
                </div>
                <div className="content-right">
                    <div className="cover-image">
                        <img src={NoviPhoto} alt="" />
                    </div>
                    <div className="title">
                        <h4>Novi</h4>
                        <h5>Direksi Utama</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}