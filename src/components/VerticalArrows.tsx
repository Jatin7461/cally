const VerticalArrows = () => {
    return <div className="verticalArrows display-none">
        <div className="arrow-line arrow1">
            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: -8 }} width={14} height={14} viewBox="0 0 448 512"><path fill="#ffffff" d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>
            <div className="verticalLines" style={{ marginBottom: 4 }}></div>
        </div>
        <div className="arrow-line arrow2">
            <div className="verticalLines" style={{ marginTop: 4 }}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={14} height={14} fill="#ffffff" style={{ marginTop: -6 }}><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
        </div>
    </div>
}

export default VerticalArrows