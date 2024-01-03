import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";

export default function ListItem({ data }) {
  return (
    <>
      {data?.map((item) => (
        <div
          className="flex justify-between items-start border border-slate-300 p-3 
     rounded"
          key={item._id}
        >
          <div>
            <h3 className="font-bold capitalize text-2xl">{item.title}</h3>
            <h3 className="text-gray-500 text-lg capitalize mt-2">
              {item.description}
            </h3>
          </div>
          <div className="flex gap-2">
            <EditBtn item={item} />
            <RemoveBtn id={item._id} />
          </div>
        </div>
      ))}
    </>
  );
}
