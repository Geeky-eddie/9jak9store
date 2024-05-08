import React from 'react';
import { Footer } from 'flowbite-react';
import Link from 'next/link';
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp, BsTiktok } from 'react-icons/bs';
import Image from "next/image";

const FooterCom: React.FC = () => {
  return (
    <Footer container className='border border-t-8 border-red-800 bg-black text-white'>
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link href="/">
              <div>
                <Image src="/logo9ja.svg" alt="logo" width={60} height={40} />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className='m-3' title='About us' />
              <Footer.LinkGroup col>
                <Footer.Link className='m-3' href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' target='_blank' rel='noopener noreferrer'>
                  Learn more about 9jak9
                </Footer.Link>
                <Footer.Link className='m-3' href='#' target='_blank' rel='noopener noreferrer'>
                  Meet our Dogs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='m-3' title='Contact us' />
              <Footer.LinkGroup col>
                <Footer.Link className='m-3' href='#' target='_blank' rel='noopener noreferrer'>
                  Join our Community
                </Footer.Link>
                <Footer.Link className='m-3' href='#' target='_blank' rel='noopener noreferrer'>
                  Contact us on Twitter
                </Footer.Link>
                <Footer.Link className='m-3' href='#' target='_blank' rel='noopener noreferrer'>
                  Contact us on Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className='m-3' title='Legal' />
              <Footer.LinkGroup col>
                <div className='m-3'>
                  <Link href="/privacypolicy" rel='noopener noreferrer' passHref>
                    
                      Privacy Policy
                
                  </Link>
                </div>
                <div className='m-3'>
                  <Link href="/terms" passHref rel='noopener noreferrer'>
                   
                      Terms &amp; Conditions
                    
                  </Link>
                </div>
                {/* <div className='m-3'>
                  <Link href="/disclaimer" rel='noopener noreferrer' passHref>
                   
                      Check out our Disclaimer
                   
                  </Link>
                </div> */}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href='#' by=' - 9jak9' year={new Date().getFullYear()} />
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
          <Footer.Icon href='#' icon={BsFacebook} target='_blank' />
          <Footer.Icon href='#' icon={BsTwitter} target='_blank' />
          <Footer.Icon href='#' icon={BsInstagram} target='_blank' />
          <Footer.Icon href='#' icon={BsWhatsapp} target='_blank' />
          <Footer.Icon href='#' icon={BsTiktok} target='_blank' />
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
