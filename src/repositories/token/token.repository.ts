import axios from "axios";
import config from "../../config/config.json";
import { RefreshTokenParams } from "./token.param";
import { RefreshResponse } from "../../types/token/token.type";

class TokenRepository {
  public async getRefreshToken(refreshToken: RefreshTokenParams): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(`${config.serverUrl}/auth/refresh`, refreshToken);
    return data;
  }
}

export default new TokenRepository();
