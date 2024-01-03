"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
  let router = useRouter();
  let handleDelete = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/crud?id=" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("cannot delete item");
      }
      await res.json();
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="text-red-600" onClick={handleDelete}>
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
}
