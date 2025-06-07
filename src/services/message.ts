"use server";

import { TMessage } from "@/types/message";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(backend_url);

export const sendMessage = async (data:TMessage) => {
  try {
    const result = await fetch(`${backend_url}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};