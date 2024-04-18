import Note from '../components/Note';

export default function TestDocs() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1">
        <h2 className="text-2xl text-center font-bold mb-3">User Story, Test Cases, Checklists</h2>
        <h3 className="text-xl mb-3">
          <strong>User Story</strong>
        </h3>
        <p>
          A user story is a concise, informal description of a feature or functionality from an end
          user's perspective. It typically follows a specific format:
        </p>
        <ul className="list-disc pl-5 my-1">
          <li>As a [type of user]</li>
          <li>I want [some goal]</li>
          <li>so that [some reason]</li>
        </ul>
        <p>
          User stories are commonly used in Agile software development methodologies, such as Scrum,
          to capture requirements and prioritize work. They serve as a means of communication
          between the development team and stakeholders, focusing on the value delivered to the end
          user. User stories are often written on index cards or digitally, and they help teams stay
          focused on delivering user-centric features and functionalities.
        </p>
        <h3 className="text-xl mb-3">
          <strong>Test Cases and Checklists</strong>
        </h3>
        <p>
          Test cases and checklists are both tools used in software testing to ensure that software
          meets its requirements and functions correctly. However, they serve different purposes and
          are used in different contexts within the testing process.
        </p>
        <ol className="list-decimal list-inside">
          <li>
            <strong>Test Cases</strong>
            <ul className="list-disc pl-10 my-1">
              <li>
                <span className="font-bold">Definition:</span> A test case is a detailed procedure
                or set of conditions that are used to verify whether a particular feature or
                functionality of a software application is working as expected.
              </li>
              <li>
                <span className="font-bold">Purpose:</span> Test cases are designed to validate
                specific scenarios or functionalities of the software under test. They outline the
                steps to be followed, the input data to be provided, and the expected outcomes to be
                observed.
              </li>
              <li>
                <span className="font-bold">Components:</span> Each test case typically consists of
                the following components:
                <ul className="list-disc list-inside">
                  <li>Test case ID: Unique identifier for the test case.</li>
                  <li>
                    Description: Description of the test scenario or functionality being tested.
                  </li>
                  <li>
                    Preconditions: Conditions that must be met before the test can be executed.
                  </li>
                  <li>Test Steps: Step-by-step instructions for executing the test.</li>
                  <li>
                    Expected Results: Expected outcomes or behaviors that should be observed if the
                    test passes.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <strong>Checklists:</strong>
            <ul className="list-disc pl-10 my-1">
              <li>
                <span className="font-bold">Definition:</span> A checklist is a list of items or
                criteria that need to be reviewed, verified, or validated during the testing
                process.
              </li>
              <li>
                <span className="font-bold">Purpose:</span> Checklists serve as a reminder of
                important tasks, criteria, or areas to be checked during testing. They help testers
                ensure that no critical steps or considerations are overlooked.
              </li>
              <li>
                <span className="font-bold">Components:</span> Checklists may vary in complexity and
                scope depending on the context, but they typically include a list of items to be
                checked, verified, or reviewed.
              </li>
            </ul>
          </li>
        </ol>
        <h3 className="text-xl mb-3">Key Differences:</h3>
        <ul className="list-disc list-inside pl-5 my-1">
          <li>
            <span className="font-bold">Granularity:</span> Test cases are detailed procedures
            outlining specific test scenarios, while checklists provide a higher-level overview of
            tasks or criteria to be checked.
          </li>
          <li>
            <span className="font-bold">Purpose:</span> Test cases are used to execute specific
            tests and validate functionality, while checklists serve as a guide for reviewing or
            verifying various aspects of the software.
          </li>
          <li>
            <span className="font-bold">Usage:</span> Test cases are typically executed as part of
            formal testing activities, while checklists can be used during various phases of
            testing, including test planning, execution, and review.
          </li>
        </ul>
        <p>
          In summary, test cases provide detailed procedures for executing specific tests, while
          checklists serve as a guide for reviewing or verifying various aspects of the software
          under test. Both are important tools in the testing process and complement each other in
          ensuring the quality and reliability of software applications.
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
