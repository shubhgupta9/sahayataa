import { FC } from "react"
import styles from "./Home.module.scss"
import { Link } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home: FC = () => {
	return (
		<div className={styles.container}>
			<h1 style={{marginTop: '80px'}}>Welcome to Sahayata</h1>
			<div style={{width: '60%', marginTop: '40px'}}>
			<Carousel autoPlay={true}>
                {/* <div>
                    <img src="https://thebetterkashmir.com/betterkashmircontent/uploads/2021/09/AICTE-logo.jpeg" alt="123" />
                    
                </div> */}
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.bdQt2kr5QSsNjPYSu011yAHaC6&pid=Api&P=0&w=388&h=152" />
                    
                </div>
                <div>
                    <img src="https://cdnbbsr.s3waas.gov.in/s3c92a10324374fac681719d63979d00fe/uploads/2021/09/2021092064.jpg" />
                    
                </div>
            </Carousel>
			</div>
			
			<h2>Securely record and access administered COVID-19 vaccinations</h2>

			<div className={styles.buttonsContainer}>
				<Link to="/search">
					<button id={styles.patient}>Proceed</button>
				</Link>
			</div>
		</div>
	)
}

export default Home
