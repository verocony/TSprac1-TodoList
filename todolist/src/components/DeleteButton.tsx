// CheckBox처럼 눌렸는지 확인하는 상태는 없지만 눌렸을 때 동작하는 함수를 props로 받아옴

import React from "react";
import '../styles/deleteButton.css';
import { CiTrash } from "react-icons/ci";


interface DeleteButtonProps {
    onClick ? () : void;
}

const DeleteButton = ({
    onClick
}: DeleteButtonProps) => {
    return (
        <>
        <div className="deleteButtonContainer" onClick={ onClick }>
            < CiTrash />
        </div>
        </>
    );
}

export default DeleteButton;