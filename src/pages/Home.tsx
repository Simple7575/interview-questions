export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="max-w-[70ch] overflow-y-scroll max-h-[calc(100vh-4rem)] pr-1 py-3 flex flex-col gap-2">
        <h3 className="text-2xl text-center">Hello and Welcome!</h3>
        <p>
          I have created this website to assist anyone preparing for technical interviews. I have
          endeavored to incorporate everything I recall, comprehend, and have gathered from multiple
          interviews for frontend developer and automation tester positions. While the programming
          language emphasized is JavaScript, the theoretical aspects may benefit anyone. I have
          composed questions and answers based on my understanding, so if you discover any errors or
          have suggestions, please feel free to contact me, or alternatively, you can suggest
          changes by creating a pull request on GitHub. It is advisable to delve deeply into the
          topics to confidently address all questions and not be caught off guard by any inquiries
          from the interviewer that are not covered here.
        </p>
        <strong>Good luck!</strong>
      </div>
    </div>
  );
}
