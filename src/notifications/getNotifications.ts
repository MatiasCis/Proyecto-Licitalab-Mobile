// getNotificacions.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiLicita } from "../config/api/api";
import { POLLING_INTERVAL } from "./NotificationContext";


let isPolling = false;

export const getNotificacions = async () => {
    const token = await AsyncStorage.getItem('token');
    if (isPolling) return;  
    isPolling = true;

    try {
        const response = await apiLicita.get('/notification', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const notification = response.data;
        return notification;
    } catch (error) {
        console.error('Error fetching details:', error);
    } finally {
        isPolling = false; 
    }
};

export function startNotificationPoller() {
    getNotificacions();
    return setInterval(getNotificacions, POLLING_INTERVAL); 
}
