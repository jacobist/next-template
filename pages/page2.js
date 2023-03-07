import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// import Slideshow from '../components/slideshow/slideshow'
import generic from '../styles/generic.module.css'
import filler from '../public/imageFiller.png'
import fillerAlt from '../public/imageFillerVertical.png'
import { FaPhotoVideo } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { IconContext } from 'react-icons'

export default function Page2() {
    return (
      <>
        <Head>
          <title>Page 2</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Slideshow
          album={[filler, fillerAlt, filler, fillerAlt, filler, fillerAlt]}
        /> */}
        <main className={generic.main}>
          <section className={generic.section}>
            <div className={generic.segment}>
              <Image className={generic.imageL} src={filler} alt="filler" />
            </div>
            <div className={generic.segment}>
              <h2 className={generic.textXL}>
                Example H2 Heading with extra text.
              </h2>
              <p className={generic.textM}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                sodales massa, eu viverra odio. Sed nec viverra odio.
              </p>
              <Link className={generic.cta} href="/action">
                Call to Action
              </Link>
            </div>
          </section>
          <section >
            <p className={generic.banner}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              sodales massa, eu viverra odio. Sed nec viverra odio.
            </p>
          </section>
          <section className={generic.deck}>
            <h2 className={generic.textXL}>Example H2.</h2>
            <div className={generic.cards}>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <MdWeb />
                </IconContext.Provider>
                <h3>Website</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                  sodales massa, eu viverra odio. Sed nec viverra odio.
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <GiNewspaper />
                </IconContext.Provider>
                <h3>Marketing</h3>
                <p>
                  Last part! we pick your favorite images and pick the products
                  for your home. (Disclaimer: You will love them all!)
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <SiMaterialdesignicons />
                </IconContext.Provider>
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                  sodales massa, eu viverra odio. Sed nec viverra odio.
                </p>
              </div>
              <div className={generic.card}>
                <IconContext.Provider value={{ className: `${generic.icon}` }}>
                  <FaPhotoVideo />
                </IconContext.Provider>
                <h3>Multimedia</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                  sodales massa, eu viverra odio. Sed nec viverra odio.
                </p>
              </div>
            </div>
            <Link className={generic.cta} href="/action">
              Call to Action
            </Link>
          </section>
          <section className={generic.section}>
            <div className={generic.gallery}>
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
              <Image className={generic.frame} src={fillerAlt} alt="" />
            </div>
          </section>
          <section className={generic.sectionContrast}>
            <div className={generic.segment}>
              <h2 className={generic.text2XL}>Example H2</h2>
              <p className={generic.textM}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                sodales massa, eu viverra odio. Sed nec viverra odio.
              </p>
              <Link className={generic.cta} href="/action">
                Call to Action
              </Link>
            </div>
            <div className={generic.segment}>
              <div className={generic.segment}>
                <Image className={generic.imageM} src={filler} alt="filler" />
              </div>
            </div>
          </section>
          <section className={generic.section}>
            <div className={generic.segment}>
              <p className={generic.textM}>Example sup-heading</p>
              <h2 className={generic.textLg}>
                Example H2 heading with extra text.
              </h2>
              <p className={generic.textsm}>example sub-heading</p>
              <p className={generic.textsm}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                sodales massa, eu viverra odio. Sed nec viverra odio.
              </p>
              <Link className={generic.cta} href="/action">
                Call to action
              </Link>
            </div>
            <div className={generic.segment}>
              <Image className={generic.imageM} src={filler} alt="filler" />
            </div>
          </section>
        </main>
      </>
    );
}