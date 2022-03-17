// export async function getTasks() {
    // const response = await axios.get('someUrlEndPointForTasks')
    // return response.data
// }

// Above is what a real fetch might look like
// Below is a hardcoded "response" without returning a promise

const taskData = [
    {name: "Do Taxes", priority: "High", status: "Incomplete"},
    {name: "Clean Room", priority: "Low", status: "Incomplete"},
    {name: "Wash Dishes", priority: "Medium", status: "Complete"},
    {name: "Change Oil", priority: "High", status: "Incomplete"},
    {name: "Read Book", priority: "Low", status: "Incomplete"}
]

export function getTasks(action) {
    console.log(action)
    if (action === "ALL") {
        const response = {
            data: taskData
        }
        return response.data
    } else if (action === "INCOMP") {
        const response = {
            data: taskData.filter(task => task.status === "Incomplete")
        }
        return response.data
    }
}