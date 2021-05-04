import React, {useContext} from 'react';
import {Container } from "react-bootstrap";
import {Helmet} from "react-helmet";
import {Button, Card} from "antd";
import {LoggedInContext} from "../../contexts/LoggedInContext";

const PrivacyPage = () => {
    const loggedIn = useContext(LoggedInContext);
    const mockdata = [
        {
            articleNumber: '0.0',
            articleTitle: 'Eksempel',
            articleText: 'Dette er KUN et eksempel.'
        },
        {
            articleNumber: '1',
            articleTitle: 'Personopplysninger',
            articleText: 'For å gjennomføre et kjøp på Wellnessathome.no trenger vi navn, adresse, mobilnummer og e-post. Dette er nødvendig for å kunne sende din bestilling til riktig leveringsadresse, holde deg oppdatert med ordrebevegelsene samt kontakte deg dersom det skulle være behov i henhold til dine ordre. For forskjellige formål kan vi trenge andre personopplysninger. Hvilke personopplysninger og formålet med disse er beskrevet her i personvernerklæringen.'
        },
        {
            articleNumber: '1.1',
            articleTitle: 'Personopplysninger',
            articleText: 'Du har rett til innsyn i dine personopplysninger som Wellnessathome.no har registrert i samsvar med gjeldende lovgivning. Du kan til enhver tid be om å motta disse opplysningene uten vederlag i tråd med lovgivningen. Opplysninger skal utleveres/overføres på en sikker måte. Dersom den registrerte inngir anmodningen elektronisk, og med mindre den registrerte anmoder om noe annet, skal informasjonen gis i en vanlig elektronisk form. Du kan også, når som helst, be oss slette eller rette dine personopplysninger, forutsatt at vi ikke er forpliktet til å oppbevare disse i henhold til gjeldende lovgivning eller andre forpliktelser vi har. Du har rett til å få utlevert egne personopplysninger som du har gitt til Wellnessathome.no -  dataportabilitet. Dersom det er teknisk mulig kan vi sende disse opplysningene direkte til ny virksomhet. Hvis ikke vil vi sende opplysningene til deg via e-post. Alle personopplysninger vi sender til deg i disse sammenhenger vil sendes i kryptert filformat. Du kan når som helst trekke tilbake samtykke du har gitt oss. Samtykkene finner du på min side. Du har rett til å klage til Datatilsynet dersom du opplever at dine personopplysninger ikke blir behandlet i henhold til denne erklæringen.'
        },
        {
            articleNumber: '1.2',
            articleTitle: 'Arkivering av personopplysninger',
            articleText: 'Regnskapsloven pålegger oss å lagre transaksjonsdata i 5 år. For å kunne ivareta kunders rettigheter i forbindelse med garanti og reklamasjon i henhold til forbrukerkjøpsloven, kjøpsloven og Wellnessathome.no sine salgsbetingelser, lagrer vi kjøpshistorikk i 10 år.'
        },
        {
            articleNumber: '1.3',
            articleTitle: 'Personopplysninger',
            articleText: 'For å gjennomføre et kjøp på Wellnessathome.no trenger vi navn, adresse, mobilnummer og e-post. Dette er nødvendig for å kunne sende din bestilling til riktig leveringsadresse, holde deg oppdatert med ordrebevegelsene samt kontakte deg dersom det skulle være behov i henhold til dine ordre. For forskjellige formål kan vi trenge andre personopplysninger. Hvilke personopplysninger og formålet med disse er beskrevet her i personvernerklæringen.'
        },
        {
            articleNumber: '1.4',
            articleTitle: 'Personopplysninger',
            articleText: 'Du har rett til innsyn i dine personopplysninger som Wellnessathome.no har registrert i samsvar med gjeldende lovgivning. Du kan til enhver tid be om å motta disse opplysningene uten vederlag i tråd med lovgivningen. Opplysninger skal utleveres/overføres på en sikker måte. Dersom den registrerte inngir anmodningen elektronisk, og med mindre den registrerte anmoder om noe annet, skal informasjonen gis i en vanlig elektronisk form. Du kan også, når som helst, be oss slette eller rette dine personopplysninger, forutsatt at vi ikke er forpliktet til å oppbevare disse i henhold til gjeldende lovgivning eller andre forpliktelser vi har. Du har rett til å få utlevert egne personopplysninger som du har gitt til Wellnessathome.no -  dataportabilitet. Dersom det er teknisk mulig kan vi sende disse opplysningene direkte til ny virksomhet. Hvis ikke vil vi sende opplysningene til deg via e-post. Alle personopplysninger vi sender til deg i disse sammenhenger vil sendes i kryptert filformat. Du kan når som helst trekke tilbake samtykke du har gitt oss. Samtykkene finner du på min side. Du har rett til å klage til Datatilsynet dersom du opplever at dine personopplysninger ikke blir behandlet i henhold til denne erklæringen.'
        },
        {
            articleNumber: '1.5',
            articleTitle: 'Arkivering av personopplysninger',
            articleText: 'Regnskapsloven pålegger oss å lagre transaksjonsdata i 5 år. For å kunne ivareta kunders rettigheter i forbindelse med garanti og reklamasjon i henhold til forbrukerkjøpsloven, kjøpsloven og Wellnessathome.no sine salgsbetingelser, lagrer vi kjøpshistorikk i 10 år.'
        },

    ]

    return (
        <>
            <Helmet>
                <title>Personvern</title>
            </Helmet>
            <Container className={`bg-white shadow`}>
            {mockdata.map((post) => (
                <Card title={`${post.articleNumber}. ${post.articleTitle}`}
                      className={`mb-3`}
                      bordered={false}
                      loading={false}
                      extra={loggedIn ? <><Button>Rediger</Button> <Button danger>Slett</Button></> : null}>
                    <p>{post.articleText}</p>
                </Card>
            ))}
            </Container>
        </>
    );
};

export default PrivacyPage;

