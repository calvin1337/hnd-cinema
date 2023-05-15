// Author: Calvin Donaldson
// Date: 07/05/2023
// Description: Footer component for the website. general information about the website and links to personal website and github.
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className=" mt-10">
      <div className="grid grid-cols-4 grid-rows-1 lg:container gap-x-5 p-5">
      <div className="col-span-2">
        <h6>About this project</h6>
        <p>
          This project was built as part of my graded unit for my HND in Software Development. The project was built using Next.js, Tailwind CSS and Firebase.

        </p>
      </div>
      <div className="col-span-1 text-center">
        <h6>Personal Links</h6>
        <ul className="flex flex-row gap-3 justify-center">
          <li><FontAwesomeIcon className="hover:text-white" icon={faInstagram} size={"2xl"}></FontAwesomeIcon><Link href="https:www.instagram.com"></Link></li>
          <li><FontAwesomeIcon className="hover:text-white" icon={faTwitter} size={"2xl"}></FontAwesomeIcon><Link href="https:www.instagram.com"></Link></li>
          <li><FontAwesomeIcon className="hover:text-white" icon={faGithub} size={"2xl"}></FontAwesomeIcon><Link href="https:www.instagram.com"></Link></li>
          <li><FontAwesomeIcon className="hover:text-white" icon={faLinkedin} size={"2xl"}></FontAwesomeIcon><Link href="https:www.instagram.com"></Link></li>
        </ul>
      </div>
      <div className="col-span-1">
        <h6>Links</h6>
        <ul >
          <li><Link className="hover:text-white" href="/">Home</Link></li>
          <li><Link className="hover:text-white" href="/about">About</Link></li>
          <li><Link className="hover:text-white" href="/whatson">Whats on</Link></li>
          <li><Link className="hover:text-white" href="/comingsoon">Coming soon</Link></li>
        </ul>
      </div>
      </div>

      <hr />
      <h1 className="px-2 text-right">Calvin Donaldson</h1>
    </footer>
  );
};

export default Footer;
