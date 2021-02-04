export function createPost(id, title, text) {
    return {
        id: id,
        title: title,
        text: text,
        date: new Date().toDateString()
    }
}