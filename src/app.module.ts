import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MovementModule } from './movement/movement.module';
import { CategoryModule } from './category/category.module';
import { AccountModule } from './account/account.module';
import { BalanceModule } from './balance/balance.module';

@Module({
  imports: [UserModule, MovementModule, CategoryModule, AccountModule, BalanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
