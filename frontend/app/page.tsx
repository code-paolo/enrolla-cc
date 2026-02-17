import { Button } from "@/components/ui/button";

export default async function Home() {
  const res = await fetch(`http://localhost:3000/api`);
  console.log(res.json());
  return (
    <div className="flex gap-y-10 flex-col justify-center items-center h-screen">
      <h1 className="text-4xl">Random Quiz Aps</h1>
      <Button className="h-15 text-2xl w-100">Take a quiz</Button>
    </div>
  );
}
