"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Form() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let router = useRouter();

  let handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("all fields are required");
      return;
    }

    try {
      let res = await fetch("/api/crud", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
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
          placeholder="add title"
          name="add title"
          className="border p-3 rounded capitalize"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="add desc"
          name="add desc"
          className="border p-3 rounded capitalize"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-green-600 my-4 px-4 py-2 rounded text-white capitalize text-md "
      >
        add item
      </button>
    </form>
  );
}
