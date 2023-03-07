import Image from 'next/image'
import style from './footer.module.css'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.left}>
        <a href="mailto:example@email.com">example@email.com</a>
        <br />
        <a href="tel:+1">(888)888-8888</a>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={style.vercelLogo}
        width={100}
        height={24}
        priority
      />
      <div className={style.right}>
        <p>
          © Template.
          <br />
          <br />
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}