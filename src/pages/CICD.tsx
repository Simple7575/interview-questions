import Note from '../components/Note';

export default function CICD() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1 py-3">
        <h2 className="text-2xl text-center font-bold mb-3">CI/CD</h2>
        <p>
          CI/CD stands for Continuous Integration and Continuous Delivery (or Continuous
          Deployment), which are practices in software development aimed at improving the
          efficiency, quality, and speed of delivering software updates. Here's a breakdown of each
          component:
        </p>
        <ol className="list-decimal pl-5 my-3">
          <li>
            <strong className="inline-block my-2">Continuous Integration (CI):</strong>
            <ol className="list-disc pl-5">
              <li>
                Continuous Integration is a development practice where developers regularly
                integrate their code changes into a shared repository, often multiple times a day.
              </li>
              <li>
                Each integration is verified by an automated build (including compiling, testing,
                and code analysis) to detect integration errors as quickly as possible.
              </li>
              <li>
                The main goal of CI is to provide rapid feedback to developers, allowing them to
                detect and fix problems early in the development process, leading to more stable
                software and reduced integration issues.
              </li>
            </ol>
          </li>
          <li>
            <strong className="inline-block my-2">Continuous Delivery (CD):</strong>
            <ol className="list-disc pl-5">
              <li>
                Continuous Delivery extends the principles of CI by ensuring that every code change
                passes through a standardized and automated testing process and can be reliably
                deployed to production or staging environments at any time.
              </li>
              <li>
                With Continuous Delivery, the software is always in a deployable state, allowing
                teams to release new features or updates to customers quickly and efficiently.
              </li>
              <li>
                Deployment to production may still require manual approval or additional checks
                before releasing the changes to end-users.
              </li>
            </ol>
          </li>
          <li>
            <strong className="inline-block my-2">Continuous Deployment:</strong>
            <ol className="list-disc pl-5">
              <li>
                Continuous Deployment takes Continuous Delivery one step further by automating the
                deployment process to production environments without human intervention.
              </li>
              <li>
                With Continuous Deployment, every validated code change that passes the automated
                tests is automatically released to production, often within minutes of being merged
                into the main branch.
              </li>
              <li>
                This approach reduces manual overhead, streamlines the release process, and allows
                teams to deliver new features and updates to users rapidly and frequently.
              </li>
            </ol>
          </li>
        </ol>
        <h2 className="text-xl mb-3">WHY do we need CI/CD?</h2>
        <p>
          The main idea is to push changes more frequently to avoid so called{' '}
          <strong>merge hell</strong>. We push code in small peaces so we get small bugs to fix,
          small merging conflicts to solve.
        </p>
        <h2 className="text-2xl font-bold my-3">Differences of CI tests vs CD tests</h2>
        <p>
          In both Continuous Integration (CI) and Continuous Deployment (CD), you typically have the
          same tests, but the frequency and purpose of running those tests might differ slightly.
          Here's how the tests are used in each case:
        </p>
        <ol className="list-decimal pl-5 my-3">
          <li>
            <strong className="inline-block my-2">Continuous Integration (CI):</strong>
            <ol className="list-disc pl-5">
              <li>
                In CI, tests are run every time a developer pushes code changes to the central
                repository.
              </li>
              <li>
                The primary goal of these tests is to ensure that the newly integrated code doesn't
                introduce any regressions or integration issues.
              </li>
              <li>
                CI tests focus on validating the correctness of the code changes and ensuring that
                they don't break existing functionality.
              </li>
              <li>
                These tests are typically fast-running and focus on unit tests, integration tests,
                and possibly some lightweight end-to-end tests.
              </li>
              <li>
                CI tests provide rapid feedback to developers, allowing them to catch and fix issues
                early in the development process.
              </li>
            </ol>
          </li>
          <li>
            <strong className="inline-block my-2">Continuous Delivery (CD):</strong>
            <ol className="list-disc pl-5">
              <li>
                In CD, tests are also run as part of the deployment pipeline, but their focus might
                extend beyond integration testing.
              </li>
              <li>
                Before deploying changes to production, the application might undergo additional
                tests in a staging environment to validate its behavior in a production-like
                setting.
              </li>
              <li>
                CD tests might include more comprehensive end-to-end tests, performance tests,
                security tests, and user acceptance tests (UAT).
              </li>
              <li>
                The purpose of these tests is to ensure that the application is not only
                functionally correct but also performs well, meets security requirements, and
                satisfies user expectations.
              </li>
              <li>
                While CI tests focus mainly on the correctness of individual code changes, CD tests
                aim to validate the entire application in a production-like environment before
                releasing it to end-users.
              </li>
            </ol>
          </li>
        </ol>
        <p>
          In summary, while both CI and CD involve running tests, the focus and scope of these tests
          may vary. CI tests focus on validating code changes quickly and catching integration
          issues early, while CD tests aim to ensure the overall quality, performance, and
          suitability of the application for production deployment.
        </p>
      </div>

      {/* Question and Answer */}
      <div className="max-w-[55ch] overflow-y-scroll max-h-[calc(100vh-4rem)] px-2 py-3">
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
