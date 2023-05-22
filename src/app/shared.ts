import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  sharedVariable: string | undefined;
  leagues: any;
}

@Injectable()
export class SharedLeagues {
  name!: string;
  checked!: boolean;
}