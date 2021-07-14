import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  BetBear,
  BetBull,
  Claim,
  ClaimTreasury,
  EndRound,
  LockRound,
  MinBetAmountUpdated,
  OwnershipTransferred,
  Pause,
  Paused,
  RatesUpdated,
  RewardsCalculated,
  StartRound,
  Unpause,
  Unpaused
} from "../generated/Contract/Contract"
import { Round } from "../generated/schema"

export function handleBetBear(event: BetBear): void {
  var round = Round.load(event.params.currentEpoch.toHexString());
  round.bearAmount = round.bearAmount.plus(event.params.amount);
  round.totalAmount = round.totalAmount.plus(event.params.amount);
  round.save();
}

export function handleBetBull(event: BetBull): void {
  var round = Round.load(event.params.currentEpoch.toHexString());
  round.bullAmount = round.bullAmount.plus(event.params.amount);
  round.totalAmount = round.totalAmount.plus(event.params.amount);
  round.save();
}

export function handleClaim(event: Claim): void { }

export function handleClaimTreasury(event: ClaimTreasury): void { }

export function handleStartRound(event: StartRound): void {
  var round = new Round(event.params.epoch.toHexString());
  round.epoch = event.params.epoch;
  round.startBlock = event.params.blockNumber;
  round.bearAmount = BigInt.fromI32(0);
  round.bullAmount = BigInt.fromI32(0);
  round.totalAmount = BigInt.fromI32(0);
  round.save();
}

export function handleEndRound(event: EndRound): void {
  var round = Round.load(event.params.epoch.toHexString());
  round.endBlock = event.params.blockNumber;
  round.closePrice = event.params.price;
  round.save();
}

export function handleLockRound(event: LockRound): void {
  var round = Round.load(event.params.epoch.toHexString());
  round.lockBlock = event.params.blockNumber;
  round.lockPrice = event.params.price;
  round.save();
}

export function handleRewardsCalculated(event: RewardsCalculated): void {
  var round = Round.load(event.params.epoch.toHexString());
  round.rewardAmount = event.params.rewardAmount;
  round.rewardBaseCalAmount = event.params.rewardBaseCalAmount;
  round.treasuryAmount = event.params.treasuryAmount;
  round.save();
}

export function handleMinBetAmountUpdated(event: MinBetAmountUpdated): void { }

export function handleOwnershipTransferred(event: OwnershipTransferred): void { }

export function handlePause(event: Pause): void { }

export function handlePaused(event: Paused): void { }

export function handleRatesUpdated(event: RatesUpdated): void { }

export function handleUnpause(event: Unpause): void { }

export function handleUnpaused(event: Unpaused): void { }
