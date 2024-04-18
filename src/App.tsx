import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [isOpen, setISopen] = useState(false);

  const openSideBar = () => {
    const sideBar = document.getElementById('sidebar');
    sideBar?.classList.remove('scale-y-0', 'opacity-0');
    setISopen(true);
  };

  const closeSideBar = () => {
    const sideBar = document.getElementById('sidebar');
    sideBar?.classList.add('scale-y-0', 'opacity-0');
    setISopen(false);
  };

  return (
    <>
      <Header openSideBar={openSideBar} closeSideBar={closeSideBar} isOpen={isOpen} />
      <div className="text-gray-400 flex px-3 gap-2 w-full mt-16 lg:mt-0">
        <Sidebar closeSideBar={closeSideBar} />
        <div className="min-w-[calc(100vw-24rem)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
