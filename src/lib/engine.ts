import EventEmiter from "./emiter";
import store, { useLocalStorage } from "./rxStorage";


window.gurl = 'http://localhost:3000/';
export const STORE = store.init(useLocalStorage());
globalThis.EVENT = new EventEmiter();

export async function send(url, data, metod) {
    let dataServer = {
        method: metod ?? 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if(metod!=='GET') dataServer.body = JSON.stringify(data);

    const request = await fetch(window.gurl + url, dataServer);
    return request.json();
}