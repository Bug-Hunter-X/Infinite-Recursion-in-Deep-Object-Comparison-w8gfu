# Infinite Recursion Bug in TypeScript Object Comparison

This repository demonstrates a subtle bug in a TypeScript function designed to compare two objects for deep equality. The function falls into infinite recursion when encountering circular references within the objects being compared.

## The Problem

The `compareObjects` function attempts to recursively compare nested objects and arrays. However, it lacks a mechanism to detect and handle circular references.  When an object contains a reference to itself (directly or indirectly), the recursive calls never terminate, leading to a stack overflow error.

## Reproduction

1. Clone this repository.
2. Run `tsc bug.ts` to compile the TypeScript code.
3. Run `node bug.js` (or your preferred Node.js execution method). You should observe a `RangeError: Maximum call stack size exceeded` error.

## Solution

The solution involves adding a mechanism to track objects that have already been visited during the comparison process.  This prevents the function from revisiting the same objects repeatedly.

## Learning Points

This example highlights the importance of careful consideration when dealing with recursion and object structures in programming.  Circular references are a common source of unexpected behavior and bugs, and robust handling of such scenarios is crucial for creating reliable applications.