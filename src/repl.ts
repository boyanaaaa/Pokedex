import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}

export function startREPL(state: State) {
  state.readline.prompt();

  state.readline.on("line", async (input) => {
    const words = cleanInput(input);

    if (words.length === 0) {
      state.readline.prompt();
      return;
    }

    const command = state.commands[words[0]];

    if (!command) {
      console.log("Unknown command");
      state.readline.prompt();
      return;
    }

    try {
      await command.callback(state, ...words.slice(1));
    } catch (err) {
      console.error(err);
    }

    if (words[0] !== "exit") {
      state.readline.prompt();
    }
  });
}
