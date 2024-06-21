import { AceClass, Behavior, Condition, Param, Plugin } from "c3-framework";
import Config from "./addon";

const opts = [
  'test',
  'something',
  'another',
];

@AceClass()
// class Instance extends Plugin.Instance(Config) {
class Instance extends Behavior.Instance<IWorldInstance>(Config) {
  constructor() {
    super();
  }

  @Condition('Is Enabled')
  isEnabled() {
    return true;
  }

  @Condition('Is "{0}" Something')
  isSomething(
    @Param({
      items: [
        { test: 'Test' },
        { something: 'Something' },
        { another: 'Another' },
      ],
    })
    tag: combo
  ) {
    return opts[tag] == 'something';
  }

  _release() {
    super._release();
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(o: string) {
    // load state for savegames
  }
}

export default Instance;