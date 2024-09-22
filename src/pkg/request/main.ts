import ky from "ky";
import { ErrorUnsuppotedMethod, HttpMethod } from 'src/pkg';

export async function request<T>(path: string, method: HttpMethod, body?: object): Promise<T> {
  switch (method) {
    case HttpMethod.GET:
      return ky.get(path).json<T>();
    case HttpMethod.POST:
      return ky.post(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
    case HttpMethod.PUT:
      return ky.put(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
    case HttpMethod.PATCH:
      return ky.patch(path, {
        body: body ? JSON.stringify(body) : null
      }).json<T>();
    default:
      throw ErrorUnsuppotedMethod;
  }
}