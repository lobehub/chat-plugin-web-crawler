declare module Stock {
  /**
   * 归属净利润
   *  Attributable net profit
   */
  export interface ANP {
    sjd: string;
    pjxs: string;
    zhpj: string;
    mr: string;
    zc: string;
    zx: string;
    jc: string;
    mc: string;
    zjs: string;
  }

  export interface CPS {
    jgmc: string;
    sy: string;
    syl: string;
    sy1: string;
    syl1: string;
    sy2: string;
    syl2: string;
    sy3: string;
    syl3: string;
  }

  export interface Jgyc {
    baseYear: number;
    data: CPS[];
  }

  export interface Mgsy {
    year: string;
    value: string;
    ratio: string;
  }

  export interface Datum2 {
    rq: string;
    mgsy: string;
    syycmgsy: string;
    mgjzc: string;
    jzcsyl: string;
    jlr: string;
    yyzsr: string;
    yylr: string;
  }

  export interface Yctj {
    title: string;
    data: Datum2[];
  }

  export interface Jzcsyl {
    year: string;
    value: string;
    ratio: string;
  }

  export interface Gsjlr {
    year: string;
    value: string;
    ratio: string;
  }

  export interface Yysr {
    year: string;
    value: string;
    ratio: string;
  }

  export interface Datum3 {
    sj: string;
    jg: string;
    yjy: string;
    value: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    pj: string;
  }

  export interface Mgsy2 {
    baseYear: number;
    data: Datum3[];
  }

  export interface Datum4 {
    sj: string;
    jg: string;
    yjy: string;
    value: string;
    value1: string;
    value2: string;
    value3: string;
    value4: string;
    value5: string;
    pj: string;
  }

  export interface Jlr {
    baseYear: number;
    data: Datum4[];
  }

  export interface Ycmx {
    mgsy: Mgsy2;
    jlr: Jlr;
  }

  export interface EasyMoneyProfitResponse {
    pjtj: ANP[];
    jgyc: Jgyc;
    mgsy: Mgsy[];
    yctj: Yctj;
    jzcsyl: Jzcsyl[];
    gsjlr: Gsjlr[];
    yysr: Yysr[];
    ycmx: Ycmx;
  }
}
