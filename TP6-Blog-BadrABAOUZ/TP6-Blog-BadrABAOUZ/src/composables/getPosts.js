export const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };