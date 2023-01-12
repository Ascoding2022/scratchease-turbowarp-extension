class ScratchEase {
  getInfo() {
    return {
      id: 'scratchease', // change this if you make an actual extension!
      name: 'ScratchEase',
      blocks: [
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is greater than or equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'First value'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Second value'
            }
          }
        }
      ]
    };
  }
  strictlyEquals(args) {
    // Note strict equality: Inputs must match exactly: in type, case, etc.
    return args.ONE === args.TWO || args.ONE > args.TWO;
  }
}
Scratch.extensions.register(new ScratchEase());
