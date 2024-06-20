import { BehaviorConfig, BuiltAddonConfig, PluginConfig } from "c3-framework";

const Config: BehaviorConfig = {
  addonType: "behavior",
  // addonTyoe: "plugin"
  // type: "object",
  id: "ExampleAddon",
  name: "Example Addon",
  version: "1.0.0.0",
  category: "general",
  author: "Author",
  website: "https://www.construct.net",
  documentation: "https://www.construct.net",
  description: "Description",
  icon: "icon.svg",
  addonUrl: 'https://www.construct.net/addons/',
  githubUrl: "https://github.com/",
  editorScripts: ['editor.js'],
  info: {
    // defaultImageUrl: undefined,
    Set: {
      CanBeBundled: true,
      IsDeprecated: false,
      IsOnlyOneAllowed: false,
      // IsResizable: false,
      // IsRotatable: false,
      // Is3D: false,
      // HasImage: false,
      // IsTiled: false,
      // SupportsZElevation: false,
      // SupportsColor: false,
      // SupportsEffects: false,
      // MustPreDraw: false,
      // IsSingleGlobal: false,
      // GooglePlayServicesEnabled: false,
    },
    // AddCommonACEs: {
    //   Position: false,
    //   SceneGraph: false,
    //   Size: false,
    //   Angle: false,
    //   Appearance: false,
    //   ZOrder: false,
    // }
  },
  fileDependencies: {
    "anotherLib.ts": 'copy-to-output'
  },
  properties: [
    /*{
      type: "integer",
      id: "property_id",
      options: {
        initialValue: 0,
        interpolatable: false,
      },
      name: "Property Name",
      desc: "Property Description",
    }*/
  ],
  aceCategories: {
    general: "General",
  },
};

export default Config as BuiltAddonConfig;