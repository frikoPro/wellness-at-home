import React, {useState} from 'react';
import {Button, Input} from 'antd';

const EventsPanelWeekday = () => {
    const [events, setEvents] = useState([]);

    return (
        <>
            <Button onClick={() => setEvents(
                [...events, {"first_name": 'Ari'}]
            )}>Add</Button>
            {events.map((value, key) =>
                <>
                <Input placeholder="input with clear icon" allowClear/>
                <Button>Remove</Button>
                </>
            )
            }
        </>
    );
};

export default EventsPanelWeekday;