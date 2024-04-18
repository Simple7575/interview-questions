import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Note from '../components/Note';

export default function DataTypes() {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Material to study */}
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1 py-3">
        <h2 className="text-2xl text-center font-bold mb-3">JS Data Types</h2>
        <p>There are 8 data types in js</p>
        <code>
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`// 1. String
const str = "String";

// 2. Number
const num = 1;

// 3. Bigint
const bigInt - 1n

// 4. Boolean
const bt = true
const bf = false

// 5. Undefined
const undef = undefined

// 6. Null
const nothing = null

// 7. Symbol
const sym = Symbol("foo");
Symbol("foo") === Symbol("foo"); // false

// 8. Object
const obj = {
    name: "Mike"
}
`}
          </SyntaxHighlighter>
        </code>
      </div>

      {/* Question and Answer */}
      <div className="max-w-[55ch] overflow-y-scroll max-h-[calc(100vh-4rem)] px-2 py-3">
        <h2 className="text-xl font-bold mb-3">Question and Answer</h2>
        <Note />
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Question :</strong>
          <p className="pl-2">How many data types you know in js?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            There are 8 data types in js. 7 primitive types and 1 non-primitive which is object.
          </p>
        </div>
        <div className="border-l hover:border-neutral border-base-100 p-1 max-w-[35ch] md:max-w-[55ch] mb-1">
          <strong className="font-normal">Follow up question usually is :</strong>
          <p className="pl-2">What is the deference of them?</p>
          <strong className="font-normal">Answer :</strong>
          <p className="pl-2">
            Primitive types are assigned by value, where objects are assigned by reference.
          </p>
          For example:
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`let someNum = 5
let someNum2 = someNum

someNum2++

console.log(someNum) // 5
console.log(someNum2) // 6`}
          </SyntaxHighlighter>
          <p>
            Here when we say <mark>someNum2 = someNum</mark>, in memory new value 5 will be created
            and assigned to <mark>someNum2</mark>. So <mark>someNum2</mark> and <mark>someNum</mark>{' '}
            are independent from each other.
          </p>
          Where:
          <SyntaxHighlighter language="javascript" style={anOldHope} showLineNumbers>
            {`let someObj = {
              num: 5,
            }
let someObj2 = someObj

someObj2.num++

console.log(someObj.num) // 6
console.log(someObj2.num) // 6`}
          </SyntaxHighlighter>
          <p>
            Objects are assigned by reference so when we say <mark>someObj2 = someObj</mark>, we are
            basicaly giving to <mark>someObj2</mark> reference to same place in memory where{' '}
            <mark>someObj</mark> is pointing to.
          </p>
        </div>
        <blockquote className="inline-block border-l-4 border-neutral-content p-1 bg-gray-600">
          Also primitive types are <mark>Immutable</mark> where non-primitive types are{' '}
          <mark>Mutable</mark>
        </blockquote>
        <p>
          Mutability refers to data types that can be accessed and changed after they've been
          created and stored in memory. Immutability, on the other hand, refers to data types that
          you can't change after creating them – but that you can still access in the memory.
        </p>
        <a
          className="link"
          href="https://www.freecodecamp.org/news/mutability-vs-immutability-in-javascript/"
          target="_blank"
        >
          <mark>Here are some more info to study about mutability and immutability.</mark>
        </a>
      </div>
    </div>
  );
}
