import { Link as NextUILink } from '@nextui-org/link';
import { Link } from '../navigation';
import {
  InstagramIcon,
  TikTokIcon,
  Logo
} from '@/components/icons';

interface FooterProps {
  footerLinks: {
    label: string;
    href: string;
  }[];
}

export default function Footer({ footerLinks }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className='container mx-auto max-w-7xl py-24 px-12'>
      <div className='container mx-auto flex justify-between'>
        <div className='w-1/2'>
          <span className='text-center'>
            <Logo />
          </span>
        </div>
        <div className='w-1/2 flex justify-end'>
          <NextUILink
            isExternal
            href='https://www.instagram.com/estudiemas'
            aria-label='Instagram'
          >
            <InstagramIcon size={48} className='text-default-500' />
          </NextUILink>
          <NextUILink
            isExternal
            href='https://www.tiktok.com/@estudiemas'
            aria-label='TikTok'
          >
            <TikTokIcon size={48} className='text-default-500' />
          </NextUILink>
        </div>
      </div>
      <div className='w-full flex justify-center mt-12'>
        <ul className='flex mt-3 text-sm text-gray-500 gap-6'>
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className='hover:underline'>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className='text-center text-sm text-gray-500 mt-4'>
        © {year} EstudieMás. Todos los derechos reservados.
      </p>
    </footer>
  );
}
