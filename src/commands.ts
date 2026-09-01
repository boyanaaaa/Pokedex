import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapb } from "./command_mapb.js";
import { commandMap } from "./command_map.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import type { CLICommand } from "./state.js";
import { commandExplore } from "./commands_explore.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Show next 20 locations",
      callback: commandMap,
    },

    mapb: {
      name: "mapb",
      description: "Show previous 20 locations",
      callback: commandMapb,
    },

    explore: {
      name: "explore",
      description: "Explore a location",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "Catch a pokemon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "Inspect a caught Pokemon",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Display all caught Pokemon",
      callback: commandPokedex,
    },
  };
}
