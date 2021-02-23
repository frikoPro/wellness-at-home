import {Dropdown} from "react-bootstrap";
import { google, outlook, office365, yahoo, ics } from "calendar-link";


const CalendarLink = (props) => {

console.log(props)
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <>
            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Legg til i kalender
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={ics(props)}>ICS(Apple)</Dropdown.Item>
                    <Dropdown.Item href={google(props)}>Google</Dropdown.Item>
                    <Dropdown.Item href={outlook(props)}>Outlook</Dropdown.Item>
                    <Dropdown.Item href={office365(props)}>Office365</Dropdown.Item>
                    <Dropdown.Item href={yahoo(props)}>Yahoo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CalendarLink;
