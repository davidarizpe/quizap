import Image from "next/image";

export default function Quiz({ name }) {
  return (
    <a
      href={`/quizes/${name.toLowerCase()}`}
      className="quiz bg-[#666] rounded-2xl p-3 m-3 w-[120px] h-[120px] cursor-pointer transition-all hover:scale-110"
    >
      <Image
        width={100}
        height={100}
        src={`/assets/images/${name}.png`}
        alt="Logo"
        title={name}
        className="rounded-2xl"
      />
    </a>
  );
}
