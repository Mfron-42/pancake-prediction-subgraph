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
import { ExampleEntity } from "../generated/schema"

export function handleBetBear(event: BetBear): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.sender = event.params.sender
  entity.currentEpoch = event.params.currentEpoch

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.TOTAL_RATE(...)
  // - contract.adminAddress(...)
  // - contract.bufferBlocks(...)
  // - contract.claimable(...)
  // - contract.currentEpoch(...)
  // - contract.genesisLockOnce(...)
  // - contract.genesisStartOnce(...)
  // - contract.getUserRounds(...)
  // - contract.intervalBlocks(...)
  // - contract.ledger(...)
  // - contract.minBetAmount(...)
  // - contract.operatorAddress(...)
  // - contract.oracleLatestRoundId(...)
  // - contract.oracleUpdateAllowance(...)
  // - contract.owner(...)
  // - contract.paused(...)
  // - contract.refundable(...)
  // - contract.rewardRate(...)
  // - contract.rounds(...)
  // - contract.treasuryAmount(...)
  // - contract.treasuryRate(...)
  // - contract.userRounds(...)
}

export function handleBetBull(event: BetBull): void {}

export function handleClaim(event: Claim): void {}

export function handleClaimTreasury(event: ClaimTreasury): void {}

export function handleEndRound(event: EndRound): void {}

export function handleLockRound(event: LockRound): void {}

export function handleMinBetAmountUpdated(event: MinBetAmountUpdated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePause(event: Pause): void {}

export function handlePaused(event: Paused): void {}

export function handleRatesUpdated(event: RatesUpdated): void {}

export function handleRewardsCalculated(event: RewardsCalculated): void {}

export function handleStartRound(event: StartRound): void {}

export function handleUnpause(event: Unpause): void {}

export function handleUnpaused(event: Unpaused): void {}