import sendRequest from "./send-request";

const BASE_URL = "/api/todos";

export async function addTodo(userData) {
    // return sendRequest(`${BASE_URL}/addTodo`, "POST", userData)
    return sendRequest(BASE_URL, "POST", userData)
}
// get all items
export function index() {
    return sendRequest(BASE_URL);
}

// update state
export function updateTodo(id) {
    return sendRequest(`${BASE_URL}/updateTodo`, "PUT", id)
}

// delete todo
export function deleteTodo(id) {
    return sendRequest(`${BASE_URL}/${id}`, "DELETE")
}
