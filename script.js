class ScratchEase {
  getInfo() {
    return {
      id: 'scratchease', // change this if you make an actual extension!
      name: 'ScratchEase',
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
              defaultValue: ''
            }
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
                defaultValue: ''
            }
          }
        }
      ]
    };
  }
  equalsorgreater(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO || args.ONE > args.TWO;
  }
  equalsorless(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO || args.ONE < args.TWO;
  }
}
Scratch.extensions.register(new ScratchEase());
