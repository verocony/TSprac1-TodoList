// CheckBox
// 체크박스 눌렸을 때/ 안눌렸을 때 클릭에 따라 state 가짐. 눌리면 색이 바뀌고 ✔︎ 표시.
// 눌렸을 때 할 행동은 props로 받아서 처리.

import React from "react";
import '../styles/checkBox.css';

interface CheckBoxProps {
    checked?: boolean;
    onClick?(): void;
}

const CheckBox = ({
    checked,
    onClick
}: CheckBoxProps ) => {
    return (
        <>
        <div className="container" onClick={onClick}>
            <div className="checkIcon">
                {checked && "✔︎"}
            </div>
        </div>
        </>
    );
}

export default CheckBox;