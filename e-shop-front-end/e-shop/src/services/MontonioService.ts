import { basename } from "path";
import { PaymentConfig } from "../domain/montonio/PaymentConfig";
import { MontonioBaseService } from "./MontonioBaseService";

export class MontonioPaymentService extends MontonioBaseService{
    constructor(){
        super("");
    }
    async getPaymentMethods(token : string): Promise<PaymentConfig | undefined> {
        try {
            const response = await this.axios.get<PaymentConfig>('/stores/payment-methods', { headers: {
                Authorization: `Bearer ${token}`,
            },
            });

            console.log('response', response);
            if (response.status === 200) {
                return response.data;
            }
            return undefined;
        } catch (e) {
            console.log('error: ', (e as Error).message);
            return undefined;
        }
    }
}