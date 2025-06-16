const BASE_URL = 'http://localhost:3000/task';

export const API_URLS = {
    LOAD_TASKS: `${BASE_URL}/loadTasks`,
    SEARCH_TASKS: (query) => `${BASE_URL}/searchTasks?q=${encodeURIComponent(query)}`,
    LOAD_ARCHIVED_TASKS: `${BASE_URL}/loadArchivedTasks`,
    SEARCH_ARCHIVED_TASKS: (query) => `${BASE_URL}/searchArchivedTasks?q=${encodeURIComponent(query)}`
};