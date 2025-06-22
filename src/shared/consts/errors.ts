export enum ErrorStatusCode {
  NoError = 0,
  AccessDenied = 1,
  NoInternet = 2,
  SomethingWentWrong = 3,
  InvalidToken = 4,

  Close = 1006,
  TokenExpired = 4000,
  PongMissing = 4001,
  ConnectionSlotsFull = 4004,
  PlayingInAnotherTab = 4005,
}
