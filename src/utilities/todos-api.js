import sendRequest from "./send-request";

const BASE_URL = "/api/todos";

export async function addTodo(userData) {
    return sendRequest(BASE_URL, "POST", userData)
}


