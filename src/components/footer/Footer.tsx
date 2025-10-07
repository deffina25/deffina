import { Link } from 'react-router-dom';
import { PreFooter } from '../pre-footer';

export function Footer() {
  return (
    <footer className="container mx-auto max-w-[1202px] px-2 md:px-4">
      <PreFooter />
      <div className="container mx-auto hidden max-w-[1202px] items-center justify-between pt-[15px] pb-[56px] text-base text-white xl:flex">
        <div>
          <span>© 2025 Deffina LLC. All Rights Reserved</span>
        </div>
        <div className="flex gap-6 duration-300 [&_a]:text-[#fff] [&_a]:hover:underline">
          <Link to="/cookie-policy">Cookie Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
