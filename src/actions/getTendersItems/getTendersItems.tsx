import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiLicita1 } from "../../config/api/api1";


export const getTendersItems = async (code: string) => {
    try {
      const token = await AsyncStorage.getItem('token');
    
      const response = await apiLicita1.get(`/tender/tender-items-detail/${code}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response   
    } catch (error) {
      console.error('Error fetching agile details:', error);
      throw new Error('No se pudieron obtener los detalles de la compra ágil');
    }
  };
  


















