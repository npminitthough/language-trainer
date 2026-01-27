const API_URL = "/api"

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
    // get token from local storage
    const token = localStorage.getItem('token');
    
    // set up headers
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    }

    // make the request
    const response = await fetch(`${API_URL}${endpoint}`, {...options, headers})

    // handle non-OK responses
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    // return response data
    return response.json();
}