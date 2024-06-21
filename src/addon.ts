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
      // IsResizable: true,
      // IsRotatable: true,
      // Is3D: false,
      // HasImage: true,
      // IsTiled: false,
      // SupportsZElevation: true,
      // SupportsColor: true,
      // SupportsEffects: true,
      // MustPreDraw: false,
      // IsSingleGlobal: false,
      // GooglePlayServicesEnabled: false,
    },
    // AddCommonACEs: {
    //   Position: true,
    //   SceneGraph: true,
    //   Size: true,
    //   Angle: true,
    //   Appearance: true,
    //   ZOrder: true,
    // }
  },
  fileDependencies: {

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