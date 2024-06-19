import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks } from '../lib/store';
import Tasklist from './Tasklist';

export default function InboxScreen() {
    const dispatch = useDispatch();
    //retrieving error field from updated store
    const { error } = useSelector((state) => state.taskbox);
    //triggers data fetching when component is mounted
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <p className="title-message">Oh no!</p>
                    <p className="subtitle-message">Something went wrong</p>
                </div>
            </div>
        );
    };
    
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">Taskbox</h1>
            </nav>
            <Tasklist />
        </div>
    );
}