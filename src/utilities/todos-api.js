import sendRequest from "./send-request";

const BASE_URL = "/api/todos";

export async function addTodo(userData) {
    return sendRequest(`${BASE_URL}/addTodo`, "POST", userData)
}
// get all items
export function index() {
    return sendRequest(BASE_URL);
}

