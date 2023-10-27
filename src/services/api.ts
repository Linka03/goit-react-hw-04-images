// В api.ts
export const getImages = async (query, page) => {
  try {
    const apiKey = '40250355-d0c6ab5be835447af42ca5fe7';
    const perPage = 12;
    const apiUrl = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return { hits: data.hits, error: null };
  } catch (error) {
    console.error('Error fetching images:', error);
    return { hits: [], error: error.message };
  }
};
