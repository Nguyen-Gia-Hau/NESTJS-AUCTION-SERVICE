import { Module } from "@nestjs/common";
import { BiddingHistoryModule } from "./bidding-history/bidding-history.module";
import { AuctionSessionModule } from "./auction-session/auction-session.module";
import { AuctionItemModule } from "./auction-item/auction-item.module";
import { HistoriesModule } from "./histories/histories.module";
import { DepositsModule } from "./deposits/deposits.module";
import { AuctionSessionHistoryModule } from './auction-session-history/auction-session-history.module';

@Module({
  imports: [
    BiddingHistoryModule,
    AuctionSessionModule,
    AuctionItemModule,
    HistoriesModule,
    DepositsModule,
    AuctionSessionHistoryModule
  ]
})
export class FeaturesModule { }
