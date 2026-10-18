import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Utils } from '../src/scripts/utils/helpers.js';

describe('Utils', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
    });

    afterEach(() => {
        document.body.innerHTML = '';
        vi.restoreAllMocks();
    });

    describe('showNotification', () => {
        it('should create notification element', () => {
            Utils.showNotification('Test message', 'info');

            const notification = document.querySelector('.fixed');
            expect(notification).toBeTruthy();
            expect(notification.textContent).toBe('Test message');
        });

        it('should create success notification with correct styling', () => {
            Utils.showNotification('Success!', 'success');

            const notification = document.querySelector('.fixed');
            expect(notification.className).toContain('bg-green-500');
            expect(notification.className).toContain('text-white');
        });

        it('should create error notification with correct styling', () => {
            Utils.showNotification('Error!', 'error');

            const notification = document.querySelector('.fixed');
            expect(notification.className).toContain('bg-red-500');
            expect(notification.className).toContain('text-white');
        });

        it('should create info notification by default', () => {
            Utils.showNotification('Info');

            const notification = document.querySelector('.fixed');
            expect(notification.className).toContain('bg-blue-500');
        });

        it('should remove notification after 3 seconds', async () => {
            vi.useFakeTimers();

            Utils.showNotification('Temporary');

            expect(document.querySelector('.fixed')).toBeTruthy();

            vi.advanceTimersByTime(3000);

            await new Promise(resolve => setTimeout(resolve, 0));
            expect(document.querySelector('.fixed')).toBeFalsy();

            vi.useRealTimers();
        });
    });

    describe('addFadeInAnimation', () => {
        it('should add fade-in class to element', () => {
            const element = document.createElement('div');
            document.body.appendChild(element);

            Utils.addFadeInAnimation(element);

            expect(element.classList.contains('fade-in')).toBe(true);
        });

        it('should work with elements that already have classes', () => {
            const element = document.createElement('div');
            element.className = 'existing-class';
            document.body.appendChild(element);

            Utils.addFadeInAnimation(element);

            expect(element.classList.contains('existing-class')).toBe(true);
            expect(element.classList.contains('fade-in')).toBe(true);
        });
    });

    describe('smoothScrollTo', () => {
        it('should call scrollIntoView with correct parameters', () => {
            const element = document.createElement('div');
            const scrollSpy = vi.spyOn(element, 'scrollIntoView');

            Utils.smoothScrollTo(element);

            expect(scrollSpy).toHaveBeenCalledWith({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});
