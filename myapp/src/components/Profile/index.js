import React from "react";
//import { store } from "../../store";
import { PROFILE_TOGGLE_SHOW } from "../../store/actionTypes";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
    const profileState = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW,
        });
      };

    console.log(profileState);

    return (
        <>
            <div>Профиль</div>

            <input type="checkbox"  onClick={toggleShow}/>
        </>
    );
};

/*Я знаю что это не правильно, я постараюсь переделать до проверки(оно только ТИПА работает)*/