import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticales, selectArticalesError, selectArticalesLoading } from "../../store/articles/selectors";

export const News = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectArticalesLoading);
    const error = useSelector(selectArticalesError);
    const articales = useSelector(selectArticales);

    const requestArticles = useCallback(() =>{
        dispatch(getArticles());
    }, []);

    useEffect(() => {
        requestArticles();
    }, []);

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return (
            <>
                <h3>Reqwest error</h3>
                <button onClick={requestArticles}>Try again</button>
            </>
        )
    }

    if (!articales.length){
        return <h3>No setArticales</h3>;
    }
    return (<ul>
        {articales.map((a) => (
            <li key={a.id}>{a.title}</li>
        ))}
    </ul>)
};