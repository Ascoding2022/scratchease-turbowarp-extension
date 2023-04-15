class addons {
  getInfo() {
    return {
      id: 'addons', // change this if you make an actual extension!
      name: 'Addons',
      blocks: [
        {
          opcode: 'equalsorgreater',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is equal or greater than [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'equalsorless',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is equal or less than [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: ''
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        }
      ]
    };
  }
  equalsorgreater(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    var argsone = args.ONE * 1;
    var argstwo = args.TWO * 1;
    return argsone === argstwo || argsone > argstwo;
  }

  equalsorless(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    var argsone = args.ONE * 1;
    var argstwo = args.TWO * 1;
    return argsone === argstwo || argsone < argstwo;
  }
}
Scratch.extensions.register(new Addons());
