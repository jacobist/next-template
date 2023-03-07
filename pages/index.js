import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '../components/form/contact'
import style from '../styles/Home.module.css'
import generic from '../styles/generic.module.css'
import { FaPhotoVideo } from "react-icons/fa"
import { MdWeb } from "react-icons/md"
import { GiNewspaper } from 'react-icons/gi'
import { SiMaterialdesignicons } from 'react-icons/si'
import { IconContext } from 'react-icons'
import filler from "../public/imageFiller.png"


export default function Home() {
  return (
    <>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="template for Next.js projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={generic.main}>
        <section className={generic.section}>
          <div className={generic.segment}>
            <p className={generic.textsm}>Next Template</p>
            <h2 className={generic.textXL}>Example H2 with extra texts.</h2>
            <p className={generic.textM}>And small subheading!</p>
            <Link className={generic.cta} href="/action">
              Call to Action
            </Link>
          </div>
          <div className={generic.segment}>
            <Image className={generic.imageL} src={filler} alt="filler" />
          </div>
        </section>
        <section className={generic.sectionInvert}>
          <div className={generic.segment}>
            <h2 className={generic.text2XL}>Example H2 with extra texts.</h2>
            <p className={generic.textsm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              sodales massa, eu viverra odio. Sed nec viverra odio. Nulla sed
              varius tellus. Maecenas posuere, diam quis pulvinar posuere, mi
              dolor feugiat nisl, quis pulvinar nisi velit ut mauris. Aliquam ut
              dui a risus pretium aliquet. Nullam venenatis sollicitudin lectus,
              et hendrerit ex consequat vitae. Duis ac rutrum sapien.
            </p>
            <p className={generic.textsm}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vivamus imperdiet ornare elit a
              aliquam. Cras aliquam lorem ac purus ornare malesuada. Maecenas
              scelerisque erat at pretium viverra.
            </p>
            <p className={generic.textsm}>
              Fusce eget posuere lacus. Vestibulum quis hendrerit sapien. Duis
              id enim vitae mauris placerat ultrices eu ut est.
            </p>
          </div>
          <div className={generic.segment}>
            <Image className={generic.imageL} src={filler} alt="filler" />
          </div>
        </section>
        <section className={generic.sectionContrast}>
          <div className={generic.segment}>
            <h2 className={generic.text2XL}>Example H2 with extra texts.</h2>
            <p className={generic.textsm}>
              Fusce eget posuere lacus. Vestibulum quis hendrerit sapien. Duis
              id enim vitae mauris placerat ultrices eu ut est.
            </p>
            <p className={generic.textsm}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Vivamus imperdiet ornare elit a
              aliquam. Cras aliquam lorem ac purus ornare malesuada. Maecenas
              scelerisque erat at pretium viverra.
            </p>
            <Link className={generic.cta} href="/action">
              Call to Action
            </Link>
          </div>
          <div className={generic.segment}>
            <Image className={generic.imageM} src={filler} alt="filler" />
          </div>
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
        <section className={generic.deck}>
          <h2 className={generic.textXL}>Featured Services</h2>
          <div className={generic.cards}>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>Business Solutions</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                sodales massa, eu viverra odio. Sed nec viverra odio.
              </p>
            </div>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
                sodales massa, eu viverra odio. Sed nec viverra odio.
              </p>
            </div>
            <div className={generic.card}>
              <Image className={generic.imageSm} src={filler} alt="filler" />
              <h3 className={generic.textLg}>Tech Help</h3>
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

        <Contact home={true} />
        <section className={generic.section}>
          <div className={style.overlay}>
            <Link
              className={`${generic.cta} ${style.background}`}
              href="/action"
            >
              INSTAGRAM
            </Link>
            <Image className={style.imageInsta} src={filler} alt="filler" />
          </div>
        </section>
      </main>
    </>
  );
}
