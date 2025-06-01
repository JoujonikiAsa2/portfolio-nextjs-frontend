"use server";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(backend_url);

export const getProjects = async () => {
  try {
    const result = await fetch(`${backend_url}/project`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
  }
};
