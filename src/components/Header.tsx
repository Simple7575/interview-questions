import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';

type props = {
  openSideBar: () => void;
  closeSideBar: () => void;
  isOpen: boolean;
};

export default function Header({ openSideBar, closeSideBar, isOpen }: props) {
  return (
    // eslint-disable-next-line
    <header className="h-16 w-full flex items-center justify-between px-5 text-neutral-content fixed lg:static bg-base-100 top-0 bg-base-300">
      <div>
        <a
          href="https://github.com/Simple7575/interview-questions"
          target="_blank"
          className="inline-block rounded-full text-xl"
        >
          <BsGithub />
        </a>
      </div>
      <h1 className="text-2xl">Interview questions</h1>
      <div>
        {isOpen ? (
          <FiX className="lg:hidden" onClick={closeSideBar} />
        ) : (
          <FiMenu className="lg:hidden" onClick={openSideBar} />
        )}
      </div>
    </header>
  );
}
