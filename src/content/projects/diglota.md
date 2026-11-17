---
title: Diglota
date: 2026-09-25
lang: English
kind: Project
tags:
  - language learning
  - Spanish
  - local-first
  - desktop
  - AI
description: A reading-first desktop platform for acquiring Spanish in context through the diglot weave method, built local-first with Python and WebView2.
reading: Case study
figure: diglot
year: 2026 —
status: Ongoing
role: Design and development
stack: Python, FastAPI, SQLite, pywebview, WebView2
link: https://github.com/duzui300/diglota
margin:
  - label: The weave
    text: Spanish phrases carry short English glosses and sit inside English prose, so the reader meets the new language in a sentence that is already understandable.
  - label: Offline first
    text: The reading interface, dictionary, coverage metrics, and spaced repetition work without an account, a network, or an API key.
---

Diglota is a reading-first app for learning Spanish through English by the diglot weave. Spanish phrases carrying short English glosses are set into English prose, so the new language arrives inside a sentence the reader can already follow. It is built for independent learners at any level, not for a course or a streak.

## 01 / The idea

Most language tools begin with a sequence: lesson one, lesson two, a review queue, a streak. Diglota begins with a page. The reader chooses a text, reads it, and meets Spanish inside the English. The language is learned in context rather than in isolation, and the context is the thing that makes the next sentence possible.

The diglot weave is the core of the interface. A Spanish phrase appears with a short English gloss, then the prose continues in English. The reader is never asked to understand a full Spanish paragraph before they can read one. The difficulty rises by the amount of Spanish in the weave, not by the number of lessons completed.

## 02 / Reading tools

Click any Spanish word for an instant entry: lemma, tense, and usage. Save a word and it returns in spaced repetition inside the exact sentence where it was found, not in a flashcard that has forgotten its context. Vocabulary coverage metrics show how much of a text is already known, so the reader can choose the next page with some evidence.

The reading interface is the product. Dictionary lookups, saved words, review history, and coverage all sit beside the page rather than in a separate study room. The point is to keep reading, not to leave the text for a quiz.

## 03 / One engine, three surfaces

Version 1.0 runs from one engine across the web app, the command line, and a native Windows window. The desktop app uses pywebview and Edge WebView2, with the FastAPI engine running in-process on an OS-assigned loopback port. The window remembers its geometry and the reader's state.

The Windows setup program installs beside itself, needs no administrator rights, and leaves the database and corpus untouched when updating or uninstalling. The monorepo is split into `packages/core`, `packages/ui`, `packages/web`, and `packages/win`; the 1.0.0 release ships with 580 automated tests.

## 04 / AI, optional

The reading core is local-first and offline. AI is an optional layer: TypeSafe Jev for semantic grading, or any OpenAI-compatible chat model for tutoring and lesson synthesis. It uses the reader's own provider key and can be left off entirely.

## 05 / The reading scene and the weave

Diglota began with a specific friction in my own language routine. After spending three years acquiring Japanese through non-fiction reading and voice conversations, I began studying Spanish. I worked through grammar notes and podcasts, but the leap to authentic text was grueling: opening a foreign-language book meant looking up four words in every sentence, continuously halting the reading flow. Conversely, graded readers felt sanitized and stripped of voice.

The diglot weave offered an entry point: embedding target Spanish terms directly into English sentence frames with minimal glosses. When grammar and context are carried by a language the reader already controls, cognitive load drops sharply. The reader encounters the new vocabulary while maintaining narrative momentum, turning comprehension from an exhausting exercise into an unbroken reading habit.

## 06 / The review tension: cards versus text

The most difficult architectural choice was deciding how saved vocabulary should resurface. The initial prototype included an Anki-like flashcard screen, complete with interval ratings and review queues. Yet during private testing, that screen became a chore: detached from the article where a word was originally discovered, a flashcard felt mechanical and dry.

I abandoned isolated review cards entirely. In the current engine, when a term is marked for spaced repetition, it resurfaces inside the exact sentence and paragraph where it was first met. If a word cannot be understood in its native context, memorizing an isolated dictionary definition rarely helps real reading. The entire product was refactored to keep the reader on the page rather than inside a test module.

## 07 / Editorial redesign and next horizon

Version 1.0.1 replaced the early utilitarian interface with a restrained editorial layout. The dashboard gray gave way to warm paper tones, thin hairline borders, and clear typographic hierarchies. The reading room was unified with the dictionary inspector so that lookups appear beside the text without triggering layout jumps.

At present, Diglota handles local document ingestion and context reviews cleanly. The main challenge ahead is streamlining the generation of balanced weave texts without relying on heavy cloud dependencies. The next phase focuses on improving local parser performance and refining text-alignment heuristics, ensuring the platform remains completely functional offline.

## 08 / Status

The current release is 1.0.1. The code is AGPL-3.0.
