import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskLIst from "./TaskLIst";

const Taskboard = () => {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className=" rounded-xl border border-[rgba(286,206,206,0,12)] bg-[#1d212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskLIst />
        </div>
      </div>
    </section>
  );
};

export default Taskboard;
