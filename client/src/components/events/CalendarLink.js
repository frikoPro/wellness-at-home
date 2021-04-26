import {Dropdown} from "react-bootstrap";
import {google, ics, office365, outlook, yahoo} from "calendar-link";

const CalendarLink = (props) => {
    let link = {
        title: `Wellness at home - ${props.venue}`,
        start: props.date.date_start * 1000,
        end: props.date.date_end * 1000,
        location: `${props.address.streetname}, ${props.address.postalnr} ${props.address.city}`,
        description: `www.wellnessathome.no/Arrangementer/eventkode=${props.createdAt}`
    }

    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-item-button">
                    Legg til i kalender
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={ics(link)} target="_blank" rel="noreferrer noopener">ICS(Apple)</Dropdown.Item>
                    <Dropdown.Item href={google(link)} target="_blank" rel="noreferrer noopener">Google</Dropdown.Item>
                    <Dropdown.Item href={outlook(link)} target="_blank" rel="noreferrer noopener">Outlook</Dropdown.Item>
                    <Dropdown.Item href={office365(link)} target="_blank" rel="noreferrer noopener">Office365</Dropdown.Item>
                    <Dropdown.Item href={yahoo(link)} target="_blank" rel="noreferrer noopener">Yahoo</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
};

export default CalendarLink;
