export const getAuthorPostsCount = (posts) => {
    const allAuthor = posts.map((author) => author.frontMatter.author);
    const postCount = [];
    allAuthor.forEach((x) => {
        postCount[x] = (postCount[x] || 0) + 1;
    });
    return postCount;
}