// Item
// 만든 CheckBox, Text, DeleteButton을 합쳐서 Item 컴포넌트 만들기
// Item 컴포넌트는 CheckBox, DeleteButton을 눌렀을 때 컨트롤하는 함수
// completed 상태도 받아오기


import React from "react";
import CheckBox from "./CheckBox";
import DeleteButton from "./DeleteButton";
import '../styles/item.css';
import Text from "./Text";

interface ItemProps {
        completed? : boolean;
        text: string;
    }


const Item = ({
    completed,
    text,

}:ItemProps ) => {

    
    return (
        <>
        <div className="itemContainer">
            <CheckBox checked={completed} />
            <Text completed={completed}>
                {text}
            </Text>
            <DeleteButton />
        </div>
        </>
    )

}

export default Item;