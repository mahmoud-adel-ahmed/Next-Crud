import Link from "next/link";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function EditBtn({ item }) {
  return (
    <>
      <Link href={"/edit/" + item?._id}>
        <HiOutlinePencilAlt size={24} />
      </Link>
    </>
  );
}
