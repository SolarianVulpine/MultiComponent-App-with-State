import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

if (typeof window.PointerEvent === 'undefined') {
        window.PointerEvent = class PointerEvent extends MouseEvent { } as typeof PointerEvent;
}

afterEach(() => {
        cleanup();
});
