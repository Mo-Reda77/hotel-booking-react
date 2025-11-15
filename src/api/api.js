import axios from "axios";

const api = axios.create({
  baseURL: "https://your-backend-domain.com/api", 
});

// مثال توضيحي فقط
export const getPopularDestinations = () => api.get("/destinations");
export const getFeaturedHotels = () => api.get("/hotels/featured");
export const getExclusiveDeals = () => api.get("/deals");

export default api;