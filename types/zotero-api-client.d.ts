declare module 'zotero-api-client' {
  const api: (key?: string) => ApiClient;

  interface ApiClient {
    /**
     * API 使用哪个 library
     * @param typeOrKey
     * @param id
     * @private
     */
    library(typeOrKey: string | 'user' | 'group', id?): PartialApiClient;
  }

  interface PartialApiClient extends Item, Search {
    collections(collections?: string): Item;
  }

  interface Item {
    items(items?: string): Execution;
  }

  interface Search {
    searches(searches?: string): Execution;
  }

  interface Execution {
    get<DataType = Zotero.Data, IsArray = true>(
      opts?: any,
    ): Promise<Zotero.ApiGetResponse<DataType, IsArray>>;
    post(data: any[], opts?: any): Promise<any>;
    put(data: any, opts?: any): Promise<any>;
    patch(data: any, opts?: any): Promise<any>;
    del(keysToDelete: any[], opts?: any): Promise<any>;
  }
  async function itemTypes(): Object;
  async function itemFields(): Object;
  async function creatorFields(): Object;
  async function itemTypeFields(itemType: string): Object;
  async function itemTypeCreatorTypes(itemType: string): Object;
  async function template(itemType: string): Object;

  async function subcollections(): Object;
  async function publications(): Object;
  async function tags(tags?: string): Object;
  async function top(): Object;
  async function trash(): Object;
  async function children(): Object;
  async function settings(): Object;
  async function deleted(since: any): Object;
  async function groups(): Object;
  async function version(version?: number): Object;
  async function attachment(fileName: string, file: ArrayBuffer, mtime: number): Object;
  async function registerAttachment(
    fileName: string,
    fileSize: number,
    mtime: number,
    md5sum: string,
  ): Object;

  async function attachmentUrl(): Object;

  export default api;
}
