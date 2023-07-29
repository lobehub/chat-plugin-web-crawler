declare module Zotero {
  export interface Resource {
    collections: string;
    items?: any;
    library: string;
  }

  export interface Options {
    apiAuthorityPart: string;
    cache: string;
    contentType: string;
    credentials: string;
    executors: any[];
    format: string;
    method: string;
    mode: string;
    pretend: boolean;
    redirect: string;
    resource: Resource;
    retry: number;
    retryCount: number;
    retryDelay?: any;
    uploadRegisterOnly?: any;
    zoteroApiKey: string;
  }

  export interface Relations {}

  export interface Condition {
    condition: string;
    operator: string;
    value: string;
  }

  interface BaseData {
    key: string;
    version: number;
  }

  export interface Data extends BaseData {
    name?: string;

    accessDate: string;
    charset: string;
    contentType: string;
    dateAdded: Date;
    dateModified: Date;
    filename: string;
    itemType: string;
    linkMode: string;
    md5: string;
    mtime: number;
    note: string;
    parentItem: string;
    relations: Relations;
    tags: any[];
    title: string;
    url: string;
  }

  export interface SearchData extends BaseData {
    conditions: Condition[];
    name: string;
  }
  export interface Alternate {
    href: string;
    type: string;
  }

  export interface Links {
    alternate: Alternate;
  }

  export interface Library {
    id: number;
    links: Links;
    name: string;
    type: string;
  }

  export interface Alternate2 {
    href: string;
    type: string;
  }

  export interface Enclosure {
    href: string;
    length: number;
    title: string;
    type: string;
  }

  export interface Self {
    href: string;
    type: string;
  }

  export interface Up {
    href: string;
    type: string;
  }

  export interface Links2 {
    alternate: Alternate2;
    enclosure: Enclosure;
    self: Self;
    up: Up;
  }

  export interface Meta {
    numChildren: boolean;
  }

  export interface Raw<DataType> {
    data: DataType;
    key: string;
    library: Library;
    links: Links2;
    meta: Meta;
    /**
     * 插入记录时的版本
     */
    version: number;
  }

  export interface Map {
    'content-type': string;
    'last-modified-version': string;
    link: string;
    'total-results': string;
    'zotero-api-version': string;
  }

  export interface Headers {
    map: Map;
  }

  export interface Response {
    _bodyBlob: BodyBlob;
    bodyUsed: boolean;
    headers: Headers;
    ok: boolean;
    status: number;
    statusText: string;
    type: string;
    url: string;
  }

  export interface ApiGetResponse<DataType = Data, IsArray = true> {
    options: Options;
    raw: IsArray extends true ? Raw<DataType>[] : Raw<DataType>;
    response: Response;
  }
}
