import EditForm from "../../components/EditForm";

export const metadata = {
  title: "Edit Page",
  description: "Edit Page Description",
};

export default async function Edit({ params }) {
  let data = await getItem(params.id);
  return <EditForm data={data} />;
}

let getItem = async (id) => {
  try {
    let res = await fetch(process.env.LOCAL_DOMAIN + "/api/crud/" + id, {
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
