import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '@core/services/http/error.service';

@Injectable()
export class ServerSideErrorHandler implements ErrorHandler {

  constructor(private client: ErrorService) { }

  handleError(error) {
    this.client.handleError(error);
    console.error(error);
    alert(error);
  }
}
