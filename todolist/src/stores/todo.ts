// MobX에서 스토어 생성 : todo라는 객체를 선언 한 뒤 observable로 감싸주기
// 불변성을 지켜줄 필요X observable이 상태가 변화는지 관찰해 주기 때문. 
// 액션들은 스토어 안쪽에 같이 작성 가능.

import {observable} from 'mobx'

export interface TodoData {
    id : number;
    content : string;
    checked : boolean;
}

interface Todo {
    todoData : TodoData[];
    currentId : number;
    addTodo : (content : string) => void;
    removeTodo : (id: number) => void;
}


export const todo = observable<Todo>({
    todoData: [],
    currentId: 0,
  
    addTodo(content) {
      this.todoData.push({ id: this.currentId, content, checked: false });
      this.currentId++;
    },
    removeTodo(id) {
      const index = this.todoData.findIndex((v) => v.id === id);
      if (id !== -1) {
        this.todoData.splice(index, 1);
      }
    },
  });