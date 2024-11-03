import Image from "next/image";
import Link from "next/link";
export default function Quiz({ name, topic = "" }) {
  return (
    <Link
      href={
        topic
          ? `/quizes/${topic}/${name.toLowerCase()}`
          : `/quizes/${name.toLowerCase().split(" ").join("")}`
      }
      className="quiz bg-[#666] rounded-2xl p-3 m-3 w-[120px] h-[120px] cursor-pointer flex justify-center items-center transition-all hover:scale-110"
    >
      <Image
        width={100}
        height={100}
        src={`/assets/images/${name}.png`}
        alt="Logo"
        title={name}
        className="rounded-2xl"
      />
    </Link>
  );
}
