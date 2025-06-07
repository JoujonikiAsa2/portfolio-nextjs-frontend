"use server";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(backend_url);

export const getProfile = async () => {
  try {
    const result = await fetch(`${backend_url}/profile`, {
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

export const downloadResume = async (id: string) => {
  const res = await fetch(`${backend_url}/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await res.json()
  console.log(result)
};
