import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { refreshTodolistAtom, todolistAtom } from '../../atoms/todolistAtoms';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';
import { modifyTodoAtom, selectedCalendarTodoAtom } from '../../atoms/calendarAtoms';
import ConfirmButtonTop from '../../components/ConfirmButtonTop/ConfirmButtonTop';
import SubPageContainer from '../../components/SubPageContainer/SubPageContainer';
import { updatetodoApi } from '../../apis/todoApis/updateTodoApi';

function TodoImportant(props) {
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ selectedTodo, setSelectedTodo ] = useRecoilState(selectedCalendarTodoAtom);
    const [ modifyTodo, setModifyTodo ] = useRecoilState(modifyTodoAtom);
    const setRefresh = useSetRecoilState(refreshTodolistAtom);
    
    const [ calendarData, setCalendarData ] = useState({});
    const [ isShow, setShow ] = useState(true);
    const [ submitButtonDisabled, setSubmitButtonDisabled ] = useState(true);

    useEffect(() => {
        // modifyTodo에 todo가 없는 경우 : 맨처음은 빈 객체를 넣어서 todo가 없음
        let preTodo = {
            ...(todolistAll.todolist.filter(todo =>
            todo.todoId === modifyTodo?.todoId)[0]),
        }
        preTodo = {
            ...preTodo, 
            todoDateTime: preTodo?.todoDateTime?.replaceAll(" ", "T")
        }
        console.log(preTodo);
        console.log(modifyTodo);
        const disabled = JSON.stringify(modifyTodo) === JSON.stringify(preTodo) || !modifyTodo?.title?.trim();
        setSubmitButtonDisabled(disabled);
    }, [modifyTodo]);

    useEffect(() => {
        const tempcalendarData = {};
        for(let todo of todolistAll.todolist) {
            if(todo.important !== 1){
                continue;
            }

            const dateTime = todo.todoDateTime;
            const year = dateTime.slice(0, 4);
            const month = dateTime.slice(5, 7);
            const date = dateTime.slice(0, 10);

            

            if(!tempcalendarData[year]) {
                tempcalendarData[year] = {};
            }
            if(!tempcalendarData[year][month]) {
                tempcalendarData[year][month] = {};
            }

            if(!tempcalendarData[year][month][date]) {
                tempcalendarData[year][month][date] = [];
            }
            tempcalendarData[year][month][date].push(todo);
        }
        setCalendarData(tempcalendarData);

    }, [todolistAll]);

    const modifyCancel = () => {
        setSelectedTodo(0);
    }

    const modifySubmit = async () => {
        await updatetodoApi(modifyTodo.todoId, modifyTodo);
        setRefresh(true);
        setSelectedTodo(0);
    }


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <SubPageContainer>
                <div css={s.layout}>
                    {
                        selectedTodo === 0 
                        ? <BackButtonTop setShow={setShow} />
                        : <ConfirmButtonTop onCancel={modifyCancel} onSubmit={modifySubmit} disabled={submitButtonDisabled}/>
                    }
                    <PageTitle title={MENUS.important.title} color={MENUS.important.color} />
                    <TodoCalendar calendarData={calendarData}/>
                    <RegisterTodoButton/>
                </div>
            </SubPageContainer>
        </PageAnimationLayout>
    );
}

export default TodoImportant;