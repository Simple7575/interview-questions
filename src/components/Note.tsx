import { BsExclamationCircle } from 'react-icons/bs';

export default function Note() {
  return (
    <blockquote className="inline-block border-l-4 border-neutral-content p-1 bg-gray-600">
      <p>
        <BsExclamationCircle className="inline-block m-1 text-xl text-accent" />
        <strong>Please NOTE</strong> That interviewer may ask additional questions please consider
        to study the material and do more research if you feel you have gaps in your knowledge about
        the topic.
      </p>
    </blockquote>
  );
}
