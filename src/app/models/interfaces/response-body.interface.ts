import { SuccessfullResponseBody } from './successfull-response-body.interface';

export interface ResponseBody extends SuccessfullResponseBody {
  key?: string;
  msg?: string;
}
