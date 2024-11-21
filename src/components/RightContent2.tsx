import Button from "./Button"

const RightContent2 = () => {
    return <div className="display-none right-content-second ">

        <div className="black-dude-image">

            {/* <img src="dark-art.jpg" /> */}

        </div>

        <div className="enjoy-cally">
            <p>ENJOY TO<br /> CALLY</p>

            <div className="cally-button">
                <div className="btn">
                    <div>
                        <p>START<br /> EXPERIENCE</p>

                    </div>
                    <div className="longarrow">
                        <div className="buttonline">
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} className="arrow" viewBox="0 0 320 512"><path fill="#000000" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

                    </div>
                </div>
                <div className="btn btn2">
                    <div>
                        <p style={{ textAlign: 'center' }}>MORE<br /> ABOUT CALLY</p>

                    </div>
                    <div className="longarrow">
                        <div className="buttonline" style={{ borderColor: "white" }}>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={10} className="arrow" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default RightContent2