import BottomLeft from "./BottomLeft"
import Button from "./Button"
import RightContent from "./RightContent"
import VerticalArrows from "./VerticalArrows"

const Home = () => {
    return <div className="parentHome">

        <div className="home">

            <div className="anotherwoman">

            </div>
            {/* <VerticalArrows /> */}
            <div className="heading">

                <h1 className="casual">CASUAL<br></br> STREET</h1>
            </div>


            {/* <div > */}
            <div className="bottom-left-home-text">
                <h4 >
                    Aliquam eget gravida elit.
                </h4>
                Donec luctus dui id turpis < br /> sollicitudin, non auctor velit < br /> porta.Duis feugiat erat < br /> eu fringilla ornare.
                <div className="longarrow">
                    <div className="line">
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={10} className="arrow" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </div>
            </div >

            {/* </div> */}
        </div>

        <RightContent />
    </div>

}

export default Home