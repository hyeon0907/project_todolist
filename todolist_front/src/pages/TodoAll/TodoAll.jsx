import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';
import PageTitle from '../../components/PageTitle/PageTitle';
import { MENUS } from '../../constants/menus';
import { useRecoilState } from 'recoil';
import { todolistAtom } from '../../atoms/todolistAtoms';
import YearGroup from '../../components/YearGroup/YearGroup';
import TodoCalendar from '../../components/TodoCalendar/TodoCalendar';
import RegisterTodoButton from '../../components/RegisterTodoButton/RegisterTodoButton';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    const [ todolistAll ] = useRecoilState(todolistAtom);
    const [ calendarData, setCalendarData ] = useState({});
    

    useEffect(() => {
        const tempcalendarData = {};
        for(let todo of todolistAll.todolist) {
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


    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <div css={s.layout}>
                    <BackButtonTop setShow={setShow} />
                    <PageTitle title={MENUS.all.title} color={MENUS.all.color} />
                    <TodoCalendar calendarData={calendarData}/>
                    <RegisterTodoButton/>
                </div>
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;