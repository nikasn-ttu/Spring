import { CategoryDTO } from "../domain/CategoryDTO";
import { BaseService } from "./BaseService";

export class CategoryService extends BaseService {
    constructor() {
        super("/category");
    }

    async getAllCategories(): Promise<CategoryDTO[] | undefined> {
        try {
            const response = await this.axios.get<CategoryDTO[]>('/');

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