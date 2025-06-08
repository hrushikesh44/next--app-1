"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-lg mt-52">
      <div className="border rounded-xl bg-gray-500 w-[35vw] h-[50vh] ">
        <div className="flex justify-center items-center text-lg pt-10">
          <input
            type="text"
            placeholder="email"
            className="p-2 border rounded border-black"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            className="p-2 border rounded border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={async () => {
              const response = await axios.post(
                "http://localhost:3000/api/v1/signup",
                {
                  username,
                  password,
                }
              );
              router.push("/signin");
            }}>
            {" "}
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
