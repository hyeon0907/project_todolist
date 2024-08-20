import { instance } from "../utils/instance";

export async function updatetodoApi(todoId, modifyTodo) {
    let response = null;
    try {
        response = await instance.put(`/todo/${todoId}`, modifyTodo);
    } catch(e) {
        console.error(e);
        response = e.response;
    }
    return response;
}