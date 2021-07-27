import { BigInt } from "@graphprotocol/graph-ts"
import {
  StreamExchange,
  Distribution
} from "../generated/StreamExchange/StreamExchange"
import { DistributionEntity } from "../generated/schema"

export function handleDistribution(event: Distribution): void {
  let entity = new DistributionEntity(event.transaction.hash.toHexString())
  entity.token = event.params.token;
  entity.totalAmount = event.params.totalAmount;
  entity.feeCollected = event.params.feeCollected;
  entity.save();
}
