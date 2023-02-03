// import React, { useRef } from "react";
// import { useState } from "react";
// import Item from "./Item";
// import InputText from './InputText';


// interface TdList {
//     id: number;
//     text: string;
//     completed: boolean;
// }

// const TodoList = () => {
//     const [inputText, setInputText ] = useState('');
//     const [ tasks, setTasks ] = useState<TdList[]>([
//         {
//             id: 1,
//             text: '투두리스트1',
//             completed: false,
//         },
//         {
//             id: 2,
//             text: '투두리스트2',
//             completed: false,
//         },
//         {
//             id: 3,
//             text: '완료1',
//             completed: true,
//         },
//     ]);

//     const nextId = useRef(4);

//     // 체크박스 핸들러
//     const handleClickCheckBox = (id: number ) => {
//         // 해당 id를 가진 컴포넌트의 completed 상태 변경
//         setTasks(tasks.map(task => 
//             task.id === id ? {...task, completed: ! task.completed} : task
//             ));
//     }

//     // 삭제버튼 핸들러
//     const handleClickDeleteButton = (id: number ) => {
//         // 해당 id를 가진 컴포넌트 삭제
//         setTasks(tasks.filter( task => task.id !== id ));
//     }

//     // 입력값 변경 핸들러
//     const handleInputTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setInputText(e.target.value);
//     }

//     // 입력값 엔터 핸들러
//     const handleInputTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//         if (e.key === 'Enter') {
//             const newList:TdList = {
//                 id: nextId.current,
//                 text: inputText,
//                 completed: false,
//             }
//             setTasks(tasks.concat(newList));
//             setInputText('');
//             nextId.current += 1;
//         }
//     }

//     return (
//         <>
//             { tasks.map( task => 
//                 <Item
//                     key={`${task.id}task`}
//                     id = { task.id }
//                     text = { task.text }
//                     completed = { task.completed }
//                     onClickCheckBox = { handleClickCheckBox }
//                     onClickDeleteButton = { handleClickDeleteButton }
//                 / >
//                 )}
//                 <InputText
//                     onChange = {handleInputTextChange}
//                     onKeyDown = {handleInputTextKeyDown}
//                     inputText = {inputText}
//                 />
//         </>
//     );
// }

// export default TodoList;


import React from "react";
import { useObserver } from 'mobx-react'

import useStore from "stores/useStore";
import TodoItem from "./Item";


const TodoList = () => {
    const {
        todo : { todoData },
    } = useStore();

    return useObserver(() => (
        <section>
            {todoData.map((v) => (
                <TodoItem data = {v} key={`todoData_${v.id}`} />
            ))}
        </section>
    ));
};

export default TodoList; 