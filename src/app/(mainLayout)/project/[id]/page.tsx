import { notFound } from "next/navigation";
import ProjectDetails from "@/components/project/ProjectDetails";
import { TProject } from "@/types/projects";

async function getProjectById(id: string): Promise<TProject | null> {
  try {
    const res = await fetch(
      `https://portfolio-nextjs-backend-rho.vercel.app/api/v1/project/${id}`,
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
  let project: TProject | null = null;

  try {
    const awaitedParams = await Promise.resolve(params);
    project = await getProjectById(awaitedParams.id);
  } catch (error) {
    console.error("Error fetching review:", error);
    return notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ProjectDetails project={project} />
    </div>
  );
}
