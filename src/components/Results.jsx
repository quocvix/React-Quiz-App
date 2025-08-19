import React from 'react';

const Results = ({score, totalQuestionNum}) => {

    return (
        <div>
            <h2>Kết Quả</h2>
            <p className="result">Bạn đã trả lời đúng {score} / {totalQuestionNum}</p>
            <div className="resultButtonsContainer">
                <button className="result-button">Xem lại</button>
                <button className="result-button">Làm lại</button>
            </div>
        </div>
    );
}

export default Results;
