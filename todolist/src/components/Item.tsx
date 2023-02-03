// Item
// 만든 CheckBox, Text, DeleteButton을 합쳐서 Item 컴포넌트 만들기
// Item 컴포넌트는 CheckBox, DeleteButton을 눌렀을 때 컨트롤하는 함수
// completed 상태도 받아오기
// checkbox 구분 : Item컴포넌트에 Id를 추가해주고 Id가 눌렸을 때 실행할 함수 받아옴


// import React from "react";
// import CheckBox from "./CheckBox";
// import DeleteButton from "./DeleteButton";
// import '../styles/item.css';
// import Text from "./Text";

// interface ItemProps {
//         onClickCheckBox( id : number ) :void;
//         onClickDeleteButton( id : number ) :void;
//         completed? : boolean;
//         text: string;
//         id: number;
//     }


// const Item = ({
//     onClickCheckBox,
//     onClickDeleteButton,
//     completed,
//     text,
//     id,

// }:ItemProps ) => {

    
//     return (
//         <>
//         <div className="itemContainer">
//             <CheckBox checked={completed} onClick= {()=> onClickCheckBox(id)} />
//             <Text completed={completed}>
//                 {text}
//             </Text>
//             <DeleteButton 
//                 onClick={() => onClickDeleteButton(id) }
//             />
//         </div>
//         </>
//     );

// }

// export default Item;

import React from 'react';
import { CiTrash } from "react-icons/ci";

import useStore from 'stores/useStore';
import { TodoData } from 'stores/todo';

interface Props {
    data : TodoData;
}

const TodoItem = ({ data }: Props) => {
    const { todo } = useStore();

    const removeItem = () => {
        todo.removeTodo(data.id);
    };

    return (
        <div>
            <input type="checkbox" />
            <span>{data.content}</span>
            <div className="deleteButtonContainer" onClick={ removeItem }>
            < CiTrash />
        </div>
        </div>
    );
};

export default TodoItem;