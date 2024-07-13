export const apiHelper = async (apiCall) => {
    try {
        const response = await apiCall();
        return response;
    } catch (error) {
        console.log("API call failed:", error?.message);
        // throw error; 
    }
};