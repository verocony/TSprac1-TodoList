// useStore는 컴포넌트마다 스토어를 사용하기 위해 작성.
// 스토어가 여러개일 경우 개별적으로 불러와 사용할 수도, 합쳐줄 수도 있음.

import { todo } from "./todo";

const useStore = () => ({ todo });

export default useStore;