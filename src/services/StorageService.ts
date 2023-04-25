import { StorageKey } from "models/storageModel";
class StorageService {

    async get(keys?: string | string[] | { [key: string]: any } | null): Promise<{ [key: string]: any }> {
      return chrome.storage.local.get(keys);
    }

    async set(items: { [key: string]: any }): Promise<void> {
      return chrome.storage.local.set(items)
    }

    async remove(keys: string | string[]): Promise<void> {
      return chrome.storage.local.remove(keys);
    }

    async getAll(): Promise<{ [key: string]: any }> {
      return this.get();
    }

    async erase(): Promise<void>{
      await chrome.storage.local.clear();
    }

    async getUserId(): Promise<any> {
      const data = await this.get([StorageKey.USER_ID]);
      let userId: number | undefined;
      if(typeof data[StorageKey.USER_ID] === 'undefined') {
        userId = Date.now();
        await this.set({[StorageKey.USER_ID]: userId});
      }
      return (userId && {[StorageKey.USER_ID]: userId}) || data;
    }
}

export default new StorageService();