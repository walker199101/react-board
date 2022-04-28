import React, { useReducer, createContext, useContext, useRef } from "react";

// 초기 data
const initialData = [
    {
        id: 1,
        title: "test-title1",
        contents: "내용1",
        createdBy: "user1",
        createdAt: "2022-04-23 13:34:24",
        recommend: 0,
        view: 15
    },
    {
        id: 2,
        title: "test-title2",
        contents: "내용2",
        createdBy: "user1",
        createdAt: "2022-04-26 13:34:24",
        recommend: 3,
        view: 12
    },
    {
        id: 3,
        title: "test-title3",
        contents: "내용3",
        createdBy: "user2",
        createdAt: "2022-04-24 13:34:24",
        recommend: 0,
        view: 25
    }
];

// reducer
function boardReducer(state, action) {
    switch (action.type) {
        case "CREATE":
            console.log("reducer: CREATE called");
            return state.concat(action.board);
        case "UPDATE":
            console.log("reducer: UPDATE called");
            return state;
        case "DELETE":
            console.log("reducer: DELETE called");
            return state;
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// context 생성
const BoardStateContext = createContext();
const BoardDispatchContext = createContext();

// Provider (data 박아 두는 용도)
// * 계층 구조로 생성하여 바깥쪽 프로바이더의 리렌더링 줄이기
export function BoardProvider({ children }) {
    const [state, dispatch] = useReducer(boardReducer, initialData);
    // const nextId = useRef(5);
  
    return (
      <BoardStateContext.Provider value={state}>
        <BoardDispatchContext.Provider value={dispatch}>
            {children}
        </BoardDispatchContext.Provider>
      </BoardStateContext.Provider>
    );
}

// data 꺼내 쓰는 함수
export function useBoardState() {
    const context = useContext(BoardStateContext);
    if (!context) {
      throw new Error("Cannot find BoardProvider");
    }
    return context;
}

export function useBoardDispatch() {
    const context = useContext(BoardDispatchContext);
    if (!context) {
      throw new Error("Cannot find BoardProvider");
    }
    return context;
}

// *context 정리
// reducer 만들기 (액션 핸들링하는 함수)
// context 생성
// Provider 생성해서 원하는 컴포넌트에 주입(injection)
// 외부에서 context 사용하게 해주는 함수 만들기 (useBoardState, useBoardDispatch)
// state 사용할 경우: 위의 함수를 원하는 코드 영역에서 호출

