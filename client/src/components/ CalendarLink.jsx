import {Dropdown} from "react-bootstrap";
import { google, outlook, office365, yahoo, ics } from "calendar-link";

const CalendarLink = (props) => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Legg til i kalender
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={ics(props)} target="_blank" rel="noreferrer noopener">ICS(Apple)</Dropdown.Item>
                    <Dropdown.Item href={google(props)} target="_blank" rel="noreferrer noopener">Google</Dropdown.Item>
                    <Dropdown.Item href={outlook(props)} target="_blank" rel="noreferrer noopener">Outlook</Dropdown.Item>
                    <Dropdown.Item href={office365(props)} target="_blank" rel="noreferrer noopener">Office365</Dropdown.Item>
                    <Dropdown.Item href={yahoo(props)} target="_blank" rel="noreferrer noopener">Yahoo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CalendarLink;
