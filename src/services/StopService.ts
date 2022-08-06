import { SERVER_URL } from '@/constants';
import axios from 'axios';

export class StopService {
    private static INSTANCE: StopService;
    
    private constructor(){
        console.log('');
    }

    public static getInstance(): StopService {
        console.log('type is ', this.INSTANCE);
        if (this.INSTANCE) {
            return this.INSTANCE;
        } else {
            this.INSTANCE = new StopService();
        }
        return this.INSTANCE;
    }

    public async getAll() {
        return axios.get(SERVER_URL + '/rutas')
            .then(function (response) {
                // handle success
                console.log(response);
                return response;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                return error;
            });
      
    }
}