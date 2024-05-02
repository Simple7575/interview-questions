import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Link } from 'react-router-dom';
import Note from '../components/Note';

export default function TypeConversionObjects() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1 py-3">
        <h2 className="text-2xl text-center font-bold mb-3">
          Type Conversion <strong>Primitives</strong>
        </h2>
        <div className="flex flex-col">
          <Link to="/type-conversion/primitives" className="link text-sm text-info">
            For Primitives conversion look here.
          </Link>
          <a
            href="https://javascript.info/object-toprimitive"
            target="_blank"
            className="link text-sm text-info"
          >
            Source
          </a>
        </div>
        <h2 className="text-2xl font-bold my-3 border-b border-neutral">Conversion rules</h2>
        <ol className="list-decimal pl-5">
          <li>
            There’s no conversion to boolean. All objects are true in a boolean context, as simple
            as that. There exist only numeric and string conversions
          </li>
          <li>
            The numeric conversion happens when we subtract objects or apply mathematical functions.
            For instance, Date objects (to be covered in the chapter Date and time) can be
            subtracted, and the result of date1 - date2 is the time difference between two dates.
          </li>
          <li>
            As for the string conversion – it usually happens when we output an object with
            alert(obj) and in similar contexts.
          </li>
        </ol>

        <h2 className="text-2xl font-bold my-3 border-b border-neutral">Hints</h2>
        <div className="flex flex-col gap-y-2 my-1">
          <p>How does JavaScript decide which conversion to apply?</p>
          <p>
            There are three variants of type conversion, that happen in various situations. They’re
            called “hints”
          </p>
        </div>
        <div className="flex flex-col gap-y-2 my-1">
          <mark className="w-max">"string"</mark>
          <code>
            <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
              {`// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;`}
            </SyntaxHighlighter>
          </code>
          <mark className="w-max">"number"</mark>
          <code>
            <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
              {`// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;`}
            </SyntaxHighlighter>
          </code>
          <mark className="w-max">"number"</mark>
          <p>Occurs in rare cases when the operator is “not sure” what type to expect.</p>
          <p>
            For instance, binary plus <mark>+</mark> can work both with strings (concatenates them)
            and numbers (adds them). So if a binary plus gets an object as an argument, it uses the{' '}
            <mark>"default"</mark> hint to convert it.
          </p>
          <p>
            Also, if an object is compared using <mark>==</mark> with a string, number or a symbol,
            it’s also unclear which conversion should be done, so the <mark>"default"</mark> hint is
            used.
          </p>
          <code>
            <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
              {`// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) { ... };`}
            </SyntaxHighlighter>
          </code>
          <p>
            The greater and less comparison operators, such as <mark>{'< >'}</mark> can work with
            both strings and numbers too. Still, they use the <mark>"number"</mark> hint, not{' '}
            <mark>"default"</mark>. That’s for historical reasons.
          </p>
          <p>In practice though, things are a bit simpler.</p>
          <p>
            All built-in objects except for one case <mark>Date</mark> implement{' '}
            <mark>"default"</mark>
            conversion the same way as <mark>"number"</mark>. And we probably should do the same.
          </p>
          <p className="font-bold">
            To do the conversion, JavaScript tries to find and call three object methods:
          </p>
          <ol className="list-decimal pl-5">
            <li>
              Call <mark>obj\[Symbol.toPrimitive](hint)</mark> – the method with the symbolic key
              <mark>Symbol.toPrimitive</mark> (system symbol), if such method exists,
            </li>
            <li>
              Otherwise if hint is <mark>"string"</mark>
              <p>
                try calling <mark>obj.toString()</mark> or <mark>obj.valueOf()</mark>, whatever
                exists.
              </p>
            </li>
            <li>
              Otherwise if hint is <mark>"number"</mark> or <mark>"default"</mark>
              <p>
                try calling <mark>obj.valueOf()</mark> or <mark>obj.toString()</mark>, whatever
                exists.
              </p>
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-y-2 my-1">
          <h2 className="text-2xl font-bold my-3 border-b border-neutral">
            Symbol.toPrimitive method
          </h2>
          <p>
            There’s a built-in symbol named Symbol.toPrimitive that should be used to name the
            conversion method, like this:
          </p>
          <code>
            <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
              {`obj[Symbol.toPrimitive] = function (hint) {
    // here goes the code to convert this object to a primitive
    // it must return a primitive value
    // hint = one of "string", "number", "default"
};`}
            </SyntaxHighlighter>
          </code>
          <p>
            If the method Symbol.toPrimitive exists, it’s used for all hints, and no more methods
            are needed.
          </p>
          <code>
            <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
              {`let user = {
    name: 'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(\`hint: \${hint}\`);
        return hint == 'string' ? \`{name: "\${this.name}"}\` : this.money;
    },
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500`}
            </SyntaxHighlighter>
          </code>

          <div className="flex flex-col gap-y-2 my-1">
            <h2 className="text-2xl font-bold my-3 border-b border-neutral">toString/valueOf</h2>
            <p className="my-2">
              If there’s no Symbol.toPrimitive then JavaScript tries to find methods{' '}
              <mark>toString</mark> and <mark>valueOf</mark>:
            </p>
            <ul className="list-disc pl-5">
              <li>
                For the "string" hint: call toString method, and if it doesn’t exist or if it
                returns an object instead of a primitive value, then call valueOf (so to3String has
                the priority for string conversions).
              </li>
              <li>
                For other hints: call valueOf, and if it doesn’t exist or if it returns an object
                instead of a primitive value, then call toString (so valueOf has the priority for
                maths).
              </li>
            </ul>
          </div>
        </div>
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
