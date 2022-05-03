import { CommandGroup } from "./command-group";
import { Command } from "./command";

function MockCommand(): jest.Mocked<Command> {
  return {
    execute: jest.fn(),
  };
}

test("shoud return empty after created", () => {
  const group = new CommandGroup();
  expect(group.empty()).toBe(true);
});

test("should not return empty after adding elements", () => {
  const group = new CommandGroup();
  group.addCommand(MockCommand());
  expect(group.empty()).toBe(false);
});

test("when executeAll, should execute all commands", () => {
  const group = new CommandGroup();
  const firstCommand = MockCommand();
  const secondCommand = MockCommand();

  group.addCommand(firstCommand);
  group.addCommand(secondCommand);
  // @ts-expect-error (unused in mock)
  group.executeAll(null);

  expect(firstCommand.execute).toHaveBeenCalledTimes(1);
  expect(secondCommand.execute).toHaveBeenCalledTimes(1);
});
