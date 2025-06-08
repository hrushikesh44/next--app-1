import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-lg ">
      <div className="flex items-center justify-center">
        Todo application
        <br />
        <Link
          className="m-2 p-1 border rounded cursor-pointer "
          href="/signin">
          Signin
        </Link>
        <br />
        <Link
          className="m-2 p-1 border rounded cursor-pointer "
          href="/signup">
          Signup
        </Link>
      </div>
    </div>
  );
}
