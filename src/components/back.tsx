"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Back() {
  const path = usePathname();
  const url = useRouter();
  const goBack = () => {
    const back = path.split("/").slice(0, -1).join("/");

    if (back === "" || back === "/quizes" || back === "/") {
      url.push("/");
      return;
    }

    url.push(back);
  };

  return (
    <button onClick={goBack} className="back">
      &larr;
    </button>
  );
}
