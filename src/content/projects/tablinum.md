---
title: Tablinum
date: 2026-11-14
lang: English
topics:
  - tools
  - humanities
tags:
  - latin
  - local-first
  - classical-studies
description: An offline-first Latin project workstation for Windows, combining dependency annotation, dual-layer reading hypotheses, and local reference lexicons.
reading: Case study
kind: Project
figure: annotation
year: 2026 —
status: Ongoing
role: Design and development
stack: Tauri 2, React, TypeScript, Rust, SQLite FTS5
link: ""
margin:
  - label: The name
    text: A tablinum was the archive room of a Roman house. The app is a room for keeping texts, readings, and the relations between words.
  - label: A working reading
    text: An AI suggestion never overwrites the reader's working annotation. It joins the stack as an alternative, with its evidence and confidence.
---

Tablinum is a lite, offline-first Latin project workstation for Windows. It is a reading desk rather than a course: annotate cases and word relations, look up morphology and meaning, translate side by side or interlinearly, and keep several translation or commentary projects in one place.

## 01 / The idea

Latin reading is project work. A text accumulates a working reading, alternatives, evidence, notes, and a bibliography, and those things need to stay together. Tablinum treats each text as a project with its own reading protocol, not as a lesson with a score.

The name comes from the archive room of a Roman house. The app is built as a room for the text: a reader, a dictionary, a translation workspace, and a dossier that records the state of the reading.

## 02 / Annotation

The interface is keyboard-first. `Ctrl/Cmd+K` opens the command palette. In the reader, `j` and `k` move by word, `[` and `]` move by sentence, `n` jumps to the next unannotated word, `Enter` opens the dictionary, `r` cycles the renderer, `i` toggles the inspector, and `Esc` clears the selection. A project reopens at its last sentence and scroll position.

Each word can carry a case (NOM, GEN, DAT, ACC, ABL, VOC, LOC) and relations to other words. A word holds a working reading plus alternatives with rationale, evidence, confidence, and source. Ghost arcs show the selected word's competing relations, and the default interlinear view can switch renderers from the reader header. Ablative relations use a distinct dashed green mark.

## 03 / Dictionary and translation

The dictionary gives lemma, form, case, gender, number, concise English and Chinese glosses, and examples in a collapsed full entry. Translation is a workspace beside the text, either side by side or interlinear, with English or Chinese output, context notes, and a bibliography attached to the project.

## 04 / Projects and reference

A project can hold several passages, annotations, translations, notes, a bibliography, and exports. Its reading protocol overrides the global scheme, renderers, languages, relation direction, and display toggles. The dossier opens as an archival file and adds two working registers: the protocol with its global and project sources, and a derived "State of the text" list of open items with jump links.

Separate from the projects, a reference library holds Allen and Greenough's grammar, a searchable index of declension and conjugation patterns, and the dictionary. There is no graded course and no spaced repetition.

## 05 / Offline and AI

Core content works without a network. There are no accounts and no telemetry. The offline data pack includes an edition of the Vulgate Mark for building a project, and the browser preview uses sample texts.

AI is opt-in. An OpenAI-compatible adapter can talk to OpenAI, Azure, OpenRouter, Groq, DeepSeek, Mistral, Ollama, LM Studio, vLLM, or a custom endpoint. It can suggest annotations, auto-annotate a passage with a diff preview, or edit annotations through tools. Every change is marked, previewed, or confirmed, and is undoable. A suggestion joins the stack as an alternative and never overwrites the working reading. The provider key lives in the OS keychain.

## 06 / Classical reading as project work

Tablinum grew out of an intense period of self-study during my third year at university. To manage academic pressure, I spent an hour and a half every evening working through *Wheelock's Latin*. Reading a highly inflected classical language is fundamentally different from acquiring modern conversational speech. Word order is fluid, and understanding a single sentence requires resolving grammatical cases, agreements, and syntactic dependencies simultaneously.

Existing language apps treat study as a gamified track of streaks and quizzes. But reading Cicero, Caesar, or the Vulgate is project work: a reader accumulates working drafts, variant readings, morphological breakdowns, and commentary notes around a single paragraph. Tablinum was designed from the beginning as an archival reading desk rather than a curriculum—a space where text, grammar references, and project dossiers stay bound together.

## 07 / Working hypotheses and the alternative stack

The central challenge in the annotation engine was modeling grammatical ambiguity. In Latin literature, syntactic relationships are often open to legitimate debate—an ablative absolute or a dative construction can be interpreted in multiple ways by different commentators. Forcing the user into a rigid, single-parse tree damaged the integrity of the reading process.

The system was structured around a dual layer: a "working reading" alongside an "alternative stack." The reader establishes a primary interpretation, while competing analyses sit beneath it with recorded sources, rationales, and confidence levels. When an optional AI model suggests an annotation, it is strictly forbidden from overwriting human input; it joins the stack as an unconfirmed alternative that must be explicitly evaluated and committed by the reader.

## 08 / What remains after the MVP

The MVP successfully established the offline core: local dictionary indexing, case annotation, and keyboard-first navigation via Tauri and SQLite FTS5. However, several critical scholarly components remain to be built.

The immediate roadmap includes multi-text corpus management, support for apparatus criticus variants, and export utilities conforming to standard TEI-XML and LaTeX formats. The goal is not to expand Tablinum into an all-in-one suite, but to sharpen its utility as an offline desk for close classical reading.

## 09 / Stack and status

Tablinum is a Tauri 2 desktop app with a React and TypeScript frontend, a Rust workspace, and SQLite FTS5 for storage. The Rust crates separate shared types and annotation validation, the lexicon and project storage, and the AI adapter. The MVP is implemented and builds as a Windows NSIS installer; the design and research dossier remains in the repository.

The code is MIT. The bundled data packs keep their own licenses, including CC BY-SA 4.0 for the Lewis and Latin-Chinese lexicons and the Perseus edition of Allen and Greenough.
