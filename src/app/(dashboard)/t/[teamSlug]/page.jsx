"use client"
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import { useState } from 'react';

const teamSlug = "me";

const links = [
  {
    icon: "fi fi-tr-rectangle-list",
    url: `/t/${teamSlug}`
  },
  {
    icon: "fi fi-tr-customization-cogwheel",
    url: `/settings`
  },
]

const subtasks = [
  {
    title: "Sub task 1",
  },
  {
    title: "Sub task 2",
  },
  {
    title: "Sub task 3",
  },
]

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
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState("");
  const userInitial = "DI";

  // Handle reminder creation
  const addReminder = () => {
    if (newReminder.trim() === "") return;
    setReminders([...reminders, newReminder]);
    setNewReminder("");
  };

  // Handle reminder deletion
  const deleteReminder = (index) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
  };

  return (
    <>
      <div className="fixed top-0 left-0 h-full w-[80px] px-3 py-10 bg-gray-100 flex flex-col">

        <Logo />
        <div className="divider"></div>

        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <Link href={link.url} key={index} className="btn">
              <i className={`${link.icon} text-2xl`}></i>
            </Link>
          ))}
        </div>

        <div className="h-full"></div>

        {/* Avatar at the bottom */}
        <div className="h-fit mt-auto">
          <div className="flex justify-center items-center w-12 h-12 rounded-full bg-black text-white text-xl">
            {userInitial}
          </div>
        </div>
      </div>

      <div className="ml-[80px]">
        <div className="grid grid-cols-2 gap-3">
          {/* Team section */}
          <div className="w-full p-5 min-h-[100vh] max-h-[100%] overflow-y-auto">
            <div className="flex justify-between items-center">
              <div className="font-bold uppercase tracking-wide text-xl">{"{Team Name}"}</div>
              <div className="flex gap-2 items-center">
                <button className="btn btn-ghost">
                  <i className="fi fi-tr-rectangle-history-circle-plus text-xl"></i>
                </button>
              </div>
            </div>
            <div className="divider"></div>

            {/* Todo List for reminders */}
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
          <div className="w-full bg-gray-100 min-h-[100vh] max-h-[100%] overflow-y-auto p-10">
            <div className="text-sm uppercase tracking-widest text-gray-400">Reminder Info</div>
            <div className="text-2xl tracking-wide font-bold">
              Renew ShipFa.st domain
            </div>
            <div className="divider"></div>
            <textarea className="textarea w-full h-[100px]" placeholder="Description..."></textarea>
            <div className="divider"></div>
            <div>
              {subtasks.map((subtask, index) => (
                <div key={index} className="flex items-center gap-2 mb-3 cursor-pointer duration-300 p-2 hover:bg-gray-100 hover:shadow-md">
                  <input type="checkbox" className="checkbox" />
                  {subtask.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
