import { sendEmail } from "@/apiCalls/postData";
import React, { useState } from "react";

const Subscribe = () => {
    const [inputText, setInputText] = useState("")
    const [message, setMessage] = useState("");

    const handleSubscribe = () => {
        if (inputText !== "") {
            sendEmail(inputText).then((response) => {
                if (response.data.success) {
                    setInputText("")
                    setMessage(response.data.message);
                    setTimeout(() => {
                        setMessage("")
                    },1500)
                }
                else{
                    setMessage("check your email");
                    setTimeout(() => {
                        setMessage("")
                    },1500)
                }
            })
        }
    }

  return (
    <section className="my-[10rem]" >
      <h2 className="text-3xl font-semibold">Subscribe</h2>
      <div className="flex justify-center mt-5">
        <input
          type="email"
          placeholder="Enter your email"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="text-black ps-2 h-[50px] border-2 border-e-0 rounded-s-xl w-3/5 md:w-2/5"
        ></input>
        <button onClick={handleSubscribe} className="bg-indigo-500 px-5 text-white rounded-e-xl text-base border hover:border-black shadow hover:shadow-lg">Subscribe</button>
      </div>
      {message !== "" ? <p className="text-xl font-medium">{message}</p> : ""}
    </section>
  );
};

export default Subscribe;