import { notFound } from "next/navigation";
import BlogDetail from "../../../../components/blog/BlogDetails";
import { TBlog } from "@/types/blog";

async function getBlogById(id: string): Promise<TBlog | null> {
  try {
    const res = await fetch(
      `https://portfolio-nextjs-backend-rho.vercel.app/api/v1/blog/${id}`,
      {
        cache: "no-store",
      }
    );
    const json = await res.json();

    if (!res.ok || !json.success) return null;

    return json.data;
  } catch {
    return null;
  }
}

export default async function BlogPage({ params }: { params: { id: string } }) {
  let blog: TBlog | null= null;
  
  try {
    const awaitedParams = await Promise.resolve(params);
    blog = await getBlogById(awaitedParams.id);
  } catch (error) {
    console.error("Error fetching review:", error);
    return notFound();
  }

  console.log(blog)

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <BlogDetail blog={blog} />
    </div>
  );
}