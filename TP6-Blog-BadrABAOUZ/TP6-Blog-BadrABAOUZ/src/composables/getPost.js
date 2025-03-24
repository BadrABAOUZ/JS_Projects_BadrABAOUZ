export const fetchPost = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    return data;
  };
  
  export const updatePost = async (id, updatedPost) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPost)
    });
  };