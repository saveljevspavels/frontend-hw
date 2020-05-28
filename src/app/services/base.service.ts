import { HttpClient } from '@angular/common/http';
import { SERVICE_BASE_URL } from '../constants/constants';

export abstract class BaseService {
  constructor(protected http: HttpClient) {}

  protected baseUrl(url: string): string {
    return `${SERVICE_BASE_URL}/${url}`;
  }
}
