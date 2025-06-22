import { I18nTranslateObject } from './type';

export default {
  betCard: {
    autoCashout: 'Auto cashout',
    autobet: 'Autobet',
    bet: 'Bet',
    nextRound: 'For next round',
    cashOut: 'Cash out',
    waiting: 'Waiting',
    cancel: 'Cancel',
    error: {
      default: 'Error',
      2: 'Top up your balance',
      8: 'Round has already ended',
      9: 'Bets have already been closed',
    },
  },
  betHistory: {
    tabs: {
      allBets: 'All',
      myBets: 'My bets',
      topBets: 'Top wins',
    },
  },
  provablyFair: 'Provably Fair',
  bet: 'Bet',
  cashOut: 'Cash out',
  win: 'Win',
  round: 'Round',
  fairnessCheck: 'Fairness check',
  rulesModal: {
    title: 'Rules of the game',
    text: 'Neon Cricket X is a fast-paced gambling game where you can multiply your winnings in seconds. Cash out before the round ends, or you lose your bet. It’s all about risk, excitement, and big wins!',
    imageList: {
      1: 'Enter your desired amount and place a bet before timer is out',
      2: 'Watch the X while the ball is flying',
      3: 'Cash out your winning before the ball explodes!',
    },
    infoList: {
      1: {
        title: 'How to play?',
        text:
          '1. Enter your desired bet amount in betting line and click the button "Bet" before the game starts.\n' +
          '2. You can place one or two bet on the same game.\n' +
          '3. Click the button "Cash out" before the ball explodes\n' +
          '4. If you manage to click the button "Cash out" before the ball explodes, your winnings are equal to the bet amount multiplied by x at the time of "cash out".\n' +
          '5. If the ball explodes, your bet is lost.',
      },
      2: {
        title: 'Autobet and auto cashout',
        text:
          '1. You can activate the automatic bet round option. To do this, click on the "Autobet" button. You can turn off the automatic bet at any time by clicking on the button again. However, to make "cash out", you still need to click the button "cash out".\n' +
          '2. You can also turn on option of automatic withdrawal of funds. Click on the "Auto cashout" button and and enter the desired multiplier for withdrawal. Funds will be withdrawn automatically when this multiplier is reached.',
      },
      3: {
        title: 'Live Bets and bets history',
        text:
          '1. There is at the top of the betting panel a tab "All". When you click this tab, you can see bets made in real time in the current round. You can see all the bets made in the previous round by clicking on the button "Last round".\n' +
          '2. On the "My bets" page you can find information about the history of bets made and withdrawals.\n' +
          '3. The "Top" page contains information of game statistics. Here you can see the winnings of other players for different periods of time.',
      },
      4: {
        title: 'Troubleshooting',
        text: '1. In case of connection breakdown funds are withdrawn at the last multiplier before the Internet connection is broken.',
      },
    },
  },
  roundFairnessCheckModal: {
    title: 'Fairness check',
    roundInformation: 'Round information',
    text: 'Copy Salt, paste it below in Verification field and click Check fairness. It will generate and compare the original Hash.',
    enterSalt: 'Enter the Salt',
    checkFairness: 'Check fairness',
    verification: 'Verification',
    info: {
      title: 'How Provably fair works?',
      textList: {
        1: 'Round ends as soon as the multiplier increases to a certain value.',
        2: 'This value is generated on the game servers when the round begins and is publicly displayed as an encrypted Hash.',
        3: 'At the end of the round, the same Hash will be saved in history along with Salt.',
        4: 'To view the cipher, click on the shield icon in your bet history or on the leaderboard.',
        5: 'You can verify the Hash accuracy in the “Provably fair check” window or with any online calculator.',
      },
      text: 'You can verify the Hash accuracy in the “Fairness Check” window or with any online calculator.',
    },
    error: 'Error',
  },
  roundsHistoryModal: {
    title: 'Round History',
  },
  provablyModal: {
    title: 'Provably Fair',
    imageList: {
      1: 'Click on the shield icon',
      2: 'Copy value from the Salt field',
      3: 'Be sure that we play fair!',
    },
    textList: {
      1: 'Round ends as soon as the multiplier increases to a certain value.',
      2: 'This value is generated on the game servers when the round begins and is publicly displayed as an encrypted Hash.',
      3: 'At the end of the round, the same Hash will be saved in history along with Salt.',
      4: 'To view the cipher, click on the shield icon in your bet history or on the leaderboard.',
      5: 'You can verify the Hash accuracy in the “Provably fair check” window or with any online calculator.',
    },
    text: 'You can verify the Hash accuracy in the “Fairness Check” window or with any online calculator.',
  },
  gameLimitsModal: {
    title: 'Game limits',
    minBet: 'Min bet',
    maxBet: 'Max bet',
    maxX: 'Max X',
    maxWin: 'Max win',
  },
  disconnectModal: {
    title: 'No Internet',
    description: 'Internet connection  is lost.\n' + 'Check your connection and reload the game',
  },
  reconnectModal: {
    title: 'Reconnecting…',
    description: 'Internet connection is not stable.\n' + 'Trying to get you back in game',
  },
  tokenExpiredModal: {
    title: 'Checking access…',
    description: 'Your authorization has expired.\n' + 'You’ll be back in game soon.',
  },
  invalidTokenModal: {
    title: 'Authorization error',
    description: "Try to reload the game. If this doesn't help contact the bookmaker support",
  },
  genericErrorModal: {
    title: 'Something went wrong',
    description: 'Can’t connect to the game.\n' + 'Try to reload it',
  },
  accessDeniedModal: {
    title: 'No access',
    description:
      'Your access to the game has been restricted. Please, contact bookmaker support for details ',
  },
  multipleSessionsModal: {
    title: 'Playing in another tab',
    description:
      'Game is already opened on different device or tab. Return there or continue playing here',
    buttonText: 'Continue here',
  },
  gameLimits: 'Game limits',
  animation: 'Animation',
  roundInformation: 'Round information',
  music: 'Music',
  sound: 'Sound',
  salt: 'Salt:',
  hash: 'Hash:',
  roundId: 'Round ID',
  multiplier: 'Multiplier',
  notification: {
    youWin: 'You win!',
    betCashed: 'Cashed out at',
  },
  dataCopied: 'Data copied',
  roundCoef: {
    text: 'Exploded',
  },
  allBets: {
    totalBets: 'Total bets',
    lastRound: 'Last round',
    error: 'Error',
  },
  topBets: {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    error: 'Error',
  },
  myBets: {
    error: 'Error',
  },
  nextRound: 'Next round',
} satisfies I18nTranslateObject;
