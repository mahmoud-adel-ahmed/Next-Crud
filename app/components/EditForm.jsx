"use client";
import { notFound, useRouter } from "next/navigation";
import { useState } from "react";

export default function EditForm({ data }) {
  let [newTitle, setNewTitle] = useState(data?.item?.title || "");
  let [newDescription, setNewDescription] = useState(
    data?.item?.description || ""
  );

  let router = useRouter();

  if (!data?.item) {
    notFound();
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!newTitle || !newTitle) {
      alert("Empty values are not allowed");
      return;
    }

    try {
      let res = await fetch("/api/crud/" + data?.item?._id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newTitle: newTitle.trim(),
          newDescription: newDescription.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Error Creating data!");
      }
      await res.json();
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="update title"
          className="border p-3 rounded capitalize"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="update desc"
          className="border p-3 rounded capitalize"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 mt-4 px-4 py-2 rounded text-white capitalize text-md"
      >
        update item
      </button>
    </form>
  );
}
