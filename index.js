let startTime = Date.now();

class ScratchEase {
  getInfo() {
    return {
      id: 'ScratchEase',
      name: 'ScratchEase',
      docsURI: 'https://ascoding2022.github.io/scratchease-turbowarp-extension/index.html',
      blocks: [
        {
          opcode: 'whenTimerGreaterThan',
          blockType: Scratch.BlockType.HAT,
          text: 'when simple timer > [TIME]',
          arguments: {
            TIME: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            }
          }
        },
        {
          opcode: 'timer',
          blockType: Scratch.BlockType.REPORTER,
          text: 'simple timer'
        },
        {
          opcode: 'resetTimer',
          blockType: Scratch.BlockType.COMMAND,
          text: 'reset simple timer'
        },
        {
          opcode: 'strictlyEquals',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] strictly equals [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            }
          }
        },
        {
          opcode: 'greaterOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is greater than or equal to [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
        {
          opcode: 'lessOrEqual',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[ONE] is less than or equal to [TWO]',
          arguments: {
            ONE: {
              type: Scratch.ArgumentType.STRING,
            },
            TWO: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '50'
            }
          }
        },
      ]
    };
  }
  whenTimerGreaterThan({TIME}) {
    // console.log(this.timer(), this.timer() > Scratch.Cast.toNumber(TIME));
    return this.timer() > Scratch.Cast.toNumber(TIME);
  }
  timer() {
    return Math.floor((Date.now() - startTime) / 1000);
  }
  resetTimer() {
    startTime = Date.now();
  }
  strictlyEquals(args) {
    return args.ONE === args.TWO;
  }
  greaterOrEqual(args) {
    return args.ONE === args.TWO || args.ONE > args.TWO;
  }
  lessOrEqual(args) {
    return args.ONE === args.TWO || args.ONE < args.TWO;
  }
}

Scratch.extensions.register(new ScratchEase());
