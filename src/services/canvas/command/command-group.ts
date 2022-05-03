import { Command } from "./command";

export class CommandGroup {
  private commands: Command[] = [];

  addCommand(command: Command) {
    this.commands.push(command);
  }

  executeAll(context: CanvasRenderingContext2D) {
    this.commands.forEach((command) => {
      command.execute(context);
    });
  }

  empty() {
    return this.commands.length === 0;
  }
}
