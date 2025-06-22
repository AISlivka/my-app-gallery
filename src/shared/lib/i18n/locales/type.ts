export interface I18nTranslateObject {
  betCard: {
    autoCashout: string;
    autobet: string;
    bet: string;
    nextRound: string;
    cashOut: string;
    waiting: string;
    cancel: string;
    error: {
      default: string;
      2: string;
      8: string;
      9: string;
    };
  };
  betHistory: {
    tabs: {
      allBets: string;
      myBets: string;
      topBets: string;
    };
  };
  provablyFair: string;
  bet: string;
  cashOut: string;
  win: string;
  round: string;
  gameLimits: string;
  animation: string;
  music: string;
  sound: string;
  fairnessCheck: string;
  rulesModal: {
    title: string;
    text: string;
    imageList: {
      1: string;
      2: string;
      3: string;
    };
    infoList: {
      1: {
        title: string;
        text: string;
      };
      2: {
        title: string;
        text: string;
      };
      3: {
        title: string;
        text: string;
      };
      4: {
        title: string;
        text: string;
      };
    };
  };
  roundFairnessCheckModal: {
    title: string;
    roundInformation: string;
    text: string;
    enterSalt: string;
    checkFairness: string;
    verification: string;
    info: {
      title: string;
      textList: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
      text: string;
    };
    error: string;
  };
  roundsHistoryModal: {
    title: string;
  };
  provablyModal: {
    title: string;
    imageList: {
      1: string;
      2: string;
      3: string;
    };
    textList: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
    };
    text: string;
  };
  gameLimitsModal: {
    title: string;
    minBet: string;
    maxBet: string;
    maxX: string;
    maxWin: string;
  };
  disconnectModal: {
    title: string;
    description: string;
  };
  reconnectModal: {
    title: string;
    description: string;
  };
  tokenExpiredModal: {
    title: string;
    description: string;
  };
  invalidTokenModal: {
    title: string;
    description: string;
  };
  genericErrorModal: {
    title: string;
    description: string;
  };
  accessDeniedModal: {
    title: string;
    description: string;
  };
  multipleSessionsModal: {
    title: string;
    description: string;
    buttonText: string;
  };
  salt: string;
  roundInformation: string;
  hash: string;
  roundId: string;
  multiplier: string;
  notification: {
    youWin: string;
    betCashed: string;
  };
  dataCopied: string;
  roundCoef: {
    text: string;
  };
  allBets: {
    totalBets: string;
    lastRound: string;
    error: string;
  };
  topBets: {
    daily: string;
    weekly: string;
    monthly: string;
    error: string;
  };
  myBets: {
    error: string;
  };
  nextRound: string;
}
