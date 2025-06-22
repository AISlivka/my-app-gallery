export enum WSServerMessageKey {
  ActiveBetsResponse = 'active_bets_response',
  BalanceUpdatedNotification = 'balance_updated_notification',
  BetSettingsResponse = 'bet_settings_response',
  BetUpdatedNotification = 'bet_updated_notification',
  ErrorMessage = 'error_message',
  Meta = 'meta',
  Ping = 'ping',
  Pong = 'pong',
  RoundInfoUpdate = 'round_info_update',
  RoundResponse = 'round_response',
  UpdateAutoplayOptionsResponse = 'update_autoplay_options_response',
  BetSettingsUpdate = 'bet_settings_update',
  RoundsHistoryResponse = 'rounds_history_response',
}

export enum WSClientMessageKey {
  Pong = 'pong',
  Ping = 'ping',
  ActiveBetsRequest = 'active_bets_request',
  CreateBetRequest = 'create_bet_request',
  CancelBetRequest = 'cancel_bet_request',
  CashoutBetRequest = 'cashout_bet_request',
  CurrentRoundRequest = 'current_round_request',
  PreviousRoundRequest = 'previous_round_request',
  UpdateAutoplayOptionsRequest = 'update_autoplay_options_request',
  BetSettingsRequest = 'bet_settings_request',
  RoundsHistoryRequest = 'rounds_history_request',
}
