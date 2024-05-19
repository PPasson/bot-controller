interface Position {
    x: number;
    y: number;
  }
  
  enum Direction {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
  }
  
  class BotController {
    // bot starts at the position (X, Y) of 0, 0
    private position: Position = { x: 0, y: 0 };

    // facing up North for default
    private direction: Direction = Direction.North;
  
    private readonly directions = [Direction.North, Direction.East, Direction.South, Direction.West];
  
    public processCommands(commands: string): void {
      const commandPattern = /[RLW]\d*/g;
      const matches = commands.match(commandPattern);
  
      if (matches) {
        matches.forEach((command) => {
          this.executeCommand(command);
        });
      }
    }
  
    private executeCommand(command: string): void {
      const action = command[0];
      const value = parseInt(command.slice(1)) || 0;
  
      switch (action) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'W':
          this.walk(value);
          break;
      }
    }
  
    private turnRight(): void {
      const currentIndex = this.directions.indexOf(this.direction);
      this.direction = this.directions[(currentIndex + 1) % 4];
    }
  
    private turnLeft(): void {
      const currentIndex = this.directions.indexOf(this.direction);
      this.direction = this.directions[(currentIndex + 3) % 4];
    }
  
    private walk(distance: number): void {
      switch (this.direction) {
        case Direction.North:
          this.position.y += distance;
          break;
        case Direction.East:
          this.position.x += distance;
          break;
        case Direction.South:
          this.position.y -= distance;
          break;
        case Direction.West:
          this.position.x -= distance;
          break;
      }
    }
  
    public getCurrentPosition(): Position {
      return this.position;
    }
  
    public getCurrentDirection(): Direction {
      return this.direction;
    }
  
    public validateCommands(commands: string): boolean {
      const commandPattern = /^[RLW]\d*$/;
      const matches = commands.match(/[RLW]\d*/g);
      return matches !== null && matches.join('') === commands && matches.every(cmd => commandPattern.test(cmd));
    }
  }
  
  // Main function to read input and execute commands
  const main = () => {
    const args = process.argv.slice(2);
    if (args.length !== 1) {
      console.error('Please provide a single command string as an argument.');
      process.exit(1);
    }
  
    const commandString = args[0];
    const bot = new BotController();

    if (!bot.validateCommands(commandString)) {
      console.error('Invalid command string. Please provide a valid command string.');
      process.exit(1);
    }
  
    bot.processCommands(commandString);
  
    const position = bot.getCurrentPosition();
    const direction = bot.getCurrentDirection();
  
    console.log(`X: ${position.x} Y: ${position.y} Direction: ${direction}`);
  };
  
  main();
  