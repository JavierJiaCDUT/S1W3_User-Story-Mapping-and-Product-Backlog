import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { StorageManager } from '../src/scripts/utils/storage.js';

describe('StorageManager', () => {
    let storage;
    const namespace = 'test-app';

    beforeEach(() => {
        storage = new StorageManager(namespace);
        localStorage.clear();
    });

    afterEach(() => {
        localStorage.clear();
    });

    describe('Initialization', () => {
        it('should create instance with default namespace', () => {
            const defaultStorage = new StorageManager();
            expect(defaultStorage.namespace).toBe('pm-learning-app');
        });

        it('should create instance with custom namespace', () => {
            expect(storage.namespace).toBe(namespace);
        });

        it('should check localStorage availability', () => {
            expect(storage.isAvailable).toBe(true);
        });
    });

    describe('Save and Load', () => {
        it('should save and load string data', () => {
            const key = 'test-string';
            const value = 'Hello World';

            const saveResult = storage.save(key, value);
            expect(saveResult).toBe(true);

            const loaded = storage.load(key);
            expect(loaded).toBe(value);
        });

        it('should save and load object data', () => {
            const key = 'test-object';
            const value = { name: 'John', age: 30, active: true };

            storage.save(key, value);
            const loaded = storage.load(key);

            expect(loaded).toEqual(value);
        });

        it('should save and load array data', () => {
            const key = 'test-array';
            const value = [1, 2, 3, 4, 5];

            storage.save(key, value);
            const loaded = storage.load(key);

            expect(loaded).toEqual(value);
        });

        it('should return default value for non-existent key', () => {
            const defaultValue = 'default';
            const loaded = storage.load('non-existent', defaultValue);

            expect(loaded).toBe(defaultValue);
        });

        it('should return null for non-existent key without default', () => {
            const loaded = storage.load('non-existent');
            expect(loaded).toBeNull();
        });

        it('should use namespace in storage keys', () => {
            storage.save('test', 'value');
            const rawKey = `${namespace}:test`;
            const rawValue = localStorage.getItem(rawKey);

            expect(rawValue).toBe(JSON.stringify('value'));
        });
    });

    describe('Remove', () => {
        it('should remove stored data', () => {
            storage.save('test', 'value');
            expect(storage.load('test')).toBe('value');

            storage.remove('test');
            expect(storage.load('test')).toBeNull();
        });
    });

    describe('Clear', () => {
        it('should clear all data for namespace', () => {
            storage.save('key1', 'value1');
            storage.save('key2', 'value2');
            storage.save('key3', 'value3');

            storage.clear();

            expect(storage.load('key1')).toBeNull();
            expect(storage.load('key2')).toBeNull();
            expect(storage.load('key3')).toBeNull();
        });

        it('should not clear data from other namespaces', () => {
            const otherStorage = new StorageManager('other-namespace');

            storage.save('test', 'value1');
            otherStorage.save('test', 'value2');

            storage.clear();

            expect(storage.load('test')).toBeNull();
            expect(otherStorage.load('test')).toBe('value2');
        });
    });

    describe('Export and Import', () => {
        it('should export all data', () => {
            storage.save('key1', 'value1');
            storage.save('key2', { nested: 'object' });
            storage.save('key3', [1, 2, 3]);

            const exported = storage.exportData();

            expect(exported).toHaveProperty('version');
            expect(exported).toHaveProperty('timestamp');
            expect(exported).toHaveProperty('data');
            expect(exported.data).toEqual({
                key1: 'value1',
                key2: { nested: 'object' },
                key3: [1, 2, 3],
            });
        });

        it('should import data successfully', () => {
            const data = {
                version: '1.0',
                timestamp: new Date().toISOString(),
                data: {
                    key1: 'imported1',
                    key2: 'imported2',
                }
            };

            const result = storage.importData(data);
            expect(result).toBe(true);

            expect(storage.load('key1')).toBe('imported1');
            expect(storage.load('key2')).toBe('imported2');
        });

        it('should handle invalid import data', () => {
            const result = storage.importData(null);
            expect(result).toBe(false);
        });

        it('should preserve timestamp in export', () => {
            storage.save('test', 'value');
            const exported = storage.exportData();

            expect(exported.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
        });
    });

    describe('Error Handling', () => {
        it('should handle JSON parse errors gracefully', () => {
            // Manually corrupt localStorage data
            localStorage.setItem(`${namespace}:corrupted`, 'not-valid-json{');

            const result = storage.load('corrupted', 'fallback');
            expect(result).toBe('fallback');
        });

        it('should handle circular reference errors', () => {
            const circular = { name: 'test' };
            circular.self = circular;

            const result = storage.save('circular', circular);
            expect(result).toBe(false);
        });
    });
});
