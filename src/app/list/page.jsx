import prisma from "@/db"

export default async function page() {
    const users = await prisma.waitList.findMany();
    const userEmails = users.map(user => user.email).join('\n'); // Join emails with new line

    return (
        <div className="flex justify-center items-center px-5 py-10">
            <div className="w-fit-p-10 rounded-lg shadow-lg">
                <h2 className="text-center">{users.length} Signups</h2>
                <textarea
                    name="userEmails"
                    id="userEmails"
                    cols="30"
                    rows="10"
                    className="textarea input-bordered"
                    value={userEmails} // Set the joined string as the value
                    readOnly // Optionally set the textarea as read-only
                />
            </div>
        </div>
    );
}
