import React, { useReducer, createContext, useContext, useRef } from "react";
import axios from 'axios';

// 초기 data
const initialData = {
    loading: true,
    data: [],
    error: null
};

// 성공했을 때의 상태 만들어주는 함수
const success = data => ({
    loading: false,
    data,
    error: null
});

// 실패했을 때의 상태 만들어주는 함수
const error = error => ({
    loading: false,
    data: [],
    error: error
});

// reducer + axios
// reducer: state를 action을 이용해 갱신한다
function boardReducer(state, action) {
    switch (action.type) {
        case "GET":
            console.log("axios reducer: GET called");
            return state;
        case "GET_SUCCESS":
            console.log("axios reducer: GET_SUCCESS called");
            return success(action.data);
        case "GET_ERROR":
            console.log("axios reducer: GET_ERROR called");
            return error(action.error);
        case "GET_LIST":
            console.log("axios reducer: GET_LIST called");
            return state;
        case "GET_LIST_SUCCESS":
            console.log("axios reducer: GET_LIST_SUCCESS called");
            return success(action.data);
        case "GET_LIST_ERROR":
            console.log("axios reducer: GET_LIST_ERROR called");
            return error(action.error);
        case "CREATE":
            console.log("axios reducer: CREATE called");
            return state;
        case "UPDATE":
            console.log("axios reducer: UPDATE called");
            return state;
        case "DELETE":
            console.log("axios reducer: DELETE called");
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

export async function getBoardList(dispatch) {
    dispatch({ type: 'GET_LIST' });
    try {
        const response = await axios.get(
            'http://localhost:5050/posts'
        );
        dispatch({ type: 'GET_LIST_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_LIST_ERROR', error: e });
    }
}

export async function getBoard(dispatch, id) {
    dispatch({ type: 'GET' });
    try {
        const response = await axios.get(
            `http://localhost:5050/posts/${id}`
        );
        dispatch({ type: 'GET_SUCCESS', data: response.data });
    } catch (e) {
        dispatch({ type: 'GET_ERROR', error: e });
    }
}

// *context 정리
// reducer 만들기 (액션 핸들링하는 함수)
// context 생성
// Provider 생성해서 원하는 컴포넌트에 주입(injection)
// 외부에서 context 사용하게 해주는 함수 만들기 (useBoardState, useBoardDispatch)
// state 사용할 경우: 위의 함수를 원하는 코드 영역에서 호출

