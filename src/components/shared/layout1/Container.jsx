export default function Container({ children }) {
    return (
        <>
            <div className="ml-0 md:ml-[80px]">
                {children}
            </div>
        </>
    )
}