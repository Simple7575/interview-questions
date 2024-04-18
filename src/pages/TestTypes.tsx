import Note from '../components/Note';

export default function TestTypes() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1">
        <h2 className="text-2xl text-center font-bold mb-3">Types, Methods, Approaches, Levels</h2>

        <a className="link text-sm" href="https://learn.epam.com/" target="_blank">
          src EPAM
        </a>
        <p>
          Now, when it comes to Testing Types, Methods, and Approaches, we employ various strategies
          to validate the software's functionality, performance, and security. This includes unit
          testing, integration testing, system testing, and more. Testing methods can be manual,
          automated, or a combination of both, depending on the project's requirements.
        </p>
        <h3 className="text-xl my-2 pb-1 border-b border-neutral">Four main TYPES of testing</h3>

        <ul className="list-disc list-inside">
          <li>
            Functional testing evaluates the functions a system should perform. It tests{' '}
            <strong className="font-normal">what</strong> a system should do.
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>
                <strong className="font-normal">Smoke testing</strong> (main functionality)
              </li>
              <li>
                <strong className="font-normal">Critical path testing</strong> (most used
                functionality)
              </li>
              <li>
                <strong className="font-normal">Extended testing</strong> (every functionality
                mentioned in the requirements)
              </li>
            </ul>
          </li>
          <li>
            Non-functional testing evaluates characteristics of software such as usability,
            performance, reliability, and security. It tests{' '}
            <strong className="font-normal">how well</strong> a system behaves.
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>
                <strong className="font-normal">Configuration testing</strong> (For example how an
                application works on Windows with 8GB RAM and on Windows with 16GB RAM.)
              </li>
              <li>
                <strong className="font-normal">Internationalization testing</strong> (different
                language and cultural contexts)
              </li>
              <li>
                <strong className="font-normal">Localization testing</strong> ( follows
                internationalization testing and verifies how well the software was adapted)
              </li>
              <li>
                <strong className="font-normal">Security testing</strong>
              </li>
              <li>
                <strong className="font-normal">Usability testing</strong> (easy, convenient)
              </li>
              <li>
                <strong className="font-normal">Accessibility testing</strong> (how easily users
                with disabilities can use a component or system)
              </li>
              <li>
                <strong className="font-normal">Performance Testing</strong>
                <ul className="list-square list-inside pl-5 marker:text-neutral-content">
                  <li>Load</li>
                  <li>Stress</li>
                  <li>Endurance</li>
                  <li>Spike</li>
                  <li>Volume</li>
                  <li>Scalability</li>
                  <li>Stability</li>
                  <li>Failover &amp; Recovery</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Structural testing (white box testing) evaluates a system's internal structure (code,
            architecture, workflows, and data) or how it is implemented.
          </li>
          <li>
            Change-related testing evaluates whether changes corrected a defect or whether a
            functionality was implemented without causing unforeseen adverse
            consequences.(confirmation testing, regression testing)
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>Shallow &amp; wide (Smoke testing)</li>
              <li>
                Narrow &amp; deep (Sanity testing)
                <br />
                Note. According to ISTQB, sanity testing is the same as smoke, but some differences
                exist. This type of testing is often performed before a regression testing full
                cycle starts, but after conducting smoke testing.
              </li>
              <li>Scripted (Retesting)</li>
              <li>Non-scripted (Regression testing)</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral">Methods</h3>

        <ul className="list-disc list-inside pl-5">
          <li>
            BLACK BOX TESTING
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>The internal software structure is unknown</li>
              <li>Testing as a user</li>
            </ul>
          </li>
          <li>
            WHITE BOX TESTING (structural testing)
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>The internal software structure is fully known</li>
              <li>Testing as a developer</li>
            </ul>
          </li>
          <li>
            GREY BOX TESTING
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>The internal software structure is partially known</li>
              <li>Testing as a user with access to the internal structure</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral">Levels</h3>

        <p>
          Software testing levels represent the software development stages at which testing takes
          place.
        </p>

        <ul className="list-disc list-inside pl-5">
          <li>Unit / component testing</li>
          <li>Integration testing</li>
          <li>System testing (End-to-end)</li>
          <li>
            Acceptance testing
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>User acceptance testing (UAT)</li>
              <li>
                Operational acceptance testing (OAT) (backup and restore; installing, uninstalling,
                and upgrading; disaster recovery; user management; etc)
              </li>
              <li>
                Contractual acceptance testing (CAT) (usually by Users or independent testers)
              </li>
              <li>
                Regulatory acceptance testing (RAT) (government, legal, or safety regulations)
              </li>
              <li>Alpha Testing (in house)</li>
              <li>Beta Testing</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral">Approaches</h3>

        <p>Static and Dynamic</p>

        <p className="my-2">
          <strong className="font-normal">Static</strong> testing is a software testing approach
          performed during the early stages of development. It checks defects in software without
          executing its code. Static testing can be conducted as a review (informal or peer review,
          walkthrough, inspection) or static analysis (data or control flow, cyclomatic complexity).
          Almost any work product can be examined using static testing
        </p>

        <p>
          <strong className="font-normal">Dynamic</strong> testing is a testing approach involving
          code execution to analyze the software behavior. A software code under testing should be
          written, compiled, and launched to conduct dynamic testing. At the same time, with the
          help of dynamic testing, you can check software performance: processor load, memory usage,
          response time, etc.
        </p>
      </div>

      {/* Question and Answer */}
      <div className="max-w-[55ch] overflow-y-scroll max-h-[calc(100vh-4rem)] px-2">
        <h2 className="text-xl font-bold mb-3">Question and Answer</h2>
        <Note />
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Question :</strong>
          <p className="pl-2">What is SDLC?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            It's a process used by software development teams to design, develop, test, and deploy
            high-quality software.
          </p>
        </div>
      </div>
    </div>
  );
}
