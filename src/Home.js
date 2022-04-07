export default function Home() {
    return(
        <div className="container mx-auto px-4">
            <h1 className="text-2xl">My Task</h1>
            <button className="px-3 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-900 text-xs">Add Task</button>


        <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <div className="flex text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <div className="py-3 basis-3/4">Task Name</div>
                <div className="py-3 basis-3/12">Due Date</div>
                <div className="py-3 basis-3/12">Projects</div>
            </div>

            <div className="flex w-full text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <div className="py-3 basis-3/4">Fix module return issues</div>
                <div className="py-3 basis-3/12">4/30/2022</div>
                <div className="py-3 basis-3/12">Testing</div>
            </div>
        </div>
    </div>
    );
}