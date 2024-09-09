import ky from "ky";
import { ErrUnsuppotedMethod, HttpMethod } from 'src/pkg';

export async function request<T>(path: string, method: HttpMethod, body?: object): Promise<T> {
  let result: T;

  switch (method) {
    case HttpMethod.GET:
      result = await ky.get(path).json<T>();
      break;
    case HttpMethod.POST:
      result = await ky.post(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
      break;
    case HttpMethod.PUT:
      result = await ky.put(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
      break;
    case HttpMethod.PATCH:
      result = await ky.patch(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
      break;
    default:
      throw ErrUnsuppotedMethod;
  }

  return result;
}