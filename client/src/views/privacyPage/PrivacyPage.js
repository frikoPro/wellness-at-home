import React, {useContext} from 'react';
import {Container} from "react-bootstrap";
import {Helmet} from "react-helmet";
import {Button, Card} from "antd";
import {LoggedInContext} from "../../contexts/LoggedInContext";

const PrivacyPage = () => {
    const loggedIn = useContext(LoggedInContext);
    const mockdata = [
        {
            meta:
                {
                updatedAt: '2021-05-05T09:27:31.993Z'
                },
            posts: [
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
                    articleNumber: '2',
                    articleTitle: 'Utlevering av varer',
                    articleText: 'Vi samarbeider med Postnord, Posten og PorterBuddy for transport av varer. Vi utleverer personopplysninger som er nødvendig for at de skal kunne levere varene til deg. Informasjonen som deles med transportørene er navn, gateadresse, e-postadresse, telefonnummer og ønsket utleveringssted. Opplysningene slettes innen 36 måneder.'
                },
                {
                    articleNumber: '3',
                    articleTitle: 'Betalingsløsninger',
                    articleText: 'Av sikkerhetshensyn oppbevarer vi historikk som inneholder IP-adressen vi mottar ordre fra.  Betalingsopplysninger hos Komplett er: IP-adresse, navn, adresse, e-post, fødselsdato og mobiltelefonnummer. Alle systemer som behandler personopplysninger knyttet til betaling av ordre er strengt begrenset til ansatte som utfører nødvendige oppgaver knyttet til ordren.'
                },
                {
                    articleNumber: '3.1',
                    articleTitle: 'Kortbetalinger',
                    articleText: 'Av sikkerhetshensyn oppbevarer vi historikk som inneholder IP-adressen vi mottar ordre fra.  Betalingsopplysninger hos Komplett er: IP-adresse, navn, adresse, e-post, fødselsdato og mobiltelefonnummer. Alle systemer som behandler personopplysninger knyttet til betaling av ordre er strengt begrenset til ansatte som utfører nødvendige oppgaver knyttet til ordren.'
                },
                {
                    articleNumber: '3',
                    articleTitle: 'Betalingsløsninger',
                    articleText: 'Kortnummer oppbevares ikke utover det som er nødvendig for å sikre effektiv håndtering av eventuelle problemer med belastning, oppheving av reservasjon og kreditering. Det er ikke mulig for Komplett.no å se hele ditt kortnummer i noen av våre systemer etter gjennomført kjøp. Skulle det oppstå problemer med en kortbetaling kan betalingsansvarlige hos Komplett.no finne de 6 første og de 4 siste sifrene i ditt kortnummer (IIN/BIN nummer) for å identifisere hvilken bank som har utstedt kortet slik at vi kan bistå i å løse problemet. Velger du kort som betalingsmetode vil betalingsopplysninger og kortopplysninger bli delt med vår betalingsleverandør for kort: Worldline e-payment services og vår kortinnløser Bambora. Betalings- og kortopplysninger blir kun brukt til å utføre en betaling. For å gjøre det enda enklere når du handler, kan du i kassa velge å lagre kortinformasjonen din sikkert. Vår Betalingspartner, Worldline e-payment services, vil da lagre kortet i sine sikre systemer slik at du kan kjøpe gjennom dette. Vi lagrer ikke kortinformasjonen din utover å referere til det med en identifikator. Senere kjøp på det lagrede kortet er enkle å utføre, det er derfor viktig at du logger deg ut av kundekontoen din når du har avsluttet handelen, evt. sikrer at uvedkommende ikke har tilgang til enheten du surfer på. Du er selv ansvarlig for å ikke dele ditt brukernavn og passord med andre. Informasjonen du oppgir ved nettbetaling vil kun være knyttet til din kundekonto. Informasjonen er lagret i henhold til gjeldende lover. Hensikten er at du skal slippe å oppgi kortinformasjonen hver gang du foretar et kjøp hos oss. Du kan enkelt legge til nye kredittkort og slette lagrede kort i kassen. For å utføre betalingen videreformidler vi kortinformasjon til vår betalingsleverandør Worldline e-payment services. De oppbevarer informasjonen på en sikker og forsvarlig måte og er sertifisert etter kortselskapenes strengeste regelverk, PCI Level 1.'
                },
                {
                    articleNumber: '3',
                    articleTitle: 'Betalingsløsninger',
                    articleText: 'Av sikkerhetshensyn oppbevarer vi historikk som inneholder IP-adressen vi mottar ordre fra.  Betalingsopplysninger hos Komplett er: IP-adresse, navn, adresse, e-post, fødselsdato og mobiltelefonnummer. Alle systemer som behandler personopplysninger knyttet til betaling av ordre er strengt begrenset til ansatte som utfører nødvendige oppgaver knyttet til ordren.'
                },
                {
                    articleNumber: '3.1',
                    articleTitle: 'Kortbetalinger',
                    articleText: 'Av sikkerhetshensyn oppbevarer vi historikk som inneholder IP-adressen vi mottar ordre fra.  Betalingsopplysninger hos Komplett er: IP-adresse, navn, adresse, e-post, fødselsdato og mobiltelefonnummer. Alle systemer som behandler personopplysninger knyttet til betaling av ordre er strengt begrenset til ansatte som utfører nødvendige oppgaver knyttet til ordren.'
                },
                {
                    articleNumber: '3',
                    articleTitle: 'Betalingsløsninger',
                    articleText: 'Kortnummer oppbevares ikke utover det som er nødvendig for å sikre effektiv håndtering av eventuelle problemer med belastning, oppheving av reservasjon og kreditering. Det er ikke mulig for Komplett.no å se hele ditt kortnummer i noen av våre systemer etter gjennomført kjøp. Skulle det oppstå problemer med en kortbetaling kan betalingsansvarlige hos Komplett.no finne de 6 første og de 4 siste sifrene i ditt kortnummer (IIN/BIN nummer) for å identifisere hvilken bank som har utstedt kortet slik at vi kan bistå i å løse problemet. Velger du kort som betalingsmetode vil betalingsopplysninger og kortopplysninger bli delt med vår betalingsleverandør for kort: Worldline e-payment services og vår kortinnløser Bambora. Betalings- og kortopplysninger blir kun brukt til å utføre en betaling. For å gjøre det enda enklere når du handler, kan du i kassa velge å lagre kortinformasjonen din sikkert. Vår Betalingspartner, Worldline e-payment services, vil da lagre kortet i sine sikre systemer slik at du kan kjøpe gjennom dette. Vi lagrer ikke kortinformasjonen din utover å referere til det med en identifikator. Senere kjøp på det lagrede kortet er enkle å utføre, det er derfor viktig at du logger deg ut av kundekontoen din når du har avsluttet handelen, evt. sikrer at uvedkommende ikke har tilgang til enheten du surfer på. Du er selv ansvarlig for å ikke dele ditt brukernavn og passord med andre. Informasjonen du oppgir ved nettbetaling vil kun være knyttet til din kundekonto. Informasjonen er lagret i henhold til gjeldende lover. Hensikten er at du skal slippe å oppgi kortinformasjonen hver gang du foretar et kjøp hos oss. Du kan enkelt legge til nye kredittkort og slette lagrede kort i kassen. For å utføre betalingen videreformidler vi kortinformasjon til vår betalingsleverandør Worldline e-payment services. De oppbevarer informasjonen på en sikker og forsvarlig måte og er sertifisert etter kortselskapenes strengeste regelverk, PCI Level 1.'
                },
            ]
        }
    ]
console.log(mockdata)
    return (
        <>
            <Helmet>
                <title>Personvern</title>
            </Helmet>
            <Container className={`bg-white shadow`}>
            {mockdata[0].posts.map((post) => (
                <Card title={`${post.articleNumber}. ${post.articleTitle}`}
                      className={`mb-3`}
                      bordered={false}
                      loading={false}
                      extra={loggedIn ? <><Button>Rediger</Button> <Button danger>Slett</Button></> : null}>
                    <p>{post.articleText}</p>
                </Card>
            ))}
                <p>Sist endret: {mockdata[0].meta.updatedAt.slice(0,10)}</p>
            </Container>
        </>
    );
};

export default PrivacyPage;

