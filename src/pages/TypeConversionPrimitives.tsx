import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

export default function TypeConversionPrimitives() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1 py-3">
        <h2 className="text-2xl text-center font-bold mb-3">
          Type Conversion <strong>Primitives</strong>
        </h2>
        <Link to="/type-conversion/objects" className="link text-sm text-info">
          For Objects conversion look here.
        </Link>
        <h2 className="text-2xl font-bold my-3 border-b border-neutral">String Conversion</h2>
        <p>
          String conversion happens when we need the string form of a value. String conversion is
          mostly obvious. A false becomes "false", null becomes "null", etc.
        </p>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`// let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string`}
          </SyntaxHighlighter>
        </code>

        <h2 className="text-2xl font-bold my-3 border-b border-neutral">Numeric Conversion</h2>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`// alert('6' / '2'); // 3, strings are converted to numbers

let str = '123';
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

let age = Number('an arbitrary string instead of a number');

alert(age); // NaN, conversion failed`}
          </SyntaxHighlighter>
        </code>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Value</th>
              <th>Becomes…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>undefined</td>
              <td>NaN</td>
            </tr>
            <tr>
              <td>null</td>
              <td>0</td>
            </tr>
            <tr>
              <td>true and false</td>
              <td>1 and 0</td>
            </tr>
            <tr>
              <td>string</td>
              <td>
                Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are
                removed. If the remaining string is empty, the result is 0. Otherwise, the number is
                “read” from the string. An error gives NaN.
              </td>
            </tr>
          </tbody>
        </table>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`// alert(Number('   123   ')); // 123
alert(Number('123z')); // NaN (error reading a number at "z")
alert(Number(true)); // 1
alert(Number(false)); // 0`}
          </SyntaxHighlighter>
        </code>
        <p className="my-2">
          Please note that null and undefined behave differently here: null becomes zero while
          undefined becomes NaN.
        </p>

        <h2 className="text-2xl font-bold my-3 border-b border-neutral">Numeric Conversion</h2>
        <ul className="list-disc pl-5 my-3">
          <li>
            Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN,
            become false.
          </li>
          <li>Other values become true.</li>
        </ul>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Value</th>
              <th>Becomes…</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>null, undefined, NaN, ""</td>
              <td>false</td>
            </tr>
            <tr>
              <td>any other value</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-2xl font-bold my-3 border-b border-neutral">Conversion by operators</h2>
        <p className="my-2">
          Note that if any of the operands is a string, then the other one is converted to a string
          too.
        </p>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`alert('1' + 2); // "12"
alert(2 + '1'); // "21"

alert(2 + 2 + '1'); // "41" and not "221"`}
          </SyntaxHighlighter>
        </code>
        <p className="my-2">
          Here, operators work one after another. The first + sums two numbers, so it returns 4,
          then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.
        </p>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {
              // eslint-disable-next-line
              `alert('1' + 2 + 2); // "122" and not "14"`
            }
          </SyntaxHighlighter>
        </code>
        <p className="my-2">
          Here, the first operand is a string, the compiler treats the other two operands as strings
          too. The 2 gets concatenated to '1', so it’s like '1' + 2 = "12" and "12" + 2 = "122".
        </p>
        <p className="bg-neutral px-3 border-l-2 border-accent text-sm">
          The binary + is the only operator that supports strings in such a way. Other arithmetic
          operators work only with numbers and always convert their operands to numbers.
        </p>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`alert(6 - '2'); // 4, converts '2' to a number
alert('6' / '2'); // 3, converts both operands to numbers`}
          </SyntaxHighlighter>
        </code>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Precedence</th>
              <th>Name</th>
              <th>Sign</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>14</td>
              <td>unary plus</td>
              <td>+</td>
            </tr>
            <tr>
              <td>14</td>
              <td>unary negation</td>
              <td>-</td>
            </tr>
            <tr>
              <td>13</td>
              <td>exponentiation</td>
              <td>**</td>
            </tr>
            <tr>
              <td>12</td>
              <td>multiplication</td>
              <td>*</td>
            </tr>
            <tr>
              <td>12</td>
              <td>division</td>
              <td>/</td>
            </tr>
            <tr>
              <td>11</td>
              <td>addition</td>
              <td>+</td>
            </tr>
            <tr>
              <td>11</td>
              <td>subtraction</td>
              <td>-</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>2</td>
              <td>assignment</td>
              <td>=</td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
          </tbody>
        </table>
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
