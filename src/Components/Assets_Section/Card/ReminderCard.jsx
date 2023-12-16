function createData(des, due, overdue, notify, status) {
  return { des, due, overdue, notify, status };
}

const rows = [
  createData(
    "Urgent Safety Recall1",
    "06/04/2022",
    "08/04/2022",
    "David Demo",
    "Completed"
  ),
  createData(
    "Urgent Safety Recall",
    "06/04/2022",
    "08/04/2022",
    "David Demo",
    "Completed"
  ),
];

export const ReminderCard = () => {
  return (
    <div className="flex flex-col w-full h-auto p-5 overflow-auto bg-white gap-y-10 rounded-2xl">
      <div className="flex flex-wrap items-center justify-between w-full capitalize">
        <div className="text-2xl font-medium capitalize text-zinc-800 ">
          reminder
        </div>
        <button className="bg-[#A162F7] px-[12px] py-[6px] text-white capitalize rounded-lg flex items-center justify-center">
          + add new
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table capitalize">
          {/* head */}
          <thead>
            <tr>
              <th className="pr-20">Description</th>
              <th>due</th>
              <th>Overdue</th>
              <th>Notify</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.des}>
                <td>{row.des}</td>
                <td>{row.due}</td>
                <td>{row.overdue}</td>
                <td>{row.notify}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
