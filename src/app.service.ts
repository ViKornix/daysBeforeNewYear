import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getDays() {
    const now = new Date()
    const newYear = new Date(now.getFullYear(), 11, 31)
    const diff = newYear.getTime() - now.getTime()
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24))

    return {
      data: {
        daysBeforeNewYear: days,
        now: now.toLocaleString()
      }
    }
  }
}
