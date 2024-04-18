import Note from '../components/Note';

export default function TestTechniques() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1">
        <h2 className="text-2xl text-center font-bold mb-3">Testing Techniques</h2>

        <a className="link text-sm" href="https://learn.epam.com/" target="_blank">
          src EPAM
        </a>
        <ul className="list-disc list-inside pl-5">
          <li>
            Domain testing
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>Equivalence partition</li>
              <li>Boundary values</li>
              <li>Pairwise testing</li>
            </ul>
          </li>
          <li>State transition</li>
          <li>Decision table</li>
          <li>
            Experience-based Test Technique:
            <ul className="list-disc list-inside pl-5 marker:text-neutral">
              <li>Exploratory</li>
              <li>Ad Hoc</li>
              <li>Monkey Testing</li>
              <li>Error guessing</li>
              <li>Cause-effect Testing (graph)</li>
              <li>Exhaustive testing</li>
            </ul>
          </li>
        </ul>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral">Domain Testing</h3>

        <blockquote className="inline-block border-l-4 border-neutral-content p-1 bg-gray-600">
          <p>
            <strong>Domain testing</strong> is a test technique that involves partitioning a domain
            (a set of values) into sub-domains (equivalence classes) and then selecting one or more
            representatives (values) of each sub-domain for testing.
          </p>
        </blockquote>

        <p>According to Lee Copeland, there are two crucial points about domain testing:</p>

        <ul className="list-disc list-inside">
          <li>
            <strong>Equivalence class analysis: partitioning a domain into sub-domains</strong> Two
            values belong to the same equivalence class if they are so similar that the program
            treats them the same way. Accordingly, testers can test only one or two representatives
            of each class, substantially reducing the number of tests.
          </li>
          <li>
            <strong>Choosing the best representatives for testing</strong> Testers should analyze
            class representatives based on possible risks. Try to choose a value that is a little
            more likely to cause the program to fail than the others. Such value is often at the
            boundary of a class. This keeps the number of tests small and doesn't increase the risk
            of missing bugs much.
          </li>
        </ul>

        <p>
          To sum up, domain testing is a test technique for creating efficient tests, especially
          when several features can or need to be tested simultaneously. The most popular approaches
          to domain testing are:
        </p>

        <ul className="list-disc list-inside">
          <li>Equivalence partitioning</li>
          <li>Boundary value analysis</li>
          <li>Pairwise testing</li>
        </ul>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral text-accent">
          Equivalence Partitioning
        </h3>

        <p>
          Requires dividing test data into classes with similar elements. Any data value in a class
          should be equal to any other value from this class (in terms of testing).
        </p>

        <p>Steps:</p>

        <ol className="list-decimal list-inside">
          <li>Identify the equivalence classes.</li>
          <li>Create a test case for each equivalence class using one value from each one.</li>
        </ol>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral text-accent">
          Boundary Value Analysis
        </h3>

        <p>
          Boundary value analysis is an extension of the equivalence partitioning test technique.
          Boundary value analysis can only be used when a partition is ordered and consists of
          numeric or sequential data. A partition's minimum and maximum values (or first and last
          values) are considered its <mark>boundary values</mark>, or the "edges" of each class.
        </p>

        <p>
          Testers still split data into equivalent classes, but they do not test values from{' '}
          <mark>inside a particular</mark> class only. Instead, testers check{' '}
          <mark>boundary values</mark> (those that are at the borders of the classes):
        </p>

        <p>Steps:</p>
        <ol className="list-decimal list-inside pl-5">
          <li>Identify the equivalence classes.</li>
          <li>Identify the boundaries of each equivalence class.</li>
          <li>Create tests for each boundary value by choosing:</li>
          <ul className="list-disc list-inside pl-5">
            <li>One point on the boundary</li>
            <li>One point just below the boundary</li>
            <li>One point just above the boundary</li>
          </ul>
        </ol>

        <p className="font-bold">There are two approaches to selecting boundary values:</p>
        <ul className="list-disc list-inside pl-5">
          <li>Two-value boundaries (according to the ISTQB Syllabus)</li>
          <li>Three-value boundaries (according to Lee Copeland)</li>
        </ul>

        <h3>
          <mark>Two-value</mark>
        </h3>
        <ol className="list-decimal list-inside">
          <li>The boundary value</li>
          <li>
            One step less (for the <mark>minimum boundary</mark>) or one step more (for the{' '}
            <mark>maximum boundary</mark>)<br />
            For example if we have "Username" text field and the following requirement: "The system
            should allow users to insert a username whose length is from 2 to 35 symbols." Our
            boundary values will be:
            <ul className="list-disc list-inside pl-5">
              <li>
                Minimum boundary values: 1- and 2-symbol usernames (2 is boundary value and 1 is one
                step less)
              </li>
              <li>
                Maximum boundary values: 35- and 36-symbol usernames (35 is boundary value and 36 is
                one step more)
              </li>
            </ul>
          </li>
        </ol>

        <h3>
          <mark>Three-value</mark>
        </h3>
        <ol className="list-decimal list-inside">
          <li>
            The <code>boundary value</code>
          </li>
          <li>
            One minimum <code>step more</code> than the boundary
          </li>
          <li>
            One minimum <code>step less</code> than the boundary
            <br />
            For same requirements as above we will have following boundary values:
            <ul className="list-disc list-inside pl-5">
              <li>
                Minimum boundary values: 1-, 2-, and 3-symbol usernames (2 is boundary value, 1 is
                one step less and 3 is one step more)
              </li>
              <li>
                Maximum boundary values: 34-, 35-, and 36-symbol usernames (35 is boundary value, 34
                is one step less and 36 is one step more)
              </li>
            </ul>
          </li>
        </ol>

        <p>
          Though the <mark>two-value</mark> selection approach is used more often in testing, it's
          better to use the <mark>three-value</mark> approach for high-risk systems.
        </p>

        <h3 className="text-xl my-2 pb-1 border-b border-neutral text-accent">Pairwise Testing</h3>

        <p>
          (also called <mark>all-pairs testing</mark> or combinatorial testing) is a black-box test
          technique in which test documentation is designed to execute all possible discrete
          combinations of each pair of input parameters (ISTQB Glossary).
        </p>

        <p>
          Pairwise testing is very useful when designing tests for applications that{' '}
          <mark>involve multiple parameters</mark>. Subset of combinations is generated to satisfy
          all factors. Moreover, according to IBM research, up to <mark>97%</mark> of software
          issues are caused by interactions between just <mark>two</mark> parameters.
        </p>

        <p>
          Pairwise testing allows you to reduce the number of combinations to be covered as it
          chooses a specially selected, reasonably small subset of combinations. At the same time,
          pairwise testing is highly effective at detecting bugs. Here, the Pareto principle works:
          When applying the pairwise testing technique, testers create and run 1–20% of tests and
          still find 70–85% of the total defects. It is a smart test technique that guarantees a
          win-win situation in terms of effort and effectiveness.
        </p>

        <p>Steps:</p>
        <ol className="list-decimal list-inside pl-5">
          <li>Create a list with all the input variables (parameters)(for form input fields).</li>
          <li>List all possible values for each variable.</li>
          <li>Arrange variables and values involved in a table format.</li>
          <li>
            Use an appropriate pairwise tool to generate the optimal number of tests (an effective
            test suite) based on the table you created.
          </li>
          <li>
            Create a general test description if test cases are used as test documentation on the
            project.
          </li>
        </ol>

        <table className="table table-sm">
          <thead>
            <tr>
              <th>City</th>
              <th>Occasion</th>
              <th>Cake filling</th>
              <th>Ask about allergies</th>
              <th>&lt;- Variables (parameters)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Seattle</td>
              <td>Wedding</td>
              <td>Cherry</td>
              <td>Yes</td>
              <td>&lt;- Values</td>
            </tr>
            <tr>
              <td>New York</td>
              <td>Anniversary</td>
              <td>Strawberry</td>
              <td>No</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <p>
          Pairwise testing may not choose combinations that the developers and testers know are
          either frequently used or highly risky. If such combinations exist, use pairwise tests,
          and then add additional checks to minimize the risk of missing an important combination.
        </p>

        <p>
          Pairwise <mark>TOOLS</mark>: PICT, Pairwiser, Hexawise, and Allpairs (follow the{' '}
          <a href="https://www.pairwise.org/tools.html">link</a> to find more tools).
        </p>

        <h1 className="bg-yellow-300 text-3xl">Continue from state transition here</h1>
      </div>

      {/* Question and Answer */}
      <div className="max-w-[55ch] overflow-y-scroll max-h-[calc(100vh-4rem)] px-2">
        <h2 className="text-xl font-bold mb-3">Question and Answer</h2>
        <Note />
      </div>
    </div>
  );
}
