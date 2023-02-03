// Text
// props로 넘어온 값을 화면에 뿌려주기
// 범위를 초과한 글자가 있다면 ... 로 처리

import React from "react";
import '../styles/text.css'

interface TextProps {
    completed?: boolean;
    children: React.ReactNode;
}

const Text = ({
    completed,
    children
}: TextProps) => {
    return (
        <>
        <div className={`text ${completed ? 'completedText' : '' }`}>
            {children}
        </div>
        </>
    );
}

export default Text;
