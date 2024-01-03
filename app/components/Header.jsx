import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="py-3 px-6 flex justify-between items-center bg-slate-900 rounded">
        <Link href="/" className="text-white text-2xl uppercase">
          Crud.
        </Link>
        <Link
          href="/add"
          className="border px-6 py-1 text-lg bg-white capitalize rounded"
        >
          add
        </Link>
      </nav>
    </>
  );
}
