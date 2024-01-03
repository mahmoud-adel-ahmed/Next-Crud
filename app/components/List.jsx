import ListItem from "./ListItem";

let GetCrudItems = async () => {
  try {
    let res = await fetch("http://localhost:3000/api/crud", {
      cache: "no-store",
    });
    let { data } = await res.json();
    if (!res.ok) {
      throw new Error("Error fetching data!");
    }
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default async function List() {
  let data = await GetCrudItems();
  if (!data?.length) {
    return (
      <h3 className="text-center text-xl font-bold text-red-500 py-2">
        You have no data to show!
      </h3>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <ListItem data={data} />
    </div>
  );
}
