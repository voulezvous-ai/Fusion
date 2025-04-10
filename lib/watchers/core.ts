import { RuleStore, RuleExecutor } from './rules';

export class MessageWatcher {
  async process(message: any) {
    const rules = await RuleStore.getActiveRules();
    rules.forEach((rule) => {
      if (rule.matches(message)) RuleExecutor.run(rule);
    });
  }
}