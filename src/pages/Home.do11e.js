// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    document.addEventListener('DOMContentLoaded', async () => {
        const blogContainer = document.getElementById('blog-container');
        const apiUrl = 'http://localhost:1337/api/blogs'; // Strapi blogs endpoint
        const apiToken = '4debe2745484dc881542a2c41fa19f7e898e2fcc6ebd028416c834b15187553012b187b79a9c40ac650116a041e4d2c37abe5a71d38cfcfe032e5d4fa5cef83b033b75909254a8b870a2c020a0a4bd444ecb0ede226f68ff95f6f6cd7cb253b714391830d62f67d0a6ac60cb715e4fdc9189993a5f6acf01e1f9a9a2d3a10f28';
    
    
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            const posts = data.data;
    
            if (posts.length === 0) {
                blogContainer.innerHTML = '<p>No blog posts found.</p>';
            } else {
                blogContainer.innerHTML = ''; // Clear loading message
    
                // Sort posts by most recent `createdAt` date in descending order
                posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
                posts.forEach((post) => {
                    const { Title, Content, documentId, Featured_Image } = post;
    
                    // Determine the featured image URL
                    const featuredImageUrl = Featured_Image?.[0]?.formats?.small?.url 
                        ? `http://localhost:1337${Featured_Image[0].formats.small.url}` 
                        : Featured_Image?.[0]?.url 
                        ? `http://localhost:1337${Featured_Image[0].url}` 
                        : '';
    
                    // Create post HTML
                    const postElement = document.createElement('div');
                    postElement.classList.add('blog-post');
    
                    postElement.innerHTML = `
                        ${featuredImageUrl ? `<img src="${featuredImageUrl}" alt="${Title}" class="blog-image" />` : ''}
                        <h2><a href="blog-post.html?documentId=${documentId}">${Title}</a></h2>
                        <p>${Content[0]?.children[0]?.text.slice(0, 100)}...</p>
                        <a class="read-more" href="blog-post.html?documentId=${documentId}">Read More</a>
                    `;
    
                    blogContainer.appendChild(postElement);
                });
            }
        } catch (error) {
            blogContainer.innerHTML = `<p>Error loading posts: ${error.message}</p>`;
        }
    });
    
});

});
