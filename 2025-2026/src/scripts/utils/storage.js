// 存储管理器
export class StorageManager {
    constructor(namespace = 'pm-learning-app') {
        this.namespace = namespace;
        this.isAvailable = this.checkAvailability();
    }

    checkAvailability() {
        try {
            const test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            console.warn('localStorage is not available:', e);
            return false;
        }
    }

    save(key, data) {
        if (!this.isAvailable) return false;

        try {
            const value = JSON.stringify(data);
            localStorage.setItem(`${this.namespace}:${key}`, value);
            return true;
        } catch (e) {
            console.error('Storage save failed:', e);
            return false;
        }
    }

    load(key, defaultValue = null) {
        if (!this.isAvailable) return defaultValue;

        try {
            const value = localStorage.getItem(`${this.namespace}:${key}`);
            return value ? JSON.parse(value) : defaultValue;
        } catch (e) {
            console.error('Storage load failed:', e);
            return defaultValue;
        }
    }

    remove(key) {
        if (!this.isAvailable) return;
        localStorage.removeItem(`${this.namespace}:${key}`);
    }

    clear() {
        if (!this.isAvailable) return;

        Object.keys(localStorage)
            .filter(key => key.startsWith(`${this.namespace}:`))
            .forEach(key => localStorage.removeItem(key));
    }

    exportData() {
        if (!this.isAvailable) return null;

        const data = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            data: {}
        };

        Object.keys(localStorage)
            .filter(key => key.startsWith(`${this.namespace}:`))
            .forEach(key => {
                const shortKey = key.replace(`${this.namespace}:`, '');
                data.data[shortKey] = JSON.parse(localStorage.getItem(key));
            });

        return data;
    }

    importData(data) {
        if (!this.isAvailable || !data || !data.data) return false;

        try {
            Object.keys(data.data).forEach(key => {
                this.save(key, data.data[key]);
            });
            return true;
        } catch (e) {
            console.error('Storage import failed:', e);
            return false;
        }
    }
}

// 默认导出单例
export default new StorageManager();
