export const formatAuthorName = (name) => {
    const n = name.replace("content/author/").replace(".md");
    return n.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}
