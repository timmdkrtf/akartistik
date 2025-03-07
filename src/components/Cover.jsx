import akaLogo from "../assets/image/logo/aka-main-p.png"


export default function Cover(){
    return(
        <div className="cover" id="cover">
            <div className="content-container">
                <div className="content-center">
                    <img src={akaLogo} alt="" />
                    <p>PT Abdi Karya Artistik</p>
                </div>
            </div>
        </div>
    );
}