"use client";

import Select from "react-select";
import SectionTitle from '@/components/shared/SectionTitle';
import { useState } from 'react';

export default function TaskDetails({ task }) {
    const [selectedLabels, setSelectedLabels] = useState([]);
    const [selectedNotifications, setSelectedNotifications] = useState([]);

    const subtasks = [
        {
            title: "Sub task 1",
        },
        {
            title: "Sub task 2",
            isComplete: true
        },
        {
            title: "Sub task 3",
        },
    ];

    // Options for select inputs
    const labelOptions = [
        { value: "Label 1", label: "Label 1" },
        { value: "Label 2", label: "Label 2" },
        { value: "Label 3", label: "Label 3" },
        { value: "Label 4", label: "Label 4" },
    ];

    const notificationOptions = [
        { value: "WEB", label: "WEB" },
        { value: "Email", label: "Email" },
        { value: "Phone", label: "Phone" },
        { value: "Whatsapp", label: "Whatsapp" },
    ];

    return (
        <>
            <div className="w-full bg-gray-100 max-h-[100vh] overflow-y-scroll p-10">

                <SectionTitle text="Reminder Info" />
                <div className="text-2xl tracking-wide font-bold">
                    Renew ShipFa.st domain
                </div>
                <div className="divider"></div>
                <SectionTitle text="Notes" />
                <textarea
                    className="mt-1 textarea w-full p-1 bg-transparent resize-none overflow-hidden border-0 focus:outline-none focus:ring-0"
                    placeholder="Insert your notes here"
                    rows={1}
                    onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight}px`;
                    }}
                ></textarea>
                <SectionTitle text="Subtasks" />
                <div>
                    {subtasks.map((subtask, index) => (
                        <div key={index} className="flex items-center justify-between gap-2 mb-1 cursor-pointer duration-300 p-2 hover:bg-gray-100 hover:shadow-md">
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" className="checkbox" defaultChecked={subtask?.isComplete || false} />
                                <div>
                                    {subtask.title}
                                </div>
                            </div>
                            <div>
                                {subtask?.isComplete == true ? (<>
                                    <i className="fi fi-tr-circle-xmark"></i>
                                </>) : ""}
                            </div>
                        </div>
                    ))}
                    <div className='mb-2'>
                        <label className="input input-bordered bg-transparent flex items-center gap-2">
                            <i className="fi fi-tr-add flaticon"></i>
                            <input type="text" className="grow" placeholder="Add Subtask" />
                        </label>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="mb-3">
                    <SectionTitle text="Labels" />
                    <Select
                        options={labelOptions}
                        value={selectedLabels}
                        onChange={setSelectedLabels}
                        isMulti
                        placeholder="Select labels..."
                    />
                </div>

                <div className="mb-3">
                    <SectionTitle text="Notification Medium" />
                    <Select
                        options={notificationOptions}
                        value={selectedNotifications}
                        onChange={setSelectedNotifications}
                        isMulti
                        placeholder="Select notification mediums..."
                    />
                </div>

                <div className="mb-3">
                    <SectionTitle text="Frequency" />
                    <select name="" id="" className="select">
                        <option value="">Once</option>
                        <option value="">Daily</option>
                        <option value="">Weekly</option>
                        <option value="">Monthly</option>
                    </select>
                </div>

                <div className="mb-3">
                    <SectionTitle text="Priority" />
                    <select name="" id="" className="select">
                        <option value="">Low</option>
                        <option value="" selected>Medium</option>
                        <option value="">High</option>
                    </select>
                </div>

            </div>
        </>
    )
}