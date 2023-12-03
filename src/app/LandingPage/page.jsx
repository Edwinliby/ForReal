import './landingPage.css'
import me from '../../assets/images/me.png'
import Image from 'next/image'

export default function page() {
    return (
        <div className='landingPage'>
            <div className="me">
                <Image
                    src={me}
                    alt="Picture of the author"
                    width={2000}
                    height={2000}
                />
            </div>
            <div className='heroContent'>
                <h2>
                    Design-focused, <br />
                    agile-run & <br />
                    solutions-driven.
                </h2>
                <div className='heroBottom'>
                    <p className='EST'>EST. 2023</p>
                    <p className='sustain'>Sustainable <br /> Design in brand <br /> and digital</p>
                    <p className='para'>
                        Design that knows no boundaries, creations that are useful and produce delight
                        that offer a tes to time that are eye-catching but honest, bold seamless.
                        Simple yet limitless never has there been a more important time to think critically and openly about design.
                    </p>
                </div>
            </div>
        </div>
    )
}
