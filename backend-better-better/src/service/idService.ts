import { identityNumber } from './../../../../backend/src/idModel';
import { IdRepository } from "../Repository/idRepository";
import { IdentityNumber } from "../entities/identityNumber.entity";

export class IdService {
  private idRepository: IdRepository = new IdRepository();

  async createService(identityDocument: string): Promise<IdentityNumber> {
    try {
      const identityNumber: IdentityNumber = {
        identityDocument,
        missingNumber: String(this.findMissingNumber(identityDocument.split(''))),
      };

      return this.idRepository.create(identityNumber);
    } catch (error) {
      throw new Error(error);
    }
  }
  
  private findMissingNumber(array:  string[]) : number {
    return (10 - array.reduce((currentValue, digit, index) => {
      return (
        currentValue +
        parseInt(digit) * ((index % 2) + 1) % 10 +
        Math.floor((parseInt(digit) * ((index % 2) + 1)) / 10)
      );
    }, 0) % 10 );
  }
}

export const idService = new IdService();
