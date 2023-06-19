/**
 * Dedupe is a module in Elteth consumer
 * which ensures that each consumer to process transactions exactly-once.
 */
export interface IDedupe {
  deduplicate(tag: string): Promise<boolean>;
}
