"use client"
import Swal from 'sweetalert2';
const ListButtons = ({ userEmails,users }) => {

    const handleCopy = () => {
        navigator.clipboard.writeText(userEmails).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Copied!',
                text: 'Emails copied to clipboard.',
            });
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Failed to copy emails.',
            });
        });
    };

    const handleExportCSV = () => {
        const csvContent = "data:text/csv;charset=utf-8,"
            + ["Email"].concat(users.map(user => user.email)).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "remind_so-waitlist_user_emails.csv");
        document.body.appendChild(link); // Required for Firefox

        link.click();

        Swal.fire({
            icon: 'success',
            title: 'Exported!',
            text: 'Emails have been exported to CSV.',
        });
    };

    return (
        <>
            <div className="mt-5 flex justify-between gap-4">
                <button
                    className="btn btn-ghost"
                    onClick={handleCopy}
                >
                    Copy
                </button>
                <button
                    className="btn bg-yellow-700 text-white"
                    onClick={handleExportCSV}
                >
                    Export to CSV
                </button>
            </div>
        </>
    )
}

export default ListButtons