import Note from '../components/Note';

export default function SDLC() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1">
        <div className="ml-5">
          <div className="my-3">
            <h2 className="text-xl font-bold mb-3">Software Development Life Cycle (SDLC)</h2>
            <a className="link text-sm" href="https://learn.epam.com/" target="_blank">
              src EPAM
            </a>
            <p>
              It's a process used by software development teams to design, develop, test, and deploy
              high-quality software. SDLC involves a series of phases or stages that guide the
              development process from the initial idea to the final product. These phases typically
              include:
            </p>
          </div>
          <div className="my-3">
            <h3 className="text-xl mb-3">Phases</h3>
            <ol className="list-decimal pl-5">
              <li>
                <strong>Planning:</strong> In this phase, the project scope, requirements,
                timelines, and resources are defined. This involves identifying the goals of the
                project, estimating costs and resources, and creating a project plan.
              </li>
              <li>
                <strong>Requirement Analysis:</strong> During this phase, the requirements of the
                software are analyzed in detail. This involves gathering information from
                stakeholders, understanding their needs, and documenting the requirements.
              </li>
              <li>
                <strong>Design:</strong> In this phase, the system architecture and software design
                are developed based on the requirements gathered in the analysis phase. This
                includes creating detailed technical specifications, designing the user interface,
                and defining the overall system architecture.
              </li>
              <li>
                <strong>Coding</strong> Also known as the coding phase, this is where the actual
                development of the software takes place. Developers write code according to the
                design specifications and guidelines established in earlier phases.
              </li>
              <li>
                <strong>Testing:</strong> Once the code is developed, it undergoes various types of
                testing to ensure that it meets the specified requirements and functions correctly.
                This includes unit testing, integration testing, system testing, and user acceptance
                testing.
              </li>
              <li>
                <strong>Deployment:</strong> In this phase, the software is deployed to the
                production environment or made available to end-users. This involves installing the
                software, configuring it, and ensuring that it works as expected in the production
                environment.
              </li>
              <li>
                <strong>Maintenance:</strong> After the software is deployed, it enters the
                maintenance phase where updates, bug fixes, and enhancements are made as needed.
                This phase ensures that the software continues to meet the changing needs of users
                and remains functional and reliable over time.
              </li>
            </ol>
          </div>

          <div className="my-3">
            <h3 className="text-xl font-bold mb-3 bg-neutral px-3 border-l-2 border-accent">
              Software Development Process Models
            </h3>
            <p>
              When working on a project, the stages of the software life cycle can be interrelated
              in various ways within the development cycle.
            </p>
            <p>
              The software development model describes which stages of the life cycle (SDLC) it goes
              through and what happens at each.
            </p>
            <div className="my-3">
              <p className="mb-3">
                It is chosen based on: <span className="text-accent">Criteria</span>
              </p>
              <ul className="list-disc pl-5">
                <li>the direction of the project</li>
                <li>its budget</li>
                <li>the timing of the final product</li>
                <li>nature and temperament of the project manager and his team.</li>
              </ul>
            </div>
            <p>
              Today, the SDLC models are divided into two large groups: "traditional" SDLC and
              Agile.
            </p>
          </div>
          <div className="my-3">
            <h3 className="text-xl font-bold mb-3">
              "Traditional" SDLC Models <span className="text-accent">Waterfall Model</span>
            </h3>
            <p>
              The <span className="text-accent">Waterfall Model</span> (or cascade) is one of the
              old traditional software development models which implies a sequential flow of stages,
              each of which must be fully completed before the next one starts.
            </p>
          </div>
          <div className="my-3">
            <h3 className="text-xl font-bold mb-3">SDLC Agile</h3>
            <table className="table table-sm">
              <thead>
                <tr>
                  <th>Values</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Individuals and interactions</td>
                  <td>over processes and tools</td>
                </tr>
                <tr>
                  <td>Working software </td>
                  <td>over comprehensive docs</td>
                </tr>
                <tr>
                  <td>Customer collaboration </td>
                  <td>over contract negotiation</td>
                </tr>
                <tr>
                  <td>Responding to changes</td>
                  <td>over following plan</td>
                </tr>
              </tbody>
            </table>
            <div className="my-3 ">
              <p className="mb-3">
                Principles behind the <span className="text-accent">Agile</span>
              </p>
              <ol className="list-decimal pl-5">
                <li>
                  The highest priority is to satisfy the customer through early and continues
                  delivery of valuable software.
                </li>
                <li>Welcome changing requirements.</li>
                <li>
                  Deliver working software frequently (from couple of weeks to a couple of months).
                </li>
                <li>
                  Business people and developers must work together daily throughout the project.
                </li>
                <li>
                  Build project around motivated individuals. Given them the environment and support
                  they need, and trust them to get the job done.
                </li>
                <li>
                  The most efficient and effective method of conveying information to and within a
                  development team is face-to-face.
                </li>
                <li>Working software is the primary measure of the progress</li>
                <li>
                  Agile processes promote sustainable development. The sponsors, developers, and
                  users should be able to maintain a constant peace indefinitely.
                </li>
                <li>Continues attention to technical and good design enhances agility.</li>
                <li>Simplicity is essential.</li>
                <li>
                  The best architectures, requirements and designs emerge from self-organizing
                  teams.
                </li>
                <li>
                  At regular intervals, the team reflects on how to become more effective, then
                  tunes and adjusts its behavior.
                </li>
              </ol>
            </div>
            <div className="my-3 flex flex-col gap-3">
              <h3 className="font-bold">
                A <span className="text-accent font-bold">user story</span>
              </h3>
              <p>
                is a concise description of a feature or functionality from an end-user perspective.
                User stories focus on the <span className="text-accent">'who'</span>,{' '}
                <span className="text-accent">'what'</span>, and
                <span className="text-accent"> 'why'</span> of a feature, rather than the
                <span className="text-accent"> 'how'</span>.
              </p>
              <p>Typically, a user story follows a simple template:</p>
              <p>
                "As a <span className="text-accent">[type of user]</span>, I want{' '}
                <span className="text-accent">[some goal]</span> so that
                <span className="text-accent"> [some reason]</span>."
              </p>
              <p>
                <p>For example:</p>
                "As a <span className="text-accent">website visitor</span>, I want to be able{' '}
                <span className="text-accent">to search for products by category</span> so that{' '}
                <span className="text-accent">I can quickly find what I'm looking for.</span>"
              </p>
            </div>
            <div className="my-3">
              <h3 className="font-bold mb-3">
                A <span className="text-accent font-bold">story point</span>
              </h3>
              <p>
                is a unit of measure used by agile development teams to estimate the complexity or
                effort required to complete a user story or a task. Story points are a relative
                measure rather than an absolute one, meaning they are based on comparing the
                complexity or effort of one task to another, rather than assigning specific time
                durations. Story points are typically assigned during a process called sprint
                planning, where the development team collectively discusses and estimates the effort
                required for each user story or task.
              </p>
            </div>
          </div>
          <div className="my-3">
            <h3 className="text-xl font-bold mb-3">SCRUM</h3>
            <p>Type of project management.</p>
            <p>
              <span className="text-accent">Scrum</span> is an agile team collaboration framework
              commonly used in software development and other industries. Scrum prescribes for teams
              to break work into goals to be completed within time-boxed iterations, called sprints.
              Each sprint is no longer than one month and commonly lasts two weeks.
            </p>
            <img
              className="w-xl bg-slate-500 my-3"
              src="./public/imgs/SCRUM.png"
              alt="scrum graph"
            />
            <div>
              <p className="mb-3">Scrum elements</p>
              <ul className="list-disc pl-5">
                <li>
                  <a href="#roles" target="_self" className="link">
                    Roles
                  </a>
                </li>
                <li>
                  <a href="#events" target="_self" className="link">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#artifacts" target="_self" className="link">
                    Artifacts
                  </a>
                </li>
                <li>
                  <a href="#artifacts" target="_self" className="link">
                    Other
                  </a>
                </li>
              </ul>
            </div>
            <div className="my-3" id="roles">
              <p className="text-accent mb-3">Roles</p>
              <ul className="list-disc pl-5">
                <li className="mb-3">
                  <p>Product owner: Owner of app. From clients business side or team side.</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>Clears user stories for the dev. team</li>
                    <li>Sets priorities for the stories.</li>
                    <li>Communicate with the rest of the company.</li>
                    <li>Has best understanding how final product should operate.</li>
                    <li>
                      Responsible for initial planning: (which feature add to sprint, and menages
                      the backlog).
                    </li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Scrum Master: Usually on of the Devs who knows SCRUM well enough.</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>Overseeing and maintaining SCRUM process.</li>
                    <li>
                      Responsible for ensuring SCRUM is understood amd enacted be Product owner and
                      Dev. team.
                    </li>
                    <li>Resolves team impediments.</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Development Team: Self-organized, small team(most of the time 5 people).</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>
                      Cross-functional, with all of the skills as a team necessary to create a
                      product increment.
                    </li>
                    <li>Developers.</li>
                    <li>Testers.</li>
                    <li>Business analysts.</li>
                    <li>Designers.</li>
                    <li>Architects ect.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="my-3" id="events">
              <p className="text-accent mb-3">Events</p>
              <ul className="list-disc pl-5">
                <li className="mb-3">
                  <p>Backlog Refinement (Spring grooming).</p>
                  <p>Usually performed before sprint</p>
                  <p>Team:</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>clarify requirement to user stories</li>
                    <li>ask questions to Product Owner</li>
                    <li>define how story can be developed</li>
                    <li>how the product gonna be developed and tested</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Sprint Planning</p>
                  <p>Usually performed on the 1st day of sprint</p>
                  <p>Team:</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>reviews high priority stories</li>
                    <li>select stories for sprint</li>
                    <li>breaking stories into tasks and estimates tasks execution</li>
                    <li>what we are going to do</li>
                    <li>breaking up large assignments to smaller tasks</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Daily SCRUM / Standup</p>
                  <p>Usually brief meeting</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>10-15 min (5 ideal)</li>
                    <li>Scrum master tracks and resolves challenges</li>
                    <li>
                      Each speaks what they did yesterday what they are planning to do today and
                      what blockers they have.
                    </li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Sprint review / Demo</p>
                  <p>Usually performed at the end of a sprint when scope is ready.</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>
                      Developer/Tester/BA responsible for the feature demonstrates the work that was
                      Done.
                    </li>
                    <li>Receives feedback from customer.</li>
                  </ul>
                </li>
                <li className="mb-3">
                  <p>Sprint Retrospective</p>
                  <p>How successful we were?</p>
                  <ul className="list-disc  pl-5 marker:text-neutral">
                    <li>What was done well.</li>
                    <li>
                      What needs to be improved.
                      <p>Assign responsible person for the improvement.</p>
                      <p>Set timelines for changes.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="my-3" id="artifacts">
              <p className="text-accent mb-3">Artifacts</p>
              <ul className="list-disc pl-5">
                <li>Release burnout chart</li>
                <li>Sprint burnout chart</li>
                <li>Impediment</li>
                <li>Backlog refinement</li>
                <li>Tasks</li>
                <li>Product backlog item</li>
              </ul>
            </div>
            <div className="my-3" id="others">
              <p className="text-accent mb-3">Others</p>
              <ul className="list-disc pl-5">
                <li>Release burnout chart</li>
                <li>Sprint burnout chart</li>
                <li>Impediment</li>
                <li>Backlog refinement</li>
                <li>Tasks</li>
                <li>Product backlog item</li>
              </ul>
            </div>
          </div>
          <div>
            <mark className="text-3xl">Here Should go KANBAN</mark>
          </div>
        </div>
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
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Question :</strong>
          <p className="pl-2">What is SCRUM?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            Scrum is an agile team collaboration framework. Scrum prescribes for teams to break work
            into goals to be completed within time-boxed iterations, called sprints.
          </p>
        </div>
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Question :</strong>
          <p className="pl-2">What SCRUM elements do you know?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            There are 3 main elements in SCRUM
            <ul className="list-disc pl-5">
              <li>
                <a href="#roles" target="_self" className="link">
                  Roles
                </a>
              </li>
              <li>
                <a href="#events" target="_self" className="link">
                  Events
                </a>
              </li>
              <li>
                <a href="#artifacts" target="_self" className="link">
                  Artifacts
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Question :</strong>
          <p className="pl-2">What roles you know in SCRUM?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            There are 3{' '}
            <a href="#roles" target="_self" className="link">
              roles
            </a>{' '}
            in SCRUM
            <ul className="list-disc pl-5">
              <li>Product owner</li>
              <li>Scrum Master</li>
              <li>Development Team</li>
            </ul>
            <span className="text-sm text-gray-500">
              (PS: interviewer may ask details about each role.)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
