import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ScrollDiv from '../../components/ScrollDiv';
import Slideshow from '../../components/Slideshow';
import sarekImg1 from '../../images/sarekimg1.png';
import sarekimg2 from '../../images/sarekimg2.png';
import styles from './ProductPage.module.css';

const ProductPage = () => {
	let { id } = useParams();

	const slideContent = [
		{
			image: sarekImg1,
			textHead: '',
			textP: '',
		},
		{ image: sarekimg2, textHead: '', textP: '' },
		{ image: sarekimg2, textHead: '', textP: '' },
		{ image: sarekimg2, textHead: '', textP: '' },
		{ image: sarekimg2, textHead: '', textP: '' },
		{ image: sarekimg2, textHead: '', textP: '' },
		{ image: sarekimg2, textHead: '', textP: '' },
	];

	const [activeSlideImg, setActiveSlideImg] = useState(0);

	return (
		<Container
			className="shadow"
			style={{ backgroundColor: 'white', marginTop: '5%' }}>
			<Row>
				<Col xl={12} className="mx-auto">
					<Slideshow
						classId="productPage"
						interval={null}
						indicators={false}
						slideContent={slideContent}
						styling={styles}
						activeIndex={activeSlideImg}
						setIndex={(index) => setActiveSlideImg(index)}
					/>
				</Col>
			</Row>
			<ScrollDiv
				content={slideContent}
				returnFunction={(index) => setActiveSlideImg(index)}
			/>
			<Row className="justify-content-center align-items-center p-5">
				<Col className={`text-center ${styles.marginBottomLine}`}>
					<h1>{id.toUpperCase()}</h1>
				</Col>
			</Row>
			<Row className="justify-content-between">
				<Col xl={6} className="mx-auto">
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem.
					</p>
				</Col>
				<Col xl={5} className="align-self-center">
					<h1 className="mb-3">56 059,-</h1>
					<svg
						className="mb-3"
						width="253"
						height="40"
						viewBox="0 0 253 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M19.5341 1.61804L23.4443 13.6523L23.5565 13.9977H23.9198H36.5733L26.3364 21.4353L26.0425 21.6488L26.1548 21.9943L30.0649 34.0285L19.828 26.591L19.5341 26.3775L19.2402 26.591L9.00331 34.0285L12.9135 21.9943L13.0257 21.6488L12.7318 21.4353L2.49491 13.9977H15.1484H15.5117L15.624 13.6523L19.5341 1.61804Z"
							fill="#FFC121"
							stroke="black"
						/>
						<path
							d="M58.6025 1.61804L62.5126 13.6523L62.6249 13.9977H62.9882H75.6417L65.4048 21.4353L65.1109 21.6488L65.2231 21.9943L69.1333 34.0285L58.8964 26.591L58.6025 26.3775L58.3086 26.591L48.0717 34.0285L51.9818 21.9943L52.0941 21.6488L51.8002 21.4353L41.5633 13.9977H54.2168H54.5801L54.6923 13.6523L58.6025 1.61804Z"
							fill="#FFC121"
							stroke="black"
						/>
						<path
							d="M97.6708 1.61804L101.581 13.6523L101.693 13.9977H102.057H114.71L104.473 21.4353L104.179 21.6488L104.291 21.9943L108.202 34.0285L97.9647 26.591L97.6708 26.3775L97.3769 26.591L87.14 34.0285L91.0502 21.9943L91.1624 21.6488L90.8685 21.4353L80.6316 13.9977H93.2852H93.6484L93.7607 13.6523L97.6708 1.61804Z"
							fill="#FFC121"
							stroke="black"
						/>
						<path
							d="M136.739 1.61804L140.649 13.6523L140.762 13.9977H141.125H153.778L143.541 21.4353L143.248 21.6488L143.36 21.9943L147.27 34.0285L137.033 26.591L136.739 26.3775L136.445 26.591L126.208 34.0285L130.119 21.9943L130.231 21.6488L129.937 21.4353L119.7 13.9977H132.354H132.717L132.829 13.6523L136.739 1.61804Z"
							fill="#FFC121"
							stroke="black"
						/>
						<path
							d="M175.808 1.61804L179.718 13.6523L179.83 13.9977H180.193H192.847L182.61 21.4353L182.316 21.6488L182.428 21.9943L186.338 34.0285L176.101 26.591L175.808 26.3775L175.514 26.591L165.277 34.0285L169.187 21.9943L169.299 21.6488L169.005 21.4353L158.768 13.9977H171.422H171.785L171.897 13.6523L175.808 1.61804Z"
							fill="#C4C4C4"
							stroke="black"
						/>
						<path
							d="M205.57 23.3379H207.938V25.1074H205.57V29.0684H203.391V25.1074H195.621V23.8301L203.262 12.0059H205.57V23.3379ZM198.082 23.3379H203.391V14.9707L203.133 15.4395L198.082 23.3379ZM210.551 30.5332H208.688L215.812 12.0059H217.664L210.551 30.5332ZM220.781 20.5137L221.648 12.0059H230.391V14.0098H223.488L222.973 18.6621C223.809 18.1699 224.758 17.9238 225.82 17.9238C227.375 17.9238 228.609 18.4395 229.523 19.4707C230.438 20.4941 230.895 21.8809 230.895 23.6309C230.895 25.3887 230.418 26.7754 229.465 27.791C228.52 28.7988 227.195 29.3027 225.492 29.3027C223.984 29.3027 222.754 28.8848 221.801 28.0488C220.848 27.2129 220.305 26.0566 220.172 24.5801H222.223C222.355 25.5566 222.703 26.2949 223.266 26.7949C223.828 27.2871 224.57 27.5332 225.492 27.5332C226.5 27.5332 227.289 27.1895 227.859 26.502C228.438 25.8145 228.727 24.8652 228.727 23.6543C228.727 22.5137 228.414 21.5996 227.789 20.9121C227.172 20.2168 226.348 19.8691 225.316 19.8691C224.371 19.8691 223.629 20.0762 223.09 20.4902L222.516 20.959L220.781 20.5137Z"
							fill="black"
						/>
					</svg>
					<p className="mb-3 text-secondary">
						<u>Se anmeldelser (2)</u>
					</p>
					<Button className="btn-warning">Interessert? Ta kontakt</Button>
					<Button className="ml-3">Sammenlign</Button>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center mt-5 p-5">
				<Col className={`text-left ${styles.marginBottomLine}`}>
					<h1>Tekniske spesifikasjoner</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<ul style={{ listStyleType: 'none' }}>
						<li>Størrelse: 200 x 200 x 95cm</li>

						<li>Antall plasser: 5, hvorav 2 liggeplasser</li>

						<li>Vannkapasitet: 1400 liter</li>

						<li>Vekt: 300 kg</li>

						<li>Elektriske krav: 230 V eller 400 V / 50 Hz</li>

						<li>Kontrollsystem: Gecko In.Ye-3 + K500 fargedisplay</li>
						<li>Varmekolbe: Gecko 3 kW</li>
						<li>Pumper: 1 stk Jet pumpe, 1 stk Sirkulasjonspumpe</li>
						<li>Massasjedyser: 31 stk Rustfrie dyser</li>
					</ul>
				</Col>
				<Col>
					<ul style={{ listStyleType: 'none' }}>
						<li>Størrelse: 200 x 200 x 95cm</li>

						<li>Antall plasser: 5, hvorav 2 liggeplasser</li>

						<li>Vannkapasitet: 1400 liter</li>

						<li>Vekt: 300 kg</li>

						<li>Elektriske krav: 230 V eller 400 V / 50 Hz</li>

						<li>Kontrollsystem: Gecko In.Ye-3 + K500 fargedisplay</li>
						<li>Varmekolbe: Gecko 3 kW</li>
						<li>Pumper: 1 stk Jet pumpe, 1 stk Sirkulasjonspumpe</li>
						<li>Massasjedyser: 31 stk Rustfrie dyser</li>
					</ul>
				</Col>
			</Row>
			<Row className="justify-content-center align-items-center mt-5 p-5">
				<Col className={`text-left ${styles.marginBottomLine}`}>
					<h1>Relatert tilbehør</h1>
				</Col>
			</Row>

			<div
				style={{
					height: '200px',
					width: '100%',
				}}>
				<div
					style={{ height: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
					{Array(10)
						.fill(2)
						.map(() => (
							<div
								style={{
									width: '175px',
									height: '70%',
									border: '2px solid rgb(221, 220, 220)',
									display: 'inline-block',
								}}
								className="m-3"></div>
						))}
				</div>
			</div>

			<Row className="justify-content-center align-items-center mt-5 p-5">
				<Col className={`text-left ${styles.marginBottomLine}`}>
					<h1>Anmeldelser</h1>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xl={10}>
					<Card className="mb-5">
						<Card.Body>
							<Card.Title style={{ borderBottom: '2px solid black' }}>
								<svg
									className="mb-3"
									width="253"
									height="40"
									viewBox="0 0 253 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19.5341 1.61804L23.4443 13.6523L23.5565 13.9977H23.9198H36.5733L26.3364 21.4353L26.0425 21.6488L26.1548 21.9943L30.0649 34.0285L19.828 26.591L19.5341 26.3775L19.2402 26.591L9.00331 34.0285L12.9135 21.9943L13.0257 21.6488L12.7318 21.4353L2.49491 13.9977H15.1484H15.5117L15.624 13.6523L19.5341 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M58.6025 1.61804L62.5126 13.6523L62.6249 13.9977H62.9882H75.6417L65.4048 21.4353L65.1109 21.6488L65.2231 21.9943L69.1333 34.0285L58.8964 26.591L58.6025 26.3775L58.3086 26.591L48.0717 34.0285L51.9818 21.9943L52.0941 21.6488L51.8002 21.4353L41.5633 13.9977H54.2168H54.5801L54.6923 13.6523L58.6025 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M97.6708 1.61804L101.581 13.6523L101.693 13.9977H102.057H114.71L104.473 21.4353L104.179 21.6488L104.291 21.9943L108.202 34.0285L97.9647 26.591L97.6708 26.3775L97.3769 26.591L87.14 34.0285L91.0502 21.9943L91.1624 21.6488L90.8685 21.4353L80.6316 13.9977H93.2852H93.6484L93.7607 13.6523L97.6708 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M136.739 1.61804L140.649 13.6523L140.762 13.9977H141.125H153.778L143.541 21.4353L143.248 21.6488L143.36 21.9943L147.27 34.0285L137.033 26.591L136.739 26.3775L136.445 26.591L126.208 34.0285L130.119 21.9943L130.231 21.6488L129.937 21.4353L119.7 13.9977H132.354H132.717L132.829 13.6523L136.739 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M175.808 1.61804L179.718 13.6523L179.83 13.9977H180.193H192.847L182.61 21.4353L182.316 21.6488L182.428 21.9943L186.338 34.0285L176.101 26.591L175.808 26.3775L175.514 26.591L165.277 34.0285L169.187 21.9943L169.299 21.6488L169.005 21.4353L158.768 13.9977H171.422H171.785L171.897 13.6523L175.808 1.61804Z"
										fill="#C4C4C4"
										stroke="black"
									/>
									<path
										d="M205.57 23.3379H207.938V25.1074H205.57V29.0684H203.391V25.1074H195.621V23.8301L203.262 12.0059H205.57V23.3379ZM198.082 23.3379H203.391V14.9707L203.133 15.4395L198.082 23.3379ZM210.551 30.5332H208.688L215.812 12.0059H217.664L210.551 30.5332ZM220.781 20.5137L221.648 12.0059H230.391V14.0098H223.488L222.973 18.6621C223.809 18.1699 224.758 17.9238 225.82 17.9238C227.375 17.9238 228.609 18.4395 229.523 19.4707C230.438 20.4941 230.895 21.8809 230.895 23.6309C230.895 25.3887 230.418 26.7754 229.465 27.791C228.52 28.7988 227.195 29.3027 225.492 29.3027C223.984 29.3027 222.754 28.8848 221.801 28.0488C220.848 27.2129 220.305 26.0566 220.172 24.5801H222.223C222.355 25.5566 222.703 26.2949 223.266 26.7949C223.828 27.2871 224.57 27.5332 225.492 27.5332C226.5 27.5332 227.289 27.1895 227.859 26.502C228.438 25.8145 228.727 24.8652 228.727 23.6543C228.727 22.5137 228.414 21.5996 227.789 20.9121C227.172 20.2168 226.348 19.8691 225.316 19.8691C224.371 19.8691 223.629 20.0762 223.09 20.4902L222.516 20.959L220.781 20.5137Z"
										fill="black"
									/>
								</svg>
								Meget fornøyd, anbefales!
							</Card.Title>
							<p>Av: Per Kristian Hansen 02.01.20</p>
							<p>
								Commodo dolor irure ipsum duis in ea nostrud. Dolor incididunt
								fugiat veniam ullamco eu ad dolore. Ullamco ea consequat
								adipisicing fugiat. Consequat non consequat est Lorem laboris
								fugiat est culpa id consectetur. Incididunt amet proident magna
								excepteur est consequat ipsum in ad quis officia minim.
							</p>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={10}>
					<Card className="mb-5">
						<Card.Body>
							<Card.Title style={{ borderBottom: '2px solid black' }}>
								<svg
									className="mb-3"
									width="253"
									height="40"
									viewBox="0 0 253 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M19.5341 1.61804L23.4443 13.6523L23.5565 13.9977H23.9198H36.5733L26.3364 21.4353L26.0425 21.6488L26.1548 21.9943L30.0649 34.0285L19.828 26.591L19.5341 26.3775L19.2402 26.591L9.00331 34.0285L12.9135 21.9943L13.0257 21.6488L12.7318 21.4353L2.49491 13.9977H15.1484H15.5117L15.624 13.6523L19.5341 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M58.6025 1.61804L62.5126 13.6523L62.6249 13.9977H62.9882H75.6417L65.4048 21.4353L65.1109 21.6488L65.2231 21.9943L69.1333 34.0285L58.8964 26.591L58.6025 26.3775L58.3086 26.591L48.0717 34.0285L51.9818 21.9943L52.0941 21.6488L51.8002 21.4353L41.5633 13.9977H54.2168H54.5801L54.6923 13.6523L58.6025 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M97.6708 1.61804L101.581 13.6523L101.693 13.9977H102.057H114.71L104.473 21.4353L104.179 21.6488L104.291 21.9943L108.202 34.0285L97.9647 26.591L97.6708 26.3775L97.3769 26.591L87.14 34.0285L91.0502 21.9943L91.1624 21.6488L90.8685 21.4353L80.6316 13.9977H93.2852H93.6484L93.7607 13.6523L97.6708 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M136.739 1.61804L140.649 13.6523L140.762 13.9977H141.125H153.778L143.541 21.4353L143.248 21.6488L143.36 21.9943L147.27 34.0285L137.033 26.591L136.739 26.3775L136.445 26.591L126.208 34.0285L130.119 21.9943L130.231 21.6488L129.937 21.4353L119.7 13.9977H132.354H132.717L132.829 13.6523L136.739 1.61804Z"
										fill="#FFC121"
										stroke="black"
									/>
									<path
										d="M175.808 1.61804L179.718 13.6523L179.83 13.9977H180.193H192.847L182.61 21.4353L182.316 21.6488L182.428 21.9943L186.338 34.0285L176.101 26.591L175.808 26.3775L175.514 26.591L165.277 34.0285L169.187 21.9943L169.299 21.6488L169.005 21.4353L158.768 13.9977H171.422H171.785L171.897 13.6523L175.808 1.61804Z"
										fill="#C4C4C4"
										stroke="black"
									/>
									<path
										d="M205.57 23.3379H207.938V25.1074H205.57V29.0684H203.391V25.1074H195.621V23.8301L203.262 12.0059H205.57V23.3379ZM198.082 23.3379H203.391V14.9707L203.133 15.4395L198.082 23.3379ZM210.551 30.5332H208.688L215.812 12.0059H217.664L210.551 30.5332ZM220.781 20.5137L221.648 12.0059H230.391V14.0098H223.488L222.973 18.6621C223.809 18.1699 224.758 17.9238 225.82 17.9238C227.375 17.9238 228.609 18.4395 229.523 19.4707C230.438 20.4941 230.895 21.8809 230.895 23.6309C230.895 25.3887 230.418 26.7754 229.465 27.791C228.52 28.7988 227.195 29.3027 225.492 29.3027C223.984 29.3027 222.754 28.8848 221.801 28.0488C220.848 27.2129 220.305 26.0566 220.172 24.5801H222.223C222.355 25.5566 222.703 26.2949 223.266 26.7949C223.828 27.2871 224.57 27.5332 225.492 27.5332C226.5 27.5332 227.289 27.1895 227.859 26.502C228.438 25.8145 228.727 24.8652 228.727 23.6543C228.727 22.5137 228.414 21.5996 227.789 20.9121C227.172 20.2168 226.348 19.8691 225.316 19.8691C224.371 19.8691 223.629 20.0762 223.09 20.4902L222.516 20.959L220.781 20.5137Z"
										fill="black"
									/>
								</svg>
								Meget fornøyd, anbefales!
							</Card.Title>
							<p>Av: Anonym 02.05.20</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum...
							</p>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default ProductPage;
