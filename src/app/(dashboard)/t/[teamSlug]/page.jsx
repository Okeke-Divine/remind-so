"use client";
import Sidebar from '@/components/shared/Sidebar';
import SectionTitle from '@/components/shared/SectionTitle';
import Container from '@/components/shared/layout1/Container';
import TaskDetails from '@/components/layout/TaskDetails';

const tasks = [
  {
    title: "Renew ShipFa.st domain",
  },
  {
    title: "Customer Acquisition Meeting",
  },
  {
    title: "Submit monthly SaaS metrics to investors",
  },
  {
    title: "Optimize landing page SEO",
  },
  {
    title: "Prepare for product launch on Product Hunt",
  },
  {
    title: "Update user onboarding flow based on feedback",
  },
  {
    title: "Reach out to 5 potential customers for beta testing",
  },
  {
    title: "Post weekly progress update on Indie Hackers forum",
  },
  {
    title: "Backup database and review infrastructure costs",
  },
  {
    title: "Schedule quarterly review of marketing strategy",
  }
];

export default function TeamPage() {

  return (
    <>

      <Sidebar />

      <Container>
        <div className="block lg:grid grid-cols-2 gap-3">
          {/* Team section */}
          <div className="w-full p-5 max-h-[100vh] overflow-y-scroll">
            <div className="flex justify-between items-center">
              <div>
                <div className="">

                  <select className="select font-bold uppercase tracking-wide text-xl pl-0 pb-0">
                    <option value="">{"{Team Name}"}</option>
                  </select>
                </div>
                <SectionTitle text="Reminders" />
              </div>
              <div className="flex gap-2 items-center">
                <button className="btn btn-ghost">
                  <i className="fi fi-tr-rectangle-history-circle-plus text-xl flaticon"></i>
                </button>
              </div>
            </div>
            <div className="divider"></div>

            {/* Todo List for reminders */}
            <div className='mb-2'>
              <label className="input input-bordered flex items-center gap-2">
                <i className="fi fi-tr-add flaticon"></i>
                <input type="text" className="grow" placeholder="Add Reminder" />
              </label>
            </div>

            <div className="divider my-1 py-1"></div>

            <div className="join mb-2 join-horizontal">
              <div className="btn bg-gray-300 join-item">All</div>
              <div className="btn join-item">Completed</div>
              <div className="btn join-item">Overdue</div>
            </div>

            <div>
              {tasks.map((task, index) => (
                <div key={index} className="flex items-center gap-2 mb-3 cursor-pointer duration-300 p-2 hover:bg-gray-100 hover:shadow-md">
                  <input type="checkbox" className="checkbox" />
                  {task.title}
                </div>
              ))}
            </div>
          </div>

          {/* Reminder Info Section */}
          <TaskDetails task={null} />
        </div>

      </Container>
    </>
  );
}
