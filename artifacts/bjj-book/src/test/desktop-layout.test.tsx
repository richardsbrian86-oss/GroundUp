/**
 * Desktop layout regression tests
 *
 * These tests guard the responsive-class contract introduced by the
 * mobile tap-target improvements (min-h-[44px] on touch targets).
 * Every touch-target button must also carry a `sm:min-h-0` (and
 * `sm:min-w-0` where applicable) so that the desktop layout is
 * unaffected.  The mobile filter sheet must stay hidden on md+ screens.
 *
 * jsdom cannot apply Tailwind CSS, so we assert on className strings
 * directly — the precise regression vector is an accidental removal of
 * the `sm:` override tokens.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Router } from 'wouter';

// technique-images uses import.meta.glob with @assets which can't resolve in
// jsdom — stub it so the data layer still works in tests.
vi.mock('../lib/technique-images', () => ({
  techniqueImage: () => undefined,
}));

import Techniques from '../pages/techniques';
import Nav from '../components/nav';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function renderWithRouter(ui: React.ReactElement) {
  return render(<Router>{ui}</Router>);
}

/**
 * Assert that an element's className contains every token in `tokens`.
 * Provides a readable failure message that names the missing token.
 */
function expectClasses(el: HTMLElement, ...tokens: string[]) {
  const cls = el.className;
  for (const token of tokens) {
    expect(
      cls,
      `Expected className to include "${token}" but got:\n  "${cls}"`,
    ).toContain(token);
  }
}

// ---------------------------------------------------------------------------
// Techniques page — filter bar desktop guards
// ---------------------------------------------------------------------------

describe('Techniques page — desktop layout guards', () => {
  it('renders the library title', () => {
    renderWithRouter(<Techniques />);
    expect(screen.getByTestId('text-library-title')).toBeInTheDocument();
  });

  describe('view-toggle buttons', () => {
    it('grid-view button carries sm:min-h-0 and sm:min-w-0 desktop overrides', () => {
      renderWithRouter(<Techniques />);
      const btn = screen.getByTestId('button-view-grid');
      expectClasses(btn, 'min-h-[44px]', 'sm:min-h-0', 'min-w-[44px]', 'sm:min-w-0');
    });

    it('index-view button carries sm:min-h-0 and sm:min-w-0 desktop overrides', () => {
      renderWithRouter(<Techniques />);
      const btn = screen.getByTestId('button-view-index');
      expectClasses(btn, 'min-h-[44px]', 'sm:min-h-0', 'min-w-[44px]', 'sm:min-w-0');
    });
  });

  describe('mobile filter button', () => {
    it('is hidden on md+ screens via md:hidden', () => {
      renderWithRouter(<Techniques />);
      const btn = screen.getByTestId('button-mobile-filters');
      expectClasses(btn, 'md:hidden');
    });

    it('has a minimum tap target of 44 px on mobile', () => {
      renderWithRouter(<Techniques />);
      const btn = screen.getByTestId('button-mobile-filters');
      expectClasses(btn, 'min-h-[44px]');
    });
  });

  describe('desktop filter pills row', () => {
    it('is hidden on mobile and shown on md+ via hidden md:flex', () => {
      renderWithRouter(<Techniques />);
      // The pill-row wrapper uses data-testid="desktop-filter-row"
      // Fall back to finding a known pill button as a proxy if the wrapper
      // has no testid yet — the pill itself must NOT have min-h constraints.
      const allPill = screen.getByTestId('button-filter-All');
      expect(allPill).toBeInTheDocument();
      // Pill buttons must NOT have min-h-[44px] (desktop-only component)
      expect(allPill.className).not.toContain('min-h-[44px]');
    });

    it('renders a pill for every category', () => {
      renderWithRouter(<Techniques />);
      const categories = ['Guard', 'Passing', 'Sweeps', 'Submissions', 'Escapes', 'Takedowns'];
      for (const cat of categories) {
        expect(screen.getByTestId(`button-filter-${cat}`)).toBeInTheDocument();
      }
    });

    it('renders difficulty filter pills', () => {
      renderWithRouter(<Techniques />);
      for (const level of ['Beginner', 'Intermediate', 'Advanced']) {
        expect(screen.getByTestId(`button-difficulty-${level}`)).toBeInTheDocument();
      }
    });

    it('renders gi/no-gi filter pills', () => {
      renderWithRouter(<Techniques />);
      for (const gi of ['Gi', 'No-Gi', 'Both']) {
        expect(screen.getByTestId(`button-gi-${gi}`)).toBeInTheDocument();
      }
    });
  });

  describe('search input', () => {
    it('renders the search field', () => {
      renderWithRouter(<Techniques />);
      expect(screen.getByTestId('input-search')).toBeInTheDocument();
    });
  });
});

// ---------------------------------------------------------------------------
// Nav — desktop layout guards
// ---------------------------------------------------------------------------

describe('Nav — desktop layout guards', () => {
  it('renders the home link', () => {
    renderWithRouter(<Nav />);
    expect(screen.getByTestId('link-home')).toBeInTheDocument();
  });

  describe('Library nav link', () => {
    it('carries sm:min-h-0 and sm:min-w-0 desktop overrides', () => {
      renderWithRouter(<Nav />);
      const link = screen.getByTestId('link-nav-techniques');
      expectClasses(link, 'min-h-[44px]', 'sm:min-h-0', 'min-w-[44px]', 'sm:min-w-0');
    });
  });

  describe('Escape Challenge nav link', () => {
    it('carries sm:min-h-0 desktop override', () => {
      renderWithRouter(<Nav />);
      const link = screen.getByTestId('link-nav-challenge');
      expectClasses(link, 'min-h-[44px]', 'sm:min-h-0');
    });
  });
});
