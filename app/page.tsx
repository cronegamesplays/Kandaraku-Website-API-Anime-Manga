import Image from "next/image";

export default function Home() {
  return (
    <main className="container mt-6 mx-auto">
      <h1 className="text-3xl font-bold border-b border-zinc-900 p-2">
        Kandaraku
      </h1>
      <Image
        width={720}
        height={720}
        src="http://simolex.com/wp-content/uploads/2014/11/under_construction_animated.gif"
        alt="Funny under construction GIF."
        className="w-full m-3"
      />
    </main>
  );
}
