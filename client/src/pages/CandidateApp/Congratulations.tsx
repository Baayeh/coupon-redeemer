import { Link } from "react-router-dom";

const Congratulations = () => {
  return (
    <section>
      <h1 className="text-6xl">Congratulations🎊🎉</h1>
      <p className="text-xl mt-4">Thank you for participating in our trials.</p>
      <p className="text-xl">You can use the coupon to shop on Amazon👌😉</p>

      <Link to="/" className="bg-indigo-700 p-2 block w-[10rem] mx-auto rounded-full my-3">
        Back to home
      </Link>
    </section>
  );
};
export default Congratulations;
