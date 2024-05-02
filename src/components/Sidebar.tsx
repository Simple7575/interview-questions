import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type props = {
  closeSideBar: () => void;
};

export default function Sidebar({ closeSideBar }: props) {
  const { pathname } = useLocation();

  // change active link bg
  useEffect(() => {
    document.querySelectorAll('.side-bar-link').forEach((item) => {
      if (item.getAttribute('href') === pathname) {
        item.classList.add('bg-gray-600');
      } else {
        item.classList.remove('bg-gray-600');
      }
    });
  }, [pathname]);

  return (
    <div
      className={`
      p-3 z-50 bg-base-200 overflow-y-scroll transition-all origin-top absolute text-sm 
      scale-y-0 opacity-0 inset-0 top-16
      lg:h-[calc(100vh-4rem)] lg:static lg:w-96 lg:scale-100 lg:opacity-100 lg:flex flex-col`}
      id="sidebar"
    >
      <div>
        <strong className="text-md">Theory</strong>
        <ul
          className="list-none pl-3 border-l border-neutral text-gray-300 flex flex-col gap-1"
          role="list"
        >
          <li>
            <Link
              to="/sdlc"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
            >
              Criteria and understanding of SDLC Agile framework (Scrum, Kanban)
            </Link>
          </li>
          <li>STLC</li>
          <li>
            <Link
              to="/cicd"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full side-bar-link"
            >
              CI/CD High level understanding
            </Link>
          </li>
          <li>
            <Link
              to="/test-docs"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full side-bar-link"
            >
              Testing documentation (test cases, checklists, bug report)
            </Link>
          </li>
          <li>
            <Link
              to="/test-types"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
            >
              Testing types
            </Link>
          </li>
          <li>
            <Link
              to="/test-techniques"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
            >
              Testing techniques
            </Link>
          </li>
          <li>Testing design strategy</li>
          <li>TAF Layers</li>
          <li>git - git branching strategy</li>
          <li>Automatization - POM, API and Tool config</li>
          <li>Locators basic knowledge css, xpath</li>
          <li>
            Cucumber, Gherkin - understanding, knowledge of writing simple tests, step definition
          </li>
        </ul>
      </div>
      <div>
        <strong className="text-md">JavaScript</strong>
        <ul
          className="list-none pl-3 border-l border-neutral text-gray-300 flex flex-col gap-1"
          role="list"
        >
          <li>
            <Link
              to="/data-types"
              onClick={closeSideBar}
              className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
            >
              Data types{' '}
              <span className="text-xs">(Reference vs Primitive, Mutable vs Immutable)</span>
            </Link>
          </li>
          <li>
            Type conversions
            <ul
              className="list-none pl-3 border-l border-neutral text-gray-300 flex flex-col gap-1"
              role="list"
            >
              <li>
                <Link
                  to="/type-conversion/primitives"
                  onClick={closeSideBar}
                  className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
                >
                  Primitives
                </Link>
              </li>
              <li>
                <Link
                  to="/type-conversion/objects"
                  onClick={closeSideBar}
                  className="hover:bg-slate-500 rounded-md px-1 inline-block w-full group active side-bar-link"
                >
                  Objects
                </Link>
              </li>
            </ul>
          </li>
          <li>Hoisting</li>
          <li>Closure and Scope</li>
          <li>Methods of Objects, Arrays, Strings</li>
          <li>Functions</li>
          <li>Promises</li>
          <li>Nodejs basic commands</li>
          <li>package.json, dependencies</li>
        </ul>
      </div>
      <div>
        <strong className="text-md">Additional</strong>
        <ul
          className="list-none pl-3 border-l border-neutral text-gray-300 flex flex-col gap-1"
          role="list"
        >
          <li>Event loop Browser, Node</li>
        </ul>
      </div>
    </div>
  );
}
