import { ActiveBetResponse, BetUpdatedNotification } from '@sl/cgp-protobuf-ts/bets';
import { WSServerMessageKey } from './messageKeys';
import { BalanceUpdatedNotification } from '@sl/cgp-protobuf-ts/money';
import { BetSettingsResponse, BetSettingsUpdate } from '@sl/cgp-protobuf-ts/bet_settings';
import { ErrorMessage } from '@sl/cgp-protobuf-ts/main';
import { PingMessage, PongMessage } from '@sl/cgp-protobuf-ts/ping';
import { RoundInfoUpdate, RoundResponse } from '@sl/cgp-protobuf-ts/rounds';
import { UpdateAutoplayOptionsResponse } from '@sl/cgp-protobuf-ts/autoplay';

export interface WSEmitterEvents {
  [WSServerMessageKey.ActiveBetsResponse]: ActiveBetResponse;
  [WSServerMessageKey.BalanceUpdatedNotification]: BalanceUpdatedNotification;
  [WSServerMessageKey.BetSettingsResponse]: BetSettingsResponse;
  [WSServerMessageKey.BetUpdatedNotification]: BetUpdatedNotification;
  [WSServerMessageKey.ErrorMessage]: ErrorMessage;
  [WSServerMessageKey.Ping]: PingMessage;
  [WSServerMessageKey.Pong]: PongMessage;
  [WSServerMessageKey.RoundInfoUpdate]: RoundInfoUpdate;
  [WSServerMessageKey.RoundResponse]: RoundResponse;
  [WSServerMessageKey.UpdateAutoplayOptionsResponse]: UpdateAutoplayOptionsResponse;
  [WSServerMessageKey.BetSettingsUpdate]: BetSettingsUpdate;
}

export type WSEmitterPayloadData =
  | ActiveBetResponse
  | BalanceUpdatedNotification
  | BetSettingsResponse
  | BetUpdatedNotification
  | ErrorMessage
  | RoundInfoUpdate
  | RoundResponse
  | UpdateAutoplayOptionsResponse;
