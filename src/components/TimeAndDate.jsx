import React, {useEffect, useState} from 'react';

export default function TimeAndDate(){

    const [hour, setHour] = useState('');
    const [minutes, setMinutes] = useState('');
    const [currentDay, setCurrentDay] = useState('');

    useEffect(() => {
        let now = new Date();
        setHour(now.getHours());
        setMinutes(now.getMinutes());
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        setCurrentDay(days[now.getDay()]);
    }, []);

    return(
        <div className="time-date">
            <div id="date-time">{currentDay}, {hour}:{minutes}</div>
        </div>
    )
}