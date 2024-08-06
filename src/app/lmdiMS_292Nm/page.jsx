import prisma from "@/db";
import ListButtons from "./Buttons";

export const dynamic = 'force-dynamic';

export default async function page() {
    const users = await prisma.waitList.findMany();
    const userEmails = users.map(user => user.email).join('\n'); // Join emails with new line

    return (
        <div className="flex flex-col justify-center items-center px-5 py-10 bg-base-200">
            <div className="w-fit p-10 rounded-[20px] shadow-lg bg-white">
                <h2 className="text-center">{users.length} Signups</h2>
                <textarea
                    name="userEmails"
                    id="userEmails"
                    cols="30"
                    rows="10"
                    className="textarea input-bordered mt-5"
                    value={userEmails} // Set the joined string as the value
                    readOnly // Optionally set the textarea as read-only
                />
                <ListButtons userEmails={userEmails} users={users} />
            </div>
        </div>
    );
}
