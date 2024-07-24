import { Posts } from "./components/posts";
import { Warning } from "./components/warning";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start pt-32 bg-white h-screen w-full text-black">
      <div className="flex flex-col gap-12 max-w-sm w-full">
        <h1 className="text-3xl font-semibold text-center">Feature Flag Example</h1>
        <Posts />
        <Warning />
      </div>
    </main>
  );
}
