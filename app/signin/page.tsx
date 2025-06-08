export default function Signin() {
  return (
    <div className="flex justify-center items-center text-lg mt-52">
      <div className="border rounded-xl bg-gray-500 w-[35vw] h-[50vh] ">
        <div className="flex justify-center items-center text-lg pt-10">
          <input
            type="text"
            placeholder="email"
            className="p-2 border rounded border-black"
          />
          <br />
          <input
            type="text"
            placeholder="password"
            className="p-2 border rounded border-black"
          />
          <button>Signin</button>
        </div>
      </div>
    </div>
  );
}
