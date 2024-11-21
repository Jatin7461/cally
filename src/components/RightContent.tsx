import BottomLeft from "./BottomLeft"
import RightContent2 from "./RightContent2"
import VerticalArrows from "./VerticalArrows"

const RightContent = () => {
    return <div className="rightContent">
        <div className="rightText">
            <p>Maecenas arcu odio, pulvinar faucibus <br /> quis, convallis ac ipsum. </p>
        </div>
        <div className="navigateButton">
            <p>NAVIGATE</p>
            <div className="longarrow">
                <div className="navigateline">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width={10} className="arrow" viewBox="0 0 320 512"><path fill="#ffffff92" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>

            </div>
        </div>
        <div className="blackwoman">
            <BottomLeft />
            <img src="black_cloth_woman.jpg" />
            <VerticalArrows />
        </div>
        <RightContent2 />
    </div>
}

export default RightContent