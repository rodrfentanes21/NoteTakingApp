
import axios from 'axios';

export function getNotes() {
    return axios
        .get("http://192.168.56.1:8000/api/notes/")
        .then(res => res.data)
}

export function postNote({ title, body }) {
    return axios.post("http://192.168.56.1:8000/api/notes/", {
        'title': title,
        'body': body,
    })
        .then(res => res.data)
}
