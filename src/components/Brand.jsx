import KisahkisaLogo from "../assets/image/logo/kisahkisa.png"

export default function Brand(){
    return(
        <div className="brand" id="brand">
            <div className="container">
                <div className="row">
                    <div className="title">
                        <h2>Brand Kami</h2>
                    </div>
                    <div className="content">
                        <a href="https://kisahkisa.co.id" target="_blank">
                            <img src={KisahkisaLogo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}